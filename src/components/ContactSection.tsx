import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare, MapPin, Send, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#8b5cf6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Title */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-['JetBrains_Mono'] tracking-widest text-[#8b5cf6] font-semibold uppercase flex items-center gap-2">
            <span>07.</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#f8fafc]">
            Let's Build Something Together
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#94a3b8] max-w-3xl leading-relaxed">
            Have an internship opportunity, a project idea, or just want to chat about tech & design? My inbox is always open!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div
              id="contact-email-card"
              className="p-5 rounded-2xl bg-[#111827]/80 border border-[#1e293b] hover:border-[#8b5cf6]/40 shadow-xl backdrop-blur-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center text-[#8b5cf6]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-['Space_Grotesk'] text-sm font-semibold text-[#f8fafc] hover:text-[#38bdf8] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#1e293b]/70 hover:bg-[#1e293b] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#111827]/80 border border-[#1e293b] hover:border-[#38bdf8]/40 shadow-xl backdrop-blur-md transition-all flex items-center gap-3.5 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center text-[#38bdf8]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                  LinkedIn Connection
                </div>
                <div className="font-['Space_Grotesk'] text-sm font-semibold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                  {PERSONAL_INFO.linkedin}
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={`https://${PERSONAL_INFO.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#111827]/80 border border-[#1e293b] hover:border-white/30 shadow-xl backdrop-blur-md transition-all flex items-center gap-3.5 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center text-[#f8fafc]">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                  GitHub Repositories
                </div>
                <div className="font-['Space_Grotesk'] text-sm font-semibold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                  {PERSONAL_INFO.github}
                </div>
              </div>
            </a>

            {/* Discord & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#111827]/80 border border-[#1e293b] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center text-[#a855f7]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                    Discord
                  </div>
                  <div className="font-['Space_Grotesk'] text-xs font-semibold text-[#f8fafc]">
                    {PERSONAL_INFO.discord}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#111827]/80 border border-[#1e293b] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0b0f19] border border-[#1e293b] flex items-center justify-center text-[#10b981]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#64748b]">
                    Location
                  </div>
                  <div className="font-['Space_Grotesk'] text-xs font-semibold text-[#f8fafc]">
                    Austin, TX
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#111827]/80 border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center mx-auto text-[#10b981]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#f8fafc]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm font-['Inter'] text-[#94a3b8] max-w-md mx-auto">
                  Thank you for reaching out, Alex will review your note and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-['Space_Grotesk'] font-semibold text-[#cbd5e1]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-[#1e293b] focus:border-[#8b5cf6] outline-none text-sm text-[#f8fafc] placeholder-[#475569] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-['Space_Grotesk'] font-semibold text-[#cbd5e1]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-[#1e293b] focus:border-[#8b5cf6] outline-none text-sm text-[#f8fafc] placeholder-[#475569] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-['Space_Grotesk'] font-semibold text-[#cbd5e1]">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Summer 2025 SDE Internship Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-[#1e293b] focus:border-[#8b5cf6] outline-none text-sm text-[#f8fafc] placeholder-[#475569] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-['Space_Grotesk'] font-semibold text-[#cbd5e1]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, role, or project opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-[#1e293b] focus:border-[#8b5cf6] outline-none text-sm text-[#f8fafc] placeholder-[#475569] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-['Space_Grotesk'] font-bold text-sm bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:brightness-110 text-white shadow-lg shadow-[#8b5cf6]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
