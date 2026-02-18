import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings, Zap, Menu, X } from "lucide-react";
import { IntegrationsTab } from "@/components/admin/IntegrationsTab";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("integrations");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("adminEmail") || "";

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    navigate("/login");
  };

  const tabs = [
    { id: "integrations", label: "Integrations", icon: Zap },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-primary-500 flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-slate-400">{email}</span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 px-6 py-4 space-y-4">
            <span className="block text-sm text-slate-400">{email}</span>
            <button
              onClick={handleLogout}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab navigation */}
        <div className="mb-8">
          <div className="flex gap-2 border-b border-slate-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-cyan-500 text-cyan-400"
                      : "border-transparent text-slate-400 hover:text-slate-300"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div className="space-y-8">
          {activeTab === "integrations" && <IntegrationsTab />}
          {activeTab === "settings" && (
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-slate-900/60">
              <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
              <p className="text-slate-400">Settings tab coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
