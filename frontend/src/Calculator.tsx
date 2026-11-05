import { useId, useState } from "react";
import type { Copy, Language } from "@/content";
import { PH, type Currency } from "@/placeholders";
import { defaultCurrency, fromAmd, money, Ph, toAmd } from "@/format";

const currencies: Currency[] = ["AMD", "RUB", "USD"];
const MAX_SHARE = 60;
const kg: Record<Language, string> = { ru: "кг", en: "kg", hy: "կգ" };

function round(value: number, currency: Currency) {
  return currency === "USD" ? Math.round(value * 100) / 100 : Math.round(value);
}

export default function Calculator({ t, lang }: { t: Copy["calc"]; lang: Language }) {
  const id = useId();
  const [currencyChoice, setCurrencyChoice] = useState<Currency | null>(null);
  const currency = currencyChoice ?? defaultCurrency[lang];
  // Prices are kept in AMD so switching currency never loses what the visitor typed.
  const [coffeeAmd, setCoffeeAmd] = useState<number>(PH.exampleCoffeePriceAmd);
  const [baseAmd, setBaseAmd] = useState<number>(PH.basePriceAmd);
  const [share, setShare] = useState<number>(PH.blendSharePct);
  const [volume, setVolume] = useState<number>(PH.exampleVolumeKg);

  const s = share / 100;
  const blendAmd = (1 - s) * coffeeAmd + s * baseAmd;
  const savingAmd = coffeeAmd - blendAmd;
  const percent = coffeeAmd > 0 ? (savingAmd / coffeeAmd) * 100 : 0;

  const priceInput = (label: string, amd: number, set: (n: number) => void, key: string, placeholder = false) => (
    <label className="field" htmlFor={`${id}-${key}`}>
      <span>{placeholder ? <Ph>{label}</Ph> : label}</span>
      <span className="input-unit">
        <input
          id={`${id}-${key}`}
          type="number"
          inputMode="decimal"
          min={0}
          step={currency === "USD" ? 0.1 : 10}
          value={round(fromAmd(amd, currency), currency)}
          onChange={(e) => set(toAmd(Math.max(0, Number(e.target.value) || 0), currency))}
        />
        <em>{currency}</em>
      </span>
    </label>
  );

  return (
    <div className="calc">
      <div className="calc-inputs">
        <div className="field">
          <span>{t.currency}</span>
          <div className="segmented" role="group" aria-label={t.currency}>
            {currencies.map((c) => (
              <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrencyChoice(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
        {priceInput(t.coffeePrice, coffeeAmd, setCoffeeAmd, "coffee")}
        <label className="field" htmlFor={`${id}-share`}>
          <span>
            {t.share}: <strong>{share}%</strong>
          </span>
          <input
            id={`${id}-share`}
            type="range"
            min={0}
            max={MAX_SHARE}
            step={5}
            value={share}
            onChange={(e) => setShare(Number(e.target.value))}
          />
          <span className="range-scale" aria-hidden="true">
            <span>0%</span>
            <span className="mark" style={{ left: `${(PH.blendSharePct / MAX_SHARE) * 100}%` }}>
              <span className="ph">{PH.blendSharePct}%</span>
            </span>
            <span>{MAX_SHARE}%</span>
          </span>
        </label>
        {priceInput(t.basePrice, baseAmd, setBaseAmd, "base", true)}
        <label className="field" htmlFor={`${id}-volume`}>
          <span>{t.volume}</span>
          <span className="input-unit">
            <input
              id={`${id}-volume`}
              type="number"
              inputMode="numeric"
              min={0}
              step={50}
              value={volume}
              onChange={(e) => setVolume(Math.max(0, Number(e.target.value) || 0))}
            />
            <em>{kg[lang]}</em>
          </span>
        </label>
      </div>
      <div className="calc-results" aria-live="polite">
        <div className="result-bar" aria-hidden="true">
          <span style={{ flexBasis: `${100 - share}%` }} />
          <span style={{ flexBasis: `${share}%` }} />
        </div>
        <dl>
          <div>
            <dt>{t.blendCost}</dt>
            <dd>
              {money(blendAmd, currency, lang)} <small>{t.perKg}</small>
            </dd>
          </div>
          <div className="highlight">
            <dt>{t.saving}</dt>
            <dd>
              {money(savingAmd, currency, lang)} <small>{t.perKg}</small>
            </dd>
          </div>
          <div>
            <dt>{t.monthly}</dt>
            <dd>{money(savingAmd * volume, currency, lang)}</dd>
          </div>
          <div>
            <dt>{t.percent}</dt>
            <dd>−{percent.toFixed(0)}%</dd>
          </div>
        </dl>
        <p className="fine">{t.note}</p>
      </div>
    </div>
  );
}
