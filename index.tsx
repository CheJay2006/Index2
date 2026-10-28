import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUp, Check, Code2, Palette, Film, Menu, X, MessageCircle, MapPin,
  Instagram, Youtube, Github, Music2, Leaf, Plus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ceylon Industries | Calm, crafted web & design studio" },
      { name: "description", content: "Websites, brand design and video editing from Homagama, Sri Lanka — by Chethina Jayawardhana." },
      { property: "og:title", content: "Ceylon Industries | Chethina Jayawardhana" },
      { property: "og:description", content: "Websites, brand design and video editing from Homagama, Sri Lanka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gh = (f: string) => `https://github.com/CheJay2006/CheJay/blob/main/${f}?raw=true`;
const WA = "94700000000";

const nav = [["Services", "services"], ["Process", "process"], ["Work", "work"], ["Pricing", "pricing"], ["FAQ", "faq"]];

const services = [
  { icon: Code2, t: "Web Development", d: "Fast, mobile-friendly websites built to rank well and quietly bring in customers around the clock." },
  { icon: Palette, t: "Brand Design", d: "Clear visual identities — logos, colours and type — that earn trust at first glance." },
  { icon: Film, t: "Video & Motion", d: "Cinematic edits and gentle motion graphics through our sub-brand, Ceylon Crimson Creations." },
];

const steps = [
  ["Conversation", "A relaxed chat to understand your goals, audience and budget."],
  ["Design", "Wireframes and visual direction you can review and refine."],
  ["Build", "Careful development with weekly progress previews."],
  ["Launch & care", "Go live, plus support so everything keeps running smoothly."],
];

const work = [
  { img: gh("DeWatermark.ai_1750423268489%20(1).jpeg"), tag: "Video thumbnails", t: "Cinematic #1", cat: "video" },
  { img: gh("Black%20Technology%20LinkedIn%20Banner.png"), tag: "Brand design", t: "Tech Startup Identity", cat: "brand" },
  { img: gh("01c288c8-f82a-4531-ae89-344604f11668.jpg"), tag: "Web dev", t: "Corporate Landing Page", cat: "web" },
];

const plans = [
  { n: "Starter", d: "For small local businesses.", p: 45, f: ["Single page landing site", "Mobile responsive", "Basic SEO setup"] },
  { n: "Professional", d: "For growing brands needing motion.", p: 95, f: ["Up to 5 pages", "Advanced UI & animations", "High-converting CTAs"], pop: true },
  { n: "E-Commerce", d: "Full online stores ready to sell.", p: 150, plus: true, f: ["Full store setup", "Payment gateway", "Advanced local SEO"] },
];

const quotes: [string, string][] = [
  ["Chethina delivered our website ahead of schedule and the design completely blew us away. The loading speed is incredible.", "Local tech client"],
  ["Patient, thoughtful and genuinely creative. Our new brand finally feels like us.", "Café owner, Colombo"],
  ["The video edits were smooth and professional — our engagement doubled within a month.", "YouTube creator"],
];

const faqs = [
  ["How long does a project take?", "Starter sites usually take 1–2 weeks, Professional 3–4 weeks, and E‑Commerce 4–6 weeks depending on content."],
  ["Do I need to provide content?", "It helps, but not required. I can write copy, source imagery and help shape your message."],
  ["What about hosting and domains?", "I’ll guide you through setup or handle it for you, and explain any running costs up front."],
  ["Can you update my site later?", "Yes — optional monthly care plans cover updates, backups and small changes."],
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [care, setCare] = useState(false);
  const [q, setQ] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", on);
    const id = setInterval(() => setQ((x) => (x + 1) % quotes.length), 6000);
    return () => { window.removeEventListener("scroll", on); clearInterval(id); };
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi! I'm ${f.get("name")} (${f.get("email")}). Service: ${f.get("service")}.\n${f.get("details")}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const shown = work.filter((w) => filter === "all" || w.cat === filter);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-display text-xl">
            <Leaf className="h-5 w-5 text-primary" /> Ceylon Industries
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>)}
            <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition-opacity hover:opacity-90">Get a quote</a>
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
            {[...nav, ["Contact", "contact"]].map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center px-6 pt-24">
        <div className="calm-glow breathe pointer-events-none absolute inset-0 -z-10" />
        <div className="fade-up mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-block rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground">A quiet digital studio · Homagama, Sri Lanka</p>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">Thoughtful websites,<br /><em className="text-primary">calmly crafted.</em></h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">Websites that convert, brand design that builds trust, and video that tells your story — made with care, never rushed.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="rounded-full bg-primary px-7 py-3 text-primary-foreground transition-opacity hover:opacity-90">Start your project</a>
            <a href="#work" className="rounded-full border border-border bg-card px-7 py-3 transition-colors hover:bg-muted">See our work</a>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 text-center">
            {[["30+", "Projects"], ["100%", "On time"], ["24h", "Reply time"]].map(([n, l]) => (
              <div key={l}><div className="font-display text-3xl">{n}</div><div className="text-sm text-muted-foreground">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" title="What we do" sub="Complete digital solutions, gently guided from idea to launch.">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="calm-card p-8 transition-transform duration-500 hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-2xl bg-secondary p-3 text-primary"><I className="h-6 w-6" /></div>
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <a href="https://youtube.com/@lumoleap" target="_blank" rel="noreferrer" className="calm-card mt-6 flex flex-col items-start justify-between gap-4 bg-sand p-8 md:flex-row md:items-center">
          <div><p className="text-sm text-accent-foreground">Featured sub-brand</p><h3 className="text-2xl">Ceylon Crimson Creations</h3><p className="mt-1 text-muted-foreground">Visual effects, tech aesthetics and cinematic editing.</p></div>
          <span className="rounded-full bg-card px-5 py-2 text-sm">Visit channel →</span>
        </a>
      </Section>

      {/* Process */}
      <Section id="process" title="How we work" sub="A simple, unhurried process — you always know what comes next." muted>
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card font-display text-lg text-primary">{i + 1}</div>
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Work */}
      <Section id="work" title="Selected work" sub="Visual rhyming and cohesive brand experiences.">
        <div className="mb-8 flex flex-wrap gap-2">
          {([["all", "All"], ["web", "Web"], ["brand", "Brand"], ["video", "Video"]] as const).map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} className={`rounded-full px-4 py-1.5 text-sm transition-colors ${filter === k ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-muted"}`}>{l}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((w) => (
            <figure key={w.t} className="calm-card group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={w.img} alt={w.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <figcaption className="p-5"><p className="text-xs uppercase tracking-widest text-muted-foreground">{w.tag}</p><p className="mt-1 font-display text-xl">{w.t}</p></figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Honest pricing" sub="No hidden fees — clear expectations from day one." muted>
        <label className="mb-10 flex cursor-pointer items-center gap-3 text-sm">
          <button type="button" role="switch" aria-checked={care} onClick={() => setCare(!care)} className={`relative h-6 w-11 rounded-full transition-colors ${care ? "bg-primary" : "bg-border"}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-card transition-all ${care ? "left-5" : "left-0.5"}`} />
          </button>
          Include 6 months of care & updates (+LKR 15K)
        </label>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.n} className={`calm-card relative flex flex-col p-8 ${p.pop ? "ring-2 ring-primary/40" : ""}`}>
              {p.pop && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Most popular</span>}
              <h3 className="text-2xl">{p.n}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
              <p className="my-6 font-display text-4xl">LKR {p.p + (care ? 15 : 0)}K{p.plus && "+"}<span className="font-sans text-sm text-muted-foreground"> /project</span></p>
              <ul className="mb-8 space-y-3 text-sm">
                {[...p.f, ...(care ? ["6 months care & updates"] : [])].map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{f}</li>)}
              </ul>
              <a href="#contact" className={`mt-auto rounded-full py-3 text-center text-sm transition-opacity hover:opacity-90 ${p.pop ? "bg-primary text-primary-foreground" : "border border-border"}`}>Inquire now</a>
            </div>
          ))}
        </div>
      </Section>

      {/* About + testimonials */}
      <Section id="about" title="Meet the maker">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={gh("1000091250.jpg")} alt="Chethina Jayawardhana" className="aspect-square w-full max-w-md rounded-[2rem] object-cover" />
          <div>
            <h3 className="text-3xl">Hi, I’m Chethina Jayawardhana.</h3>
            <p className="mt-4 text-muted-foreground">An AI/ML Engineering undergrad at SLIIT, blending analytical logic with creative design. Ceylon Industries was born from a desire to deliver <em className="text-foreground">uncompromising digital quality</em>.</p>
            <p className="mt-4 text-muted-foreground">With a feel for both aesthetics and algorithms, I make sure your website doesn’t just look lovely — it performs, ranks and converts.</p>
            <div className="calm-card mt-8 bg-secondary p-6">
              <p key={q} className="fade-up font-display text-lg italic">“{quotes[q]?.[0]}”</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">— {quotes[q]?.[1]}</span>
                <div className="flex gap-2">{quotes.map((_, i) => <button key={i} aria-label={`Testimonial ${i + 1}`} onClick={() => setQ(i)} className={`h-2 rounded-full transition-all ${i === q ? "w-6 bg-primary" : "w-2 bg-border"}`} />)}</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Common questions" muted>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map(([qq, a], i) => (
            <div key={qq} className="calm-card overflow-hidden">
              <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left font-medium">
                {qq}<Plus className={`h-5 w-5 text-primary transition-transform duration-300 ${faq === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`grid transition-all duration-500 ${faq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><p className="overflow-hidden px-6 text-muted-foreground"><span className="block pb-6">{a}</span></p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <footer id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-5xl">Let’s build together.</h2>
              <p className="mt-4 text-muted-foreground">Share a few details and your message opens in WhatsApp, ready to send.</p>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <p className="flex gap-2"><MapPin className="h-4 w-4 text-primary" />Homagama, Western Province, Sri Lanka</p>
                <p className="flex gap-2"><MessageCircle className="h-4 w-4 text-primary" />Consultations via WhatsApp</p>
              </div>
              <div className="mt-8 flex gap-3">
                {[[Instagram, "https://www.instagram.com/mrexitoz/"], [Music2, "https://www.tiktok.com/@mrexitoz"], [Youtube, "https://youtube.com/@lumoleap"], [Github, "https://github.com/CheJay2006"]].map(([I, h]) => {
                  const Icon = I as typeof Github;
                  return <a key={h as string} href={h as string} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-card p-3 transition-colors hover:bg-muted"><Icon className="h-4 w-4" /></a>;
                })}
              </div>
            </div>
            <form onSubmit={submit} className="calm-card space-y-4 p-8">
              <Field name="name" label="Your name" />
              <Field name="email" label="Email address" type="email" />
              <label className="block text-sm">Service
                <select name="service" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring">
                  <option>Website</option><option>Brand design</option><option>Video editing</option><option>Not sure yet</option>
                </select>
              </label>
              <label className="block text-sm">Project details
                <textarea name="details" required rows={4} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button className="w-full rounded-full bg-primary py-3 text-primary-foreground transition-opacity hover:opacity-90">Send inquiry</button>
              {sent && <p className="text-center text-sm text-primary">Thank you — WhatsApp opened with your message.</p>}
            </form>
          </div>
          <p className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground">© 2026 Ceylon Industries · Designed by Chethina Jayawardhana</p>
        </div>
      </footer>

      {/* Floating */}
      <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi Ceylon Industries! I'm interested in starting a project.")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 rounded-full bg-primary p-4 text-primary-foreground shadow-lg transition-transform hover:scale-105"><MessageCircle className="h-6 w-6" /></a>
      {scrolled && <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fade-up fixed bottom-24 right-7 z-40 rounded-full border border-border bg-card p-3 shadow"><ArrowUp className="h-4 w-4" /></button>}
    </div>
  );
}

function Section({ id, title, sub, muted, children }: { id: string; title: string; sub?: string; muted?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-24 ${muted ? "bg-muted" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl">{title}</h2>
        {sub && <p className="mt-3 max-w-xl text-muted-foreground">{sub}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="block text-sm">{label}
      <input name={name} type={type} required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
