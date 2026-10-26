"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clinic, SERVICE_KEYS } from "@/lib/clinic";
import { dayNames, dict, isRtl, LANGS, type Lang } from "@/lib/i18n";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export default function SiteClient() {
  const [lang, setLang] = useState<Lang>("en");
  const t = dict[lang];
  const rtl = isRtl(lang);
  const serviceList = useMemo(() => SERVICE_KEYS.map((k) => ({ key: k, ...t.services.items[k] })), [t]);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className={rtl ? "font-sans [text-wrap:balance]" : ""}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-700 text-lg font-bold text-white">H</span>
            <span className="hidden text-sm font-semibold leading-tight text-teal-900 sm:block">
              {clinic.doctor[lang]}
              <span className="block text-[11px] font-normal text-slate-500">Erbil · CMC Private Hospital</span>
            </span>
          </a>
          <nav className="mx-auto hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-teal-700">{t.nav.about}</a>
            <a href="#services" className="hover:text-teal-700">{t.nav.services}</a>
            <a href="#hours" className="hover:text-teal-700">{t.nav.hours}</a>
            <a href="#contact" className="hover:text-teal-700">{t.nav.contact}</a>
          </nav>
          <div className="ms-auto flex items-center gap-2 md:ms-0">
            <div className="flex overflow-hidden rounded-lg border border-slate-200 text-xs">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1.5 transition ${lang === l.code ? "bg-teal-700 text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a href="#book" className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-800">
              {t.nav.book}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="relative isolate overflow-hidden bg-slate-900">
        <Image src="/images/hero.jpg" alt="" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-slate-900/80 to-slate-900" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <span className="inline-block rounded-full border border-teal-300/40 bg-teal-400/10 px-4 py-1.5 text-xs font-medium text-teal-200">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{t.hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#book" className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-900/40 hover:bg-teal-400">
              {t.hero.cta}
            </a>
            <a href={`tel:${clinic.phoneHref}`} className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">
              {t.hero.call} · {clinic.phone}
            </a>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              [t.hero.stat1, t.hero.stat1label],
              [t.hero.stat2, t.hero.stat2label],
              [t.hero.stat3, t.hero.stat3label],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="text-3xl font-bold text-teal-300">{v}</dt>
                <dd className="mt-1 text-sm text-slate-300">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <Image src="/images/clinic.jpg" alt="Clinic" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">{t.about.title}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{t.about.lead}</h2>
            <p className="mt-5 leading-relaxed text-slate-600">{t.about.body}</p>
            <ul className="mt-7 space-y-3">
              {t.about.creds.map((c) => (
                <li key={c} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-100 text-xs text-teal-700">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <a href={clinic.orcidUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:border-teal-500 hover:text-teal-700">
                ORCID {clinic.orcid}
              </a>
              <a href={clinic.instagramUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:border-teal-500 hover:text-teal-700">
                Instagram @{clinic.instagram}
              </a>
              <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:border-teal-500 hover:text-teal-700">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <div className="bg-slate-50">
        <Section id="services">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">{t.services.title}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">{t.services.lead}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((s) => (
              <div key={s.key} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Hours */}
      <Section id="hours">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">{t.hours.title}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">{t.hours.lead}</h2>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white">
              {clinic.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between border-b border-slate-100 px-5 py-3 last:border-0">
                  <span className="font-medium text-slate-700">{dayNames[lang][h.day]}</span>
                  <span className={h.open ? "font-mono text-sm text-teal-700" : "text-sm text-slate-400"}>
                    {h.open ? `${h.open} – ${h.close}` : t.hours.closed}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-teal-900 p-8 text-teal-50">
            <h3 className="text-xl font-semibold">{t.hours.address}</h3>
            <p className="mt-3 leading-relaxed text-teal-100">{t.hours.addressValue}</p>
            <a href={`tel:${clinic.phoneHref}`} className="mt-6 block text-2xl font-bold tracking-wide text-white">
              {clinic.phone}
            </a>
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-xl bg-teal-500 px-5 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              {t.hours.directions}
            </a>
          </div>
        </div>
      </Section>

      {/* Booking + contact */}
      <div className="bg-slate-50">
        <Section id="book">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <BookingForm lang={lang} />
            </div>
            <div className="lg:col-span-2" id="contact">
              <ContactForm lang={lang} />
            </div>
          </div>
        </Section>
      </div>

      <footer className="bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto max-w-6xl px-5 text-sm">
          <p className="font-semibold text-white">{clinic.doctor[lang]}</p>
          <p className="mt-2">{t.hours.addressValue} · {clinic.phone}</p>
          <p className="mt-4 text-xs">{t.footer.disclaimer}</p>
          <p className="mt-1 text-xs">© {new Date().getFullYear()} · {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function field(rtl: boolean) {
  return `w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 ${rtl ? "text-right" : ""}`;
}

function BookingForm({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const rtl = isRtl(lang);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ fullName: "", phone: "", city: "", service: "", preferredDate: "", preferredTime: "", notes: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.service) {
      setErr(t.book.required);
      return;
    }
    setErr("");
    setState("sending");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: lang }),
      });
      if (!res.ok) throw new Error();
      setState("done");
      setForm({ fullName: "", phone: "", city: "", service: "", preferredDate: "", preferredTime: "", notes: "" });
    } catch {
      setState("error");
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">{t.book.title}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">{t.book.lead}</h2>

      {state === "done" ? (
        <div className="mt-6 rounded-2xl bg-teal-50 p-6 text-teal-800">
          <p className="font-medium">{t.book.success}</p>
          <button onClick={() => setState("idle")} className="mt-4 text-sm font-semibold text-teal-700 underline">
            {t.book.submit}
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input className={field(rtl)} placeholder={t.book.name} value={form.fullName} onChange={set("fullName")} />
          <input className={field(rtl)} placeholder={t.book.phone} value={form.phone} onChange={set("phone")} dir="ltr" />
          <input className={field(rtl)} placeholder={t.book.city} value={form.city} onChange={set("city")} />
          <select className={field(rtl)} value={form.service} onChange={set("service")}>
            <option value="">{t.book.service}</option>
            {SERVICE_KEYS.map((k) => (
              <option key={k} value={t.services.items[k].title}>
                {t.services.items[k].title}
              </option>
            ))}
          </select>
          <input type="date" className={field(rtl)} value={form.preferredDate} onChange={set("preferredDate")} />
          <select className={field(rtl)} value={form.preferredTime} onChange={set("preferredTime")}>
            <option value="">{t.book.time}</option>
            {["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"].map((x) => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>
          <textarea rows={4} className={`sm:col-span-2 ${field(rtl)}`} placeholder={t.book.notes} value={form.notes} onChange={set("notes")} />
          {err && <p className="sm:col-span-2 text-sm text-red-600">{err}</p>}
          {state === "error" && <p className="sm:col-span-2 text-sm text-red-600">{t.book.error}</p>}
          <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
            <button disabled={state === "sending"} className="rounded-xl bg-teal-700 px-7 py-3 font-semibold text-white hover:bg-teal-800 disabled:opacity-60">
              {state === "sending" ? t.book.sending : t.book.submit}
            </button>
            <span className="text-xs text-slate-500">{t.book.emergency}</span>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactForm({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const rtl = isRtl(lang);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", body: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.contact || !form.body) return;
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSent(true);
    setForm({ name: "", contact: "", body: "" });
  }

  return (
    <div className="h-full rounded-3xl bg-slate-900 p-7 text-slate-200 sm:p-9">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">{t.contact.title}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{t.contact.lead}</h2>
      {sent ? (
        <p className="mt-6 rounded-2xl bg-teal-500/15 p-5 text-teal-200">{t.contact.sent}</p>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            className={`w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400 ${rtl ? "text-right" : ""}`}
            placeholder={t.contact.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className={`w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400 ${rtl ? "text-right" : ""}`}
            placeholder={t.contact.contact}
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
          <textarea
            rows={5}
            className={`w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-teal-400 ${rtl ? "text-right" : ""}`}
            placeholder={t.contact.message}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <button className="w-full rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">{t.contact.send}</button>
        </form>
      )}
      <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-sm">
        <a href={`tel:${clinic.phoneHref}`} className="block hover:text-teal-300">📞 {clinic.phone}</a>
        <a href={clinic.instagramUrl} target="_blank" rel="noreferrer" className="block hover:text-teal-300">📷 @{clinic.instagram}</a>
        <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="block hover:text-teal-300">📍 Inside CMC Private Hospital, Erbil</a>
      </div>
    </div>
  );
}
