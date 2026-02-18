import { CheckCircle2, AlertCircle, Eye, EyeOff, Copy, Check } from "lucide-react";
import { useState } from "react";

interface IntegrationCardProps {
  integration: {
    id: string;
    name: string;
    icon: string;
    description: string;
    status: "connected" | "disconnected" | "error";
    statusMessage: string;
    apiKey: string;
    apiKeySet: boolean;
  };
  showApiKey: boolean;
  onToggleApiKeyVisibility: () => void;
  onApiKeyChange: (key: string) => void;
  onSave: () => void;
  onTest: () => void;
  loading: boolean;
}

export function IntegrationCard({
  integration,
  showApiKey,
  onToggleApiKeyVisibility,
  onApiKeyChange,
  onSave,
  onTest,
  loading,
}: IntegrationCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(integration.apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusColor = () => {
    switch (integration.status) {
      case "connected":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "error":
        return "bg-red-500/10 border-red-500/30 text-red-400";
      default:
        return "bg-slate-700/20 border-slate-600/50 text-slate-400";
    }
  };

  const getStatusIcon = () => {
    switch (integration.status) {
      case "connected":
        return <CheckCircle2 size={16} />;
      case "error":
        return <AlertCircle size={16} />;
      default:
        return <AlertCircle size={16} />;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="text-3xl">{integration.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {integration.name}
            </h3>
            <p className="text-sm text-slate-400">{integration.description}</p>
          </div>
        </div>
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${getStatusColor()}`}
        >
          {getStatusIcon()}
          {integration.status === "connected"
            ? "Connected"
            : integration.status === "error"
              ? "Error"
              : "Not Connected"}
        </div>
      </div>

      {/* API Key Input */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          API Key
        </label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type={showApiKey ? "text" : "password"}
              value={integration.apiKey}
              onChange={(e) => onApiKeyChange(e.target.value)}
              placeholder="Paste your API key here..."
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-sm"
            />
            <button
              type="button"
              onClick={onToggleApiKeyVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {integration.apiKey && (
            <button
              onClick={copyToClipboard}
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition-colors"
              title="Copy API key"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={onSave}
          disabled={!integration.apiKey || loading}
          className="flex-1 px-4 py-2.5 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-medium hover:bg-cyan-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save
        </button>
        <button
          onClick={onTest}
          disabled={!integration.apiKeySet || loading}
          className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Testing..." : "Test Connection"}
        </button>
      </div>

      {/* Status message */}
      {integration.statusMessage && (
        <p
          className={`text-xs mt-1 ${
            integration.status === "connected"
              ? "text-green-400"
              : integration.status === "error"
                ? "text-red-400"
                : "text-slate-400"
          }`}
        >
          {integration.statusMessage}
        </p>
      )}
    </div>
  );
}
