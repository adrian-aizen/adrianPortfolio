import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../services/api";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef(null);

  /* close on Escape */
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  /* lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const handleReset = () => setStatus("idle");

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/10 overflow-hidden"
        style={{ animation: "modalIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {/* Gold top bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af6e] to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6">
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af6e]">
              Get in touch
            </p>
            <h2 className="font-display text-2xl text-white">Start a Conversation</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-white/10 text-[#555] hover:border-[#d4af6e]/40 hover:text-[#d4af6e] transition-all duration-200 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div className="mx-8 h-px bg-white/6" />

        {/* ── Success state ── */}
        {status === "success" ? (
          <div className="px-8 py-12 text-center space-y-4">
            <div className="text-4xl mb-2">✦</div>
            <p className="font-display text-2xl text-[#d4af6e]">Message Sent</p>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs mx-auto">
              Thanks! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 border border-white/10 text-xs tracking-[0.2em] uppercase text-[#666] hover:border-[#d4af6e]/40 hover:text-[#d4af6e] transition-all duration-200"
            >
              Send Another
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-[0.25em] uppercase text-[#444]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-transparent border border-white/8 px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#d4af6e]/50 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-[0.25em] uppercase text-[#444]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/8 px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#d4af6e]/50 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-[0.25em] uppercase text-[#444]">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border border-white/8 px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#d4af6e]/50 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400/80 text-xs tracking-wide">{errorMsg}</p>
            )}

            {/* Submit */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <p className="text-[#333] text-[11px]">
                I'll reply within 24–48 hours.
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3 bg-[#d4af6e] text-[#0e0e0e] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span className="inline-block w-3 h-3 border border-[#0e0e0e]/40 border-t-[#0e0e0e] rounded-full animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Gold bottom bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af6e]/40 to-transparent" />
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}