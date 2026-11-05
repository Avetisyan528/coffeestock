import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bean,
  Check,
  ChevronDown,
  FileText,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  TrendingDown,
  X,
} from "lucide-react";

import { copy, languages, type Language } from "@/content";
import { products, roastLabels } from "@/products";
import { PH } from "@/placeholders";
import { fill, Ph } from "@/format";
import Calculator from "@/Calculator";

const navIds = ["product", "how", "savings", "bases", "samples", "faq"];
const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
const STORAGE_KEY = "coffee-stock-language";

function initialLanguage(): Language {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param && (languages as string[]).includes(param)) return param as Language;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (languages as string[]).includes(saved)) return saved as Language;
  } catch {
    /* storage unavailable */
  }
  return "ru";
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Coffee Stock">
      <span className="brand-symbol">
        <Bean size={22} strokeWidth={1.5} />
      </span>
      <span>
        coffee<span className="brand-second">stock</span>
      </span>
    </a>
  );
}

function Photo({ file, alt, badge, className = "" }: { file: string; alt: string; badge: string; className?: string }) {
  return (
    <figure className={`photo ${className}`}>
      <img src={media(file)} alt={alt} loading="lazy" decoding="async" />
      <span className="ph-badge">{badge}</span>
    </figure>
  );
}

