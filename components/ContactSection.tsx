"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, Send, Copy, Check, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, InstagramIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement("textarea");
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = encodeURIComponent(
      formData.subject.trim()
        ? `[Portofolio] ${formData.subject.trim()} - dari ${formData.name.trim()}`
        : `[Portofolio] Pesan Baru dari ${formData.name.trim()}`
    );

    const emailBody = encodeURIComponent(
      `Halo Alif,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n--\nDikirim via formulir kontak portofolio`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-zinc-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">
                Mari Terhubung &amp; Berkolaborasi
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
                Punya tawaran proyek, peluang magang, riset bersama, atau sekadar ingin bertukar pikiran seputar pengembangan software? Pintu saya selalu terbuka.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Split Layout: Form di Sisi Kiri (7 Cols) & Info Editorial di Sisi Kanan (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SISI KIRI: Formulir Kontak Interaktif */}
          <ScrollReveal delay={40} className="lg:col-span-7 h-full">
            <div className="rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-black text-zinc-950 tracking-tight flex items-center gap-2">
                      <span>Kirim Pesan Langsung</span>
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Pesan akan otomatis diformat dan dikirimkan via Gmail.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-50 border border-zinc-200/60 px-2 py-1 rounded-md">
                    Direct Gmail
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono font-semibold text-zinc-700 mb-1.5"
                      >
                        Nama Lengkap <span className="text-zinc-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Budi Santoso"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-xs placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono font-semibold text-zinc-700 mb-1.5"
                      >
                        Alamat Email <span className="text-zinc-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. budi@perusahaan.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-xs placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono font-semibold text-zinc-700 mb-1.5"
                    >
                      Subjek / Topik Diskusi
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Peluang Magang / Diskusi Proyek Web & AI"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-xs placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-semibold text-zinc-700 mb-1.5"
                    >
                      Pesan Anda <span className="text-zinc-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan, rincian proyek, atau pertanyaan yang ingin Anda sampaikan..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-xs placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all font-mono resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <Magnetic strength={0.25} className="self-start sm:self-auto">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim via Gmail</span>
                      </button>
                    </Magnetic>

                    {submitted && (
                      <span className="text-[11px] font-mono text-zinc-600 animate-fadeIn flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-zinc-950" />
                        <span>Membuka aplikasi email Anda...</span>
                      </span>
                    )}
                  </div>
                </form>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Format terstandarisasi</span>
                <span>Bebas spam &amp; privasi terjaga</span>
              </div>
            </div>
          </ScrollReveal>

          {/* SISI KANAN: Editorial Information & 1-Click Copy (Pilihan A) */}
          <ScrollReveal delay={80} className="lg:col-span-5 h-full">
            <div className="rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="border-b border-zinc-100 pb-4 mb-6">
                  <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                    Kontak Cepat &amp; Info Profil
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Salin email secara instan atau kunjungi jejaring sosial saya.
                  </p>
                </div>

                {/* 1-Click Copy Email Card */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-700" />
                      <span>Email Utama</span>
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Tersedia</span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono font-bold text-zinc-900 break-all mb-3 select-all">
                    {personalInfo.email}
                  </p>

                  <Magnetic strength={0.22}>
                    <button
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-mono font-semibold text-zinc-800 hover:text-zinc-950 transition-all shadow-2xs active:scale-98 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-zinc-950" />
                          <span className="text-zinc-950 font-bold">Email Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Salin Alamat Email</span>
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>

                {/* Info Metadata: Lokasi & Estimasi Respons */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-zinc-100 text-zinc-700 shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Domisili &amp; Lokasi</p>
                      <p className="text-zinc-500 text-[11px]">
                        Palu, Sulawesi Tengah, Indonesia (WITA / UTC+8)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-zinc-100 text-zinc-700 shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Kecepatan Respons</p>
                      <p className="text-zinc-500 text-[11px]">
                        Umumnya membalas dalam kurun waktu 1x24 jam
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Link Row */}
              <div className="pt-6 border-t border-zinc-100">
                <p className="text-xs font-mono font-semibold text-zinc-700 mb-3">
                  Kanal Profesional &amp; Sosial
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <Magnetic strength={0.3}>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-xs font-mono font-medium text-zinc-800 hover:text-zinc-950 transition-all shadow-2xs active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </Magnetic>

                  {personalInfo.instagram && (
                    <Magnetic strength={0.3}>
                      <a
                        href={personalInfo.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-xs font-mono font-medium text-zinc-800 hover:text-zinc-950 transition-all shadow-2xs active:scale-95"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Instagram</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    </Magnetic>
                  )}

                  <Magnetic strength={0.3}>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-xs font-mono font-medium text-zinc-800 hover:text-zinc-950 transition-all shadow-2xs active:scale-95"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Mailto</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

