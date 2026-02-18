import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { IntegrationCard } from "./IntegrationCard";

interface Integration {
  id: string;
  name: string;
  icon: string;
  description: string;
  status: "connected" | "disconnected" | "error";
  apiKey: string;
  apiKeySet: boolean;
}

export function IntegrationsTab() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "resend",
      name: "Resend",
      icon: "📧",
      description: "Email sending service for contact form submissions",
      status: "disconnected",
      apiKey: "",
      apiKeySet: false,
    },
    {
      id: "streak",
      name: "Streak CRM",
      icon: "📊",
      description: "CRM integration for lead tracking and management",
      status: "disconnected",
      apiKey: "",
      apiKeySet: false,
    },
    {
      id: "n8n",
      name: "n8n",
      icon: "⚙️",
      description: "Workflow automation platform integration",
      status: "disconnected",
      apiKey: "",
      apiKeySet: false,
    },
  ]);

  const [showApiKeys, setShowApiKeys] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  // Try to load credentials from environment or bluechimp repo on mount
  useEffect(() => {
    loadCredentials();
  }, []);

  const loadCredentials = async () => {
    setLoading(true);
    try {
      // In a real app, this would fetch from /api/integrations/load-credentials
      // For now, we'll just check localStorage for any previously saved keys
      const savedIntegrations = localStorage.getItem("integrations");
      if (savedIntegrations) {
        const parsed = JSON.parse(savedIntegrations);
        setIntegrations(parsed);
      }
    } catch (err) {
      console.error("Failed to load credentials:", err);
    }
    setLoading(false);
  };

  const handleApiKeyChange = (integrationId: string, newKey: string) => {
    setIntegrations(
      integrations.map((int) =>
        int.id === integrationId
          ? { ...int, apiKey: newKey, apiKeySet: newKey.length > 0 }
          : int
      )
    );
  };

  const handleSave = (integrationId: string) => {
    const integration = integrations.find((int) => int.id === integrationId);
    if (!integration) return;

    // Save to localStorage (in production, this would go to a secure backend)
    const updated = integrations.map((int) =>
      int.id === integrationId
        ? { ...int, status: "connected" as const }
        : int
    );
    setIntegrations(updated);
    localStorage.setItem("integrations", JSON.stringify(updated));
  };

  const handleTest = async (integrationId: string) => {
    const integration = integrations.find((int) => int.id === integrationId);
    if (!integration?.apiKeySet) {
      alert("Please enter an API key first");
      return;
    }

    setLoading(true);
    try {
      // In a real app, this would call /api/integrations/test/:integrationId
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      const updated = integrations.map((int) =>
        int.id === integrationId
          ? { ...int, status: "connected" as const }
          : int
      );
      setIntegrations(updated);
      localStorage.setItem("integrations", JSON.stringify(updated));
    } catch (err) {
      const updated = integrations.map((int) =>
        int.id === integrationId
          ? { ...int, status: "error" as const }
          : int
      );
      setIntegrations(updated);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">API Integrations</h2>
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
            loading={loading}
          />
        ))}
      </div>

      {/* Reload credentials button */}
      <button
        onClick={loadCredentials}
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-300 text-sm font-medium hover:text-white hover:border-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
        Reload from Environment
      </button>
    </div>
  );
}
