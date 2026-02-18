import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { IntegrationCard } from "./IntegrationCard";

interface Integration {
  id: string;
  name: string;
  icon: string;
  description: string;
  status: "connected" | "disconnected" | "error";
  statusMessage: string;
  apiKey: string;
  apiKeySet: boolean;
}

const defaultIntegrations: Integration[] = [
  {
    id: "resend",
    name: "Resend",
    icon: "📧",
    description: "Email sending service for contact form submissions",
    status: "disconnected",
    statusMessage: "",
    apiKey: "",
    apiKeySet: false,
  },
  {
    id: "streak",
    name: "Streak CRM",
    icon: "📊",
    description: "CRM integration for lead tracking and management",
    status: "disconnected",
    statusMessage: "",
    apiKey: "",
    apiKeySet: false,
  },
  {
    id: "n8n",
    name: "n8n",
    icon: "⚙️",
    description: "Workflow automation platform integration",
    status: "disconnected",
    statusMessage: "",
    apiKey: "",
    apiKeySet: false,
  },
];

export function IntegrationsTab() {
  const [integrations, setIntegrations] =
    useState<Integration[]>(defaultIntegrations);
  const [showApiKeys, setShowApiKeys] = useState<Record<string, boolean>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);

  // Load previously saved keys from localStorage on mount
  useEffect(() => {
    loadCredentials();
  }, []);

  const loadCredentials = () => {
    setGlobalLoading(true);
    try {
      const saved = localStorage.getItem("findable_integrations");
      if (saved) {
        const parsed: Integration[] = JSON.parse(saved);
        // Merge saved keys into defaults to pick up any new integrations
        const merged = defaultIntegrations.map((def) => {
          const savedInt = parsed.find((s) => s.id === def.id);
          return savedInt
            ? { ...def, apiKey: savedInt.apiKey, apiKeySet: !!savedInt.apiKey, status: savedInt.status, statusMessage: savedInt.statusMessage || "" }
            : def;
        });
        setIntegrations(merged);
      }
    } catch (err) {
      console.error("Failed to load credentials:", err);
    }
    setGlobalLoading(false);
  };

  const persist = (updated: Integration[]) => {
    // Strip apiKey before storing — only save a masked version
    // Actually for this admin panel we need the key for testing, so store it
    localStorage.setItem("findable_integrations", JSON.stringify(updated));
  };

  const handleApiKeyChange = (integrationId: string, newKey: string) => {
    const updated = integrations.map((int) =>
      int.id === integrationId
        ? { ...int, apiKey: newKey, apiKeySet: newKey.length > 0, status: "disconnected" as const, statusMessage: "" }
        : int
    );
    setIntegrations(updated);
  };

  const handleSave = (integrationId: string) => {
    const updated = integrations.map((int) =>
      int.id === integrationId && int.apiKeySet
        ? { ...int, statusMessage: "Key saved. Click Test to verify." }
        : int
    );
    setIntegrations(updated);
    persist(updated);
  };

  const handleTest = async (integrationId: string) => {
    const integration = integrations.find((int) => int.id === integrationId);
    if (!integration?.apiKeySet) {
      alert("Please enter an API key first");
      return;
    }

    setLoadingId(integrationId);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("/api/integrations/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          integration: integrationId,
          apiKey: integration.apiKey,
        }),
      });

      const data = await response.json();

      const updated = integrations.map((int) =>
        int.id === integrationId
          ? {
              ...int,
              status: data.success
                ? ("connected" as const)
                : ("error" as const),
              statusMessage: data.message || "",
            }
          : int
      );
      setIntegrations(updated);
      persist(updated);
    } catch (err) {
      const updated = integrations.map((int) =>
        int.id === integrationId
          ? {
              ...int,
              status: "error" as const,
              statusMessage: "Connection failed. Check your network.",
            }
          : int
      );
      setIntegrations(updated);
      persist(updated);
    }

    setLoadingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          API Integrations
        </h2>
        <p className="text-slate-400">
          Manage external service integrations and API credentials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.id}
            integration={integration}
            showApiKey={showApiKeys[integration.id] || false}
            onToggleApiKeyVisibility={() =>
              setShowApiKeys((prev) => ({
                ...prev,
                [integration.id]: !prev[integration.id],
              }))
            }
            onApiKeyChange={(key) => handleApiKeyChange(integration.id, key)}
            onSave={() => handleSave(integration.id)}
            onTest={() => handleTest(integration.id)}
            loading={loadingId === integration.id}
          />
        ))}
      </div>

      {/* Reload button */}
      <button
        onClick={loadCredentials}
        disabled={globalLoading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-300 text-sm font-medium hover:text-white hover:border-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw size={16} className={globalLoading ? "animate-spin" : ""} />
        Reload Saved Keys
      </button>
    </div>
  );
}
