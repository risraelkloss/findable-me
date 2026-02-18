import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate email
      if (email !== "israel@findable.me") {
        setError("Invalid email. Only israel@findable.me can access admin panel.");
        setLoading(false);
        return;
      }

      // Validate password against backend password (stored in env)
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      const { token } = await response.json();
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminEmail", email);
      navigate("/admin");
    } catch (err) {
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-cyan-500/10 via-primary-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-primary-500 flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="text-2xl font-bold text-white">Findable Admin</span>
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            Admin Access
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Sign in to manage integrations and settings
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="israel@findable.me"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Backend Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter backend password"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-primary-500 text-white font-semibold hover:from-cyan-400 hover:to-primary-400 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer note */}
          <p className="text-xs text-slate-500 text-center mt-6">
            This admin panel is protected. Only authorized users can access.
          </p>
        </div>
      </div>
    </section>
  );
}
