import { useEffect, useState } from "react";
import { placeholderItems, type PlaceholderGroup } from "@/placeholders";

type Lang = "ru" | "en";

const ui = {
  ru: {
    title: "Что нужно собрать",
    subtitle: "Все временные значения сайта. Пришлите реальные данные — заменим их в одном месте, и они обновятся на всём сайте.",
    preview: "Открыть сайт с подсветкой заглушек",
    total: (n: number) => `Всего: ${n}`,
    cols: ["#", "Что", "Текущее значение", "Где на сайте", "Что прислать", "Ссылка"],
    groups: {
      numbers: "Цифры и условия",
      contacts: "Контакты",
      media: "Фото и видео",
      documents: "Сертификаты и документы",
      review: "Проверить",
    },
    open: "открыть",
  },
  en: {
    title: "What to collect",
    subtitle: "Every temporary value on the site. Send the real data and we replace it in one place — it updates across the whole site.",
    preview: "Open the site with placeholders highlighted",
    total: (n: number) => `Total: ${n}`,
    cols: ["#", "What", "Current value", "Where on the site", "What to send", "Link"],
    groups: {
      numbers: "Numbers and terms",
      contacts: "Contacts",
      media: "Photos and video",
      documents: "Certificates and documents",
      review: "To verify",
    },
    open: "open",
  },
} as const;

const groups: PlaceholderGroup[] = ["numbers", "contacts", "media", "documents", "review"];

function initialLang(): Lang {
  const p = new URLSearchParams(window.location.search).get("lang");
  if (p === "en" || p === "ru") return p;
  try {
    const s = localStorage.getItem("placeholders-lang");
    if (s === "en" || s === "ru") return s;
  } catch {
    /* storage unavailable */
  }
  return "ru";
}

export default function PlaceholdersPage() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${t.title} — Coffee Stock`;
    try {
      localStorage.setItem("placeholders-lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t.title]);

  // Row numbers run continuously across groups.
  const rowNumber = new Map(
    groups.flatMap((g) => placeholderItems.filter((i) => i.group === g)).map((item, i) => [item.id, i + 1]),
  );
  return (
    <div className="research">
      <header className="research-header">
        <div className="inner">
          <div>
            <p className="kicker">Coffee Stock · Placeholders</p>
            <h1>{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
            <p className="ph-meta">
              <span>{t.total(placeholderItems.length)}</span>
              <a href="../?ph=1">{t.preview} →</a>
            </p>
          </div>
          <div className="lang" role="group" aria-label="Language">
            {(["ru", "en"] as const).map((code) => (
              <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="inner">
        <nav className="jump ph-jump">
          {groups.map((g) => (
            <a key={g} href={`#${g}`}>
              {t.groups[g]} <span>{placeholderItems.filter((i) => i.group === g).length}</span>
            </a>
          ))}
        </nav>
        {groups.map((g) => {
          const items = placeholderItems.filter((i) => i.group === g);
          return (
            <section className="lead-section" id={g} key={g}>
              <div className="section-head">
                <h2>
                  {t.groups[g]} <span className="count">{items.length}</span>
                </h2>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {t.cols.map((c) => (
                        <th key={c} scope="col">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      const isMedia = item.group === "media";
                      return (
                        <tr key={item.id}>
                          <td className="num">{rowNumber.get(item.id)}</td>
                          <td className="company">
                            {item.title[lang]}
                            {isMedia && <div className="file">{item.id}</div>}
                          </td>
                          <td className="mid">
                            {isMedia && !item.id.endsWith(".webm") ? (
                              <img className="thumb" src={`../media/${item.id}`} alt="" loading="lazy" />
                            ) : null}
                            <code>{item.value}</code>
                          </td>
                          <td className="mid">{item.where[lang]}</td>
                          <td className="wide">{item.need[lang]}</td>
                          <td>
                            {item.link ? (
                              <a href={item.link} target="_blank" rel="noreferrer">
                                {t.open}
                              </a>
                            ) : (
                              <span className="muted">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
