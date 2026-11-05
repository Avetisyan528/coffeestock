import type { ReactNode } from "react";
import type { Language } from "@/content";
import { PH, type Currency } from "@/placeholders";

const locales: Record<Language, string> = { ru: "ru-RU", en: "en-US", hy: "hy-AM" };
const symbols: Record<Currency, string> = { AMD: "֏", RUB: "₽", USD: "$" };
export const defaultCurrency: Record<Language, Currency> = { ru: "RUB", en: "USD", hy: "AMD" };

export function fromAmd(amd: number, currency: Currency) {
  return amd / PH.amdPer[currency];
}
export function toAmd(value: number, currency: Currency) {
  return value * PH.amdPer[currency];
}

export function money(amd: number, currency: Currency, lang: Language) {
  const value = fromAmd(amd, currency);
  const digits = currency === "USD" && Math.abs(value) < 100 ? 2 : 0;
  const n = value.toLocaleString(locales[lang], { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return currency === "USD" ? `$${n}` : `${n} ${symbols[currency]}`;
}

export function number(n: number, lang: Language) {
  return n.toLocaleString(locales[lang]);
}

const units = {
  kg: { ru: "кг", en: "kg", hy: "կգ" },
  months: { ru: "мес.", en: "months", hy: "ամիս" },
};

/** Base price in the language's main currency, with the other two as equivalents. */
function priceToken(lang: Language) {
  const main = defaultCurrency[lang];
  const others = (["AMD", "RUB", "USD"] as Currency[]).filter((c) => c !== main);
  return `${money(PH.basePriceAmd, main, lang)} (≈ ${others.map((c) => money(PH.basePriceAmd, c, lang)).join(" · ")})`;
}

function token(name: string, lang: Language): string | null {
  switch (name) {
    case "share":
      return `${PH.blendSharePct}%`;
    case "coffeeShare":
      return `${100 - PH.blendSharePct}%`;
    case "moq":
      return `${number(PH.minOrderKg, lang)} ${units.kg[lang]}`;
    case "shelf":
      return `${PH.shelfLifeMonths} ${units.months[lang]}`;
    case "price":
      return priceToken(lang);
    default:
      return null;
  }
}

/** A value that is still a placeholder; highlighted when the page is opened with ?ph. */
export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">{children}</span>;
}

/** Replace {tokens} in copy with placeholder values wrapped in <Ph>. */
export function fill(text: string, lang: Language): ReactNode {
  const parts = text.split(/\{(\w+)\}/);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const value = token(part, lang);
    return value === null ? `{${part}}` : <Ph key={i}>{value}</Ph>;
  });
}
