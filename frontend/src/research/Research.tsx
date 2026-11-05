import { useEffect, useMemo, useState } from "react";
import leadsData from "./leads.json";

type Language = "ru" | "en";
type Text = Record<Language, string>;

type Lead = {
  id: number;
  company: string;
  country: Text;
  city: Text;
  segment: Text;
  priority: string;
  products: Text;
  fit: Text;
  website: string;
  contact: Text;
  source: string;
  confidence: Text;
  status: string;
  notes: string;
};

const leads = leadsData as Lead[];

const ui = {
  ru: {
    title: "Список потенциальных клиентов",
    subtitle:
      "100 компаний — производители, обжарщики, вендинг и офисный кофе в Армении и России.",
    armenia: "Армения",
    russia: "Россия",
    search: "Поиск по таблице…",
    all: "Все",
    priority: "Приоритет",
    shown: (n: number, total: number) => `Показано ${n} из ${total}`,
    empty: "Ничего не найдено",
    columns: [
      "#",
      "Компания",
      "Страна",
      "Город",
      "Сегмент",
      "Приоритет",
      "Что производят / продают",
      "Почему подходят",
      "Сайт",
      "Публичный контакт",
      "Источник (проверка)",
      "Достоверность",
      "Статус",
      "Примечания",
    ],
  },
  en: {
    title: "Lead list",
    subtitle:
      "100 companies — producers, roasters, vending and office coffee in Armenia and Russia.",
    armenia: "Armenia",
    russia: "Russia",
    search: "Search the table…",
    all: "All",
    priority: "Priority",
    shown: (n: number, total: number) => `Showing ${n} of ${total}`,
    empty: "Nothing found",
    columns: [
      "#",
      "Company",
      "Country",
      "City",
      "Segment",
      "Priority",
      "What they make / sell",
      "Why they fit",
      "Website",
      "Public business contact",
      "Source (verification)",
      "Confidence",
      "Status",
      "Notes",
    ],
  },
} as const;

function initialLanguage(): Language {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "en" || param === "ru") return param;
  try {
    const saved = window.localStorage.getItem("research-lang");
    if (saved === "en" || saved === "ru") return saved;
  } catch {
    /* storage unavailable */
  }
  return "ru";
}

function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function Contact({ value }: { value: string }) {
  if (!value) return <span className="muted">—</span>;
  return (
    <span className="contact">
      {value.split(/;\s*/).map((part) => {
        const trimmed = part.trim();
        if (/^\S+@\S+\.\S+$/.test(trimmed)) {
          return (
            <a key={trimmed} href={`mailto:${trimmed}`}>
              {trimmed}
            </a>
          );
        }
        if (/^[+\d(][\d\s()+-]{5,}$/.test(trimmed)) {
          return (
            <a key={trimmed} href={`tel:${trimmed.replace(/[^\d+]/g, "")}`}>
              {trimmed}
            </a>
          );
        }
        return <span key={trimmed}>{trimmed}</span>;
      })}
    </span>
  );
}

function LeadTable({
  title,
  rows,
  lang,
  query,
  priority,
}: {
  title: string;
  rows: Lead[];
  lang: Language;
  query: string;
  priority: string;
}) {
  const t = ui[lang];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((lead) => {
      if (priority && lead.priority !== priority) return false;
      if (!q) return true;
      const haystack = [
        lead.company,
        lead.city[lang],
        lead.segment[lang],
        lead.products[lang],
        lead.fit[lang],
        lead.website,
        lead.contact[lang],
        lead.source,
        lead.notes,
        lead.status,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [rows, lang, query, priority]);

  const id = rows[0]?.country.en.toLowerCase();

  return (
    <section className="lead-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>
          {title} <span className="count">{rows.length}</span>
        </h2>
        <span className="muted">{t.shown(filtered.length, rows.length)}</span>
      </div>
      <div className="table-wrap" tabIndex={0}>
        <table>
          <thead>
            <tr>
              {t.columns.map((col) => (
                <th key={col} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id}>
                <td className="num">{lead.id}</td>
                <td className="company">{lead.company}</td>
                <td>{lead.country[lang]}</td>
                <td>{lead.city[lang]}</td>
                <td>{lead.segment[lang]}</td>
                <td>
                  <span className={`priority p-${lead.priority}`}>
                    {lead.priority}
                  </span>
                </td>
                <td className="wide">{lead.products[lang]}</td>
                <td className="mid">{lead.fit[lang]}</td>
                <td>
                  {lead.website ? (
                    <a href={lead.website} target="_blank" rel="noreferrer">
                      {shortUrl(lead.website)}
                    </a>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
                <td className="mid">
                  <Contact value={lead.contact[lang]} />
                </td>
                <td>
                  {lead.source ? (
                    <a href={lead.source} target="_blank" rel="noreferrer">
                      {shortUrl(lead.source).split("/")[0]}
                    </a>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
                <td>
                  <span className={`conf c-${lead.confidence.en}`}>
                    {lead.confidence[lang]}
                  </span>
                </td>
                <td>{lead.status || <span className="muted">—</span>}</td>
                <td>{lead.notes || <span className="muted">—</span>}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={t.columns.length} className="empty">
                  {t.empty}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Research() {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("");
  const t = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${t.title} — Coffee Stock`;
    try {
      window.localStorage.setItem("research-lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t.title]);

  const armenia = leads.filter((l) => l.country.en === "Armenia");
  const russia = leads.filter((l) => l.country.en === "Russia");

  return (
    <div className="research">
      <header className="research-header">
        <div className="inner">
          <div>
            <p className="kicker">Coffee Stock · Research</p>
            <h1>{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>
          <div className="lang" role="group" aria-label="Language">
            {(["ru", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="toolbar inner">
        <nav className="jump">
          <a href="#armenia">
            {t.armenia} <span>{armenia.length}</span>
          </a>
          <a href="#russia">
            {t.russia} <span>{russia.length}</span>
          </a>
        </nav>
        <div className="filters">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search}
            aria-label={t.search}
          />
          <div className="prio" role="group" aria-label={t.priority}>
            {["", "A", "B", "C"].map((p) => (
              <button
                key={p || "all"}
                type="button"
                aria-pressed={priority === p}
                onClick={() => setPriority(p)}
              >
                {p || t.all}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="inner">
        <LeadTable
          title={t.armenia}
          rows={armenia}
          lang={lang}
          query={query}
          priority={priority}
        />
        <LeadTable
          title={t.russia}
          rows={russia}
          lang={lang}
          query={query}
          priority={priority}
        />
      </main>
    </div>
  );
}