function SectionHead({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* the site works without storage */
    }
  }, [lang, t]);

  useEffect(() => {
    // /?ph highlights every value that is still a placeholder.
    if (new URLSearchParams(window.location.search).has("ph")) {
      document.documentElement.classList.add("show-ph");
    }
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const c = t.contacts;
    const rows: [string, string][] = [
      [c.company, "company"],
      [c.name, "name"],
      [c.contact, "contact"],
      [c.product, "product"],
      [c.method, "method"],
      [c.coffeePrice, "coffeePrice"],
      [c.volume, "volume"],
    ];
    const body = rows.map(([label, key]) => `${label}: ${String(data.get(key) ?? "").trim()}`).join("\n");
    window.location.href = `mailto:${PH.contacts.email}?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(body)}`;
  };

  const LangSwitch = (
    <div className="lang-switch" role="group" aria-label={t.ui.language}>
      <Globe2 size={15} aria-hidden="true" />
      {languages.map((code) => (
        <button key={code} type="button" lang={code} aria-pressed={lang === code} onClick={() => setLang(code)}>
          {code === "hy" ? "ՀԱՅ" : code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <a href="#main" className="skip-link">
        {t.ui.skip}
      </a>
      <div className="topbar" id="top">
        <div className="container topbar-inner">
          <span>
            <MapPin size={13} aria-hidden="true" />
            <Ph>{t.topbar.location}</Ph>
          </span>
          <span>{t.topbar.delivery}</span>
          <span className="topbar-note">B2B · COFFEGIO</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main">
            {t.nav.map((label, i) => (
              <a key={navIds[i]} href={`#${navIds[i]}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            {LangSwitch}
            <a className="btn btn-primary btn-sm header-cta" href="#contacts">
              {t.cta}
            </a>
            <button
              type="button"
              className="menu-button"
              aria-label={menuOpen ? t.ui.closeMenu : t.ui.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="mobile-nav container"
            id="mobile-nav"
            aria-label="Mobile"
            onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
          >
            {t.nav.map((label, i) => (
              <a key={navIds[i]} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)}>
              {t.cta}
              <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.kicker}</p>
              <h1>
                {t.hero.title} <em>{t.hero.titleEm}</em>
              </h1>
              <p className="lead">{fill(t.hero.lead, lang)}</p>
              <div className="actions">
                <a className="btn btn-primary" href="#contacts">
                  {t.hero.primary}
                  <ArrowRight size={17} />
                </a>
                <a className="btn btn-ghost" href="#savings">
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <Photo file="hero-espresso.webp" alt="" badge={t.ui.placeholderPhoto} className="hero-photo" />
          </div>
          <div className="container">
            <ul className="facts">
              {t.hero.facts.map(([value, label]) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why */}
        <section className="section" id="why">
          <div className="container">
            <SectionHead label={t.why.label} title={t.why.title} />
            <p className="why-text">
              {t.why.text}{" "}
              <a href="https://www.icmr.ru/issledovaniya/icmr-issledovania-rynok-kofe-2023-2025/" target="_blank" rel="noreferrer">
                {t.why.source}
              </a>
            </p>
            <div className="cards-3">
              {t.why.cards.map(([title, text], i) => {
                const Icon = [TrendingDown, Leaf, Sparkles][i];
                return (
                  <article className="card" key={title}>
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="section section-tint" id="product">
          <div className="container split">
            <div>
              <SectionHead label={t.what.label} title={t.what.title} />
              <p className="body-text">{t.what.text}</p>
              <h3 className="sub-title">{t.what.formsTitle}</h3>
              <ul className="forms">
                {t.what.forms.map(([title, text], i) => (
                  <li key={title} className={i === 2 ? "is-soon" : ""}>
                    <strong>
                      {title}
                      {i === 2 && <span className="soon">{t.ui.soon}</span>}
                    </strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="notice">{t.what.note}</p>
              <p className="lab">
                <FlaskConical size={18} aria-hidden="true" />
                {t.what.lab}
              </p>
            </div>
            <div className="photo-stack">
              <Photo file="roasted-chickpeas.webp" alt="" badge={t.ui.placeholderPhoto} />
              <Photo file="roasted-barley.webp" alt="" badge={t.ui.placeholderPhoto} />
              <Photo file="coffee-beans.webp" alt="" badge={t.ui.placeholderPhoto} className="wide" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how">
          <div className="container">
            <SectionHead label={t.how.label} title={t.how.title} />
            <ol className="steps">
              {t.how.steps.map(([title, text], i) => (
                <li key={title}>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{fill(text, lang)}</p>
                </li>
              ))}
            </ol>
            <figure className="ratio">
              <figcaption>{t.how.diagram}</figcaption>
              <div className="ratio-bar">
                <span className="ratio-coffee" style={{ flexBasis: `${100 - PH.blendSharePct}%` }}>
                  {t.how.coffee} <Ph>{100 - PH.blendSharePct}%</Ph>
                </span>
                <span className="ratio-base" style={{ flexBasis: `${PH.blendSharePct}%` }}>
                  {t.how.base} <Ph>{PH.blendSharePct}%</Ph>
                </span>
              </div>
              <ul className="chips">
                {t.how.methods.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </figure>
          </div>
        </section>

        {/* Savings calculator */}
        <section className="section section-dark" id="savings">
          <div className="container">
            <SectionHead label={t.calc.label} title={t.calc.title} intro={t.calc.intro} />
            <Calculator t={t.calc} lang={lang} />
          </div>
        </section>

        {/* Segments */}
        <section className="section" id="for">
          <div className="container">
            <SectionHead label={t.segments.label} title={t.segments.title} />
            <div className="segments">
              {t.segments.items.map(([title, text, tag], i) => {
                const photo = ["cezve.webp", "vending.webp", "roasted-barley.webp", "roastery.webp"][i];
                return (
                  <article className="segment" key={title}>
                    <Photo file={photo} alt="" badge={t.ui.placeholderPhoto} />
                    <div>
                      <span className="tag">{tag}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bases */}
        <section className="section section-tint" id="bases">
          <div className="container">
            <SectionHead label={t.bases.label} title={t.bases.title} intro={t.bases.intro} />
            <div className="bases">
              {products.map((p, i) => (
                <article className="base" key={p.name}>
                  <div className="base-top">
                    <span className="base-num">{String(i + 1).padStart(2, "0")}</span>
                    {p.method && <span className="tag tag-solid">{p.method === "jazzve" ? t.bases.jazzve : t.bases.espresso}</span>}
                  </div>
                  <h3>
                    COFFEGIO <strong>{p.name.replace("COFFEGIO ", "")}</strong>
                  </h3>
                  <p className="base-meaning">{p[lang].meaning}</p>
                  <dl className="base-meta">
                    <dt>{t.bases.roast}</dt>
                    <dd>{p.roasts.map((r) => roastLabels[lang][r]).join(" / ")}</dd>
                  </dl>
                  <span className={`allergen ${p.nuts ? "has-nuts" : ""}`}>{p.nuts ? t.bases.nuts : t.bases.noNuts}</span>
                  <details>
                    <summary>
                      {t.bases.more}
                      <ChevronDown size={16} aria-hidden="true" />
                    </summary>
                    <dl className="base-meta">
                      <dt>{t.bases.profile}</dt>
                      <dd>{p[lang].profile}</dd>
                      <dt>{t.bases.ingredients}</dt>
                      <dd>{p[lang].ingredients}</dd>
                    </dl>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="section" id="video">
          <div className="container split split-video">
            <div>
              <SectionHead label={t.video.label} title={t.video.title} />
              <p className="body-text">{t.video.text}</p>
            </div>
            <figure className="photo video">
              <video controls muted playsInline loop preload="metadata" poster={media("espresso-video-poster.webp")}>
                <source src={media("espresso-video.webm")} type="video/webm" />
              </video>
              <span className="ph-badge">{t.ui.placeholderVideo}</span>
            </figure>
          </div>
        </section>

        {/* Samples / trial */}
        <section className="section section-tint" id="samples">
          <div className="container">
            <SectionHead label={t.samples.label} title={t.samples.title} intro={t.samples.intro} />
            <div className="trial">
              <ol className="trial-steps">
                {t.samples.steps.map(([title, text], i) => (
                  <li key={title}>
                    <span className="step-num">{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{fill(text, lang)}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <aside className="checklist">
                <h3>{t.samples.checklistTitle}</h3>
                <ul>
                  {t.samples.checklist.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="btn btn-primary" href="#contacts">
                  {t.samples.cta}
                  <ArrowRight size={17} />
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="section" id="documents">
          <div className="container">
            <SectionHead label={t.docs.label} title={t.docs.title} intro={t.docs.intro} />
            <div className="docs">
              {t.docs.items.map(([title, text]) => (
                <article className="doc" key={title}>
                  <div className="doc-sheet" aria-hidden="true">
                    <FileText size={30} strokeWidth={1.2} />
                    <span className="doc-lines" />
                    <span className="doc-stamp">{t.ui.sample}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="fine">
              <Ph>{t.docs.note}</Ph>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint" id="faq">
          <div className="container narrow">
            <SectionHead label={t.faq.label} title={t.faq.title} />
            <div className="faq">
              {t.faq.items.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <p>{fill(a, lang)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section className="section section-dark" id="contacts">
          <div className="container split">
            <div>
              <SectionHead label={t.contacts.label} title={t.contacts.title} intro={t.contacts.intro} />
              <ul className="contact-list">
                <li>
                  <MapPin size={19} aria-hidden="true" />
                  <span>
                    <small>{t.contacts.address}</small>
                    <Ph>{t.contacts.addressValue}</Ph>
                  </span>
                </li>
                <li>
                  <Phone size={19} aria-hidden="true" />
                  <span>
                    <small>{t.contacts.phone}</small>
                    <a href={`tel:${PH.contacts.phone.replace(/[^\d+]/g, "")}`}>
                      <Ph>{PH.contacts.phone}</Ph>
                    </a>
                  </span>
                </li>
                <li>
                  <Mail size={19} aria-hidden="true" />
                  <span>
                    <small>{t.contacts.email}</small>
                    <a href={`mailto:${PH.contacts.email}`}>
                      <Ph>{PH.contacts.email}</Ph>
                    </a>
                  </span>
                </li>
              </ul>
              <p className="messengers-title">{t.contacts.messengers}</p>
              <div className="messengers">
                <a href={PH.contacts.telegram} target="_blank" rel="noopener noreferrer">
                  <Send size={16} aria-hidden="true" />
                  <Ph>Telegram</Ph>
                </a>
                <a href={PH.contacts.vk} target="_blank" rel="noopener noreferrer">
                  <strong aria-hidden="true">vk</strong>
                  <Ph>{lang === "ru" ? "ВКонтакте" : "VK"}</Ph>
                </a>
              </div>
            </div>
            <form className="request-form" onSubmit={submit}>
              <label>
                {t.contacts.company}
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                {t.contacts.name}
                <input name="name" autoComplete="name" />
              </label>
              <label className="full">
                {t.contacts.contact}
                <input name="contact" required autoComplete="email" />
              </label>
              <label>
                {t.contacts.product}
                <input name="product" />
              </label>
              <label>
                {t.contacts.method}
                <input name="method" />
              </label>
              <label>
                {t.contacts.coffeePrice}
                <input name="coffeePrice" />
              </label>
              <label>
                {t.contacts.volume}
                <input name="volume" />
              </label>
              <button className="btn btn-primary full" type="submit">
                {t.contacts.submit}
                <ArrowRight size={17} />
              </button>
              <p className="fine full">{t.contacts.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <Brand light />
          <p>{t.footer.text}</p>
          <a href="#top" className="back-top">
            {t.ui.backTop} ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Coffee Stock. {t.footer.rights}
          </span>
          <span>{t.footer.credits}</span>
        </div>
      </footer>
    </>
  );
}
