/**
 * Every value that still has to be replaced with real data lives here.
 * The storefront reads these values, and the /placeholders/ page lists them,
 * so updating a number in this file updates both places.
 */
import credits from "@/media-credits.json";

export const PH = {
  /** Recommended maximum share of COFFEGIO base in a blend, %. */
  blendSharePct: 40,
  /** Indicative price of the base, AMD per kg. */
  basePriceAmd: 2000,
  /** How many AMD one unit of each currency is worth (indicative). */
  amdPer: { AMD: 1, RUB: 4.8, USD: 390 },
  /** Example purchase price of natural coffee used to pre-fill the calculator, AMD per kg. */
  exampleCoffeePriceAmd: 8000,
  /** Example monthly blend volume used to pre-fill the calculator, kg. */
  exampleVolumeKg: 500,
  shelfLifeMonths: 12,
  minOrderKg: 100,
  contacts: {
    phone: "+7 (8362) 00-00-00",
    email: "hello@coffeestock.example",
    telegram: "https://example.com/coffee-stock/telegram",
    vk: "https://example.com/coffee-stock/vk",
  },
} as const;

export type Currency = keyof typeof PH.amdPer;

type Bi = { ru: string; en: string };
export type PlaceholderGroup = "numbers" | "contacts" | "media" | "documents" | "review";

export type PlaceholderItem = {
  id: string;
  group: PlaceholderGroup;
  title: Bi;
  value: string;
  where: Bi;
  need: Bi;
  /** Optional link to the current placeholder asset or its source. */
  link?: string;
};

const amd = (n: number) => `${n.toLocaleString("ru-RU")} ֏`;

const mediaUse: Record<string, Bi> = {
  "hero-espresso.webp": { ru: "Первый экран (главное фото)", en: "Hero (main photo)" },
  "coffee-beans.webp": { ru: "Раздел «Что это», форма «цельная»", en: "“What it is” section, whole form" },
  "roasted-chickpeas.webp": { ru: "Раздел «Что это», фото сырья", en: "“What it is” section, raw-material photo" },
  "roasted-barley.webp": { ru: "Раздел «Что это», фото сырья", en: "“What it is” section, raw-material photo" },
  "cezve.webp": { ru: "Раздел «Для кого» — обжарщики", en: "“Who it is for” — roasters" },
  "vending.webp": { ru: "Раздел «Для кого» — вендинг", en: "“Who it is for” — vending" },
  "roastery.webp": { ru: "Раздел «Для кого» — HoReCa", en: "“Who it is for” — HoReCa" },
  "espresso-video.webm": { ru: "Раздел «В работе» (видео)", en: "“In use” section (video)" },
};

export const placeholderItems: PlaceholderItem[] = [
  {
    id: "share",
    group: "numbers",
    title: { ru: "Рекомендуемая доля основы в смеси", en: "Recommended share of base in a blend" },
    value: `до ${PH.blendSharePct}%`,
    where: { ru: "Первый экран, «Как это работает», калькулятор, FAQ", en: "Hero, “How it works”, calculator, FAQ" },
    need: { ru: "Подтверждённая доля по результатам испытаний (по каждой основе, если отличается)", en: "Confirmed share from trials (per base, if it differs)" },
  },
  {
    id: "price",
    group: "numbers",
    title: { ru: "Цена основы за 1 кг", en: "Base price per kg" },
    value: amd(PH.basePriceAmd),
    where: { ru: "Калькулятор, FAQ", en: "Calculator, FAQ" },
    need: { ru: "Прайс по основам и объёмам, или решение не публиковать цену", en: "Price list by base and volume, or a decision not to publish it" },
  },
  {
    id: "fx",
    group: "numbers",
    title: { ru: "Курсы для пересчёта цены", en: "Exchange rates for price conversion" },
    value: `1 USD = ${PH.amdPer.USD} ֏ · 1 RUB = ${PH.amdPer.RUB} ֏`,
    where: { ru: "Калькулятор, цена в ₽ и $", en: "Calculator, prices in ₽ and $" },
    need: { ru: "Официальные цены в рублях и долларах (или актуальный курс)", en: "Official RUB and USD prices (or a current rate)" },
  },
  {
    id: "example-coffee",
    group: "numbers",
    title: { ru: "Пример цены кофе в калькуляторе", en: "Example coffee price in the calculator" },
    value: `${amd(PH.exampleCoffeePriceAmd)} / кг · ${PH.exampleVolumeKg} кг в месяц`,
    where: { ru: "Значения калькулятора по умолчанию", en: "Calculator default values" },
    need: { ru: "Типичная закупочная цена кофе у ваших клиентов и типичный объём", en: "Typical coffee purchase price and volume for your customers" },
  },
  {
    id: "shelf",
    group: "numbers",
    title: { ru: "Срок годности", en: "Shelf life" },
    value: `${PH.shelfLifeMonths} мес.`,
    where: { ru: "FAQ", en: "FAQ" },
    need: { ru: "Срок годности из спецификации/ТУ", en: "Shelf life from the specification" },
  },
  {
    id: "moq",
    group: "numbers",
    title: { ru: "Минимальный заказ", en: "Minimum order" },
    value: `${PH.minOrderKg} кг`,
    where: { ru: "Раздел «Образцы», FAQ", en: "Samples section, FAQ" },
    need: { ru: "Реальный минимальный объём заказа", en: "Actual minimum order quantity" },
  },
  {
    id: "location",
    group: "contacts",
    title: { ru: "Город и адрес", en: "City and address" },
    value: "Йошкар-Ола, ул. Примерная, д. 1",
    where: { ru: "Верхняя полоса, контакты, подвал", en: "Top bar, contacts, footer" },
    need: { ru: "Фактический адрес (или только город)", en: "Actual address (or just the city)" },
  },
  {
    id: "phone",
    group: "contacts",
    title: { ru: "Телефон", en: "Phone" },
    value: PH.contacts.phone,
    where: { ru: "Контакты", en: "Contacts" },
    need: { ru: "Рабочий телефон (Армения и/или Россия)", en: "Business phone (Armenia and/or Russia)" },
  },
  {
    id: "email",
    group: "contacts",
    title: { ru: "Email (и получатель формы заявки)", en: "Email (also receives the request form)" },
    value: PH.contacts.email,
    where: { ru: "Контакты, форма запроса образцов", en: "Contacts, sample request form" },
    need: { ru: "Рабочий email", en: "Business email" },
  },
  {
    id: "telegram",
    group: "contacts",
    title: { ru: "Telegram", en: "Telegram" },
    value: PH.contacts.telegram,
    where: { ru: "Контакты", en: "Contacts" },
    need: { ru: "Ссылка на Telegram (или убрать)", en: "Telegram link (or remove)" },
  },
  {
    id: "vk",
    group: "contacts",
    title: { ru: "ВКонтакте", en: "VK" },
    value: PH.contacts.vk,
    where: { ru: "Контакты", en: "Contacts" },
    need: { ru: "Ссылка на VK (или заменить на WhatsApp / убрать)", en: "VK link (or replace with WhatsApp / remove)" },
  },
  ...credits.map((c) => ({
    id: c.file,
    group: "media" as const,
    title: { ru: c.file.endsWith(".webm") ? "Видео" : "Фото", en: c.file.endsWith(".webm") ? "Video" : "Photo" },
    value: `${c.title} — ${c.author} (${c.license})`,
    where: mediaUse[c.file] ?? { ru: "—", en: "—" },
    need: {
      ru: c.file.endsWith(".webm")
        ? "Собственное видео: приготовление напитка на смеси COFFEGIO (30–60 с)"
        : "Собственное фото продукта / упаковки / производства",
      en: c.file.endsWith(".webm")
        ? "Your own video: brewing a drink with a COFFEGIO blend (30–60 s)"
        : "Your own product / packaging / production photo",
    },
    link: c.source,
  })),
  {
    id: "doc-eac",
    group: "documents",
    title: { ru: "Декларация о соответствии ЕАЭС", en: "EAEU declaration of conformity" },
    value: "ТР ТС 021/2011 — образец",
    where: { ru: "Раздел «Документы»", en: "Documents section" },
    need: { ru: "Скан декларации (PDF)", en: "Scanned declaration (PDF)" },
  },
  {
    id: "doc-lab",
    group: "documents",
    title: { ru: "Протокол лабораторных испытаний", en: "Laboratory test report" },
    value: "АРОМАТЕКС — образец",
    where: { ru: "Раздел «Документы»", en: "Documents section" },
    need: { ru: "Протокол испытаний (PDF)", en: "Test report (PDF)" },
  },
  {
    id: "doc-iso",
    group: "documents",
    title: { ru: "Сертификат системы менеджмента", en: "Management system certificate" },
    value: "ISO 22000 / ХАССП — образец",
    where: { ru: "Раздел «Документы»", en: "Documents section" },
    need: { ru: "Сертификат, если есть (или убрать карточку)", en: "Certificate if you have one (or remove the card)" },
  },
  {
    id: "doc-spec",
    group: "documents",
    title: { ru: "Спецификация продукта", en: "Product specification" },
    value: "COFFEGIO — образец",
    where: { ru: "Раздел «Документы», FAQ", en: "Documents section, FAQ" },
    need: { ru: "Спецификации по 10 основам: состав, аллергены, пищевая ценность, хранение", en: "Specs for all 10 bases: composition, allergens, nutrition, storage" },
  },
  {
    id: "hy-copy",
    group: "review",
    title: { ru: "Армянский перевод сайта", en: "Armenian translation of the site" },
    value: "Переведено без носителя языка",
    where: { ru: "Весь сайт, язык HY", en: "Whole site, HY language" },
    need: { ru: "Вычитка носителем армянского языка", en: "Proofreading by a native Armenian speaker" },
  },
  {
    id: "taste-claim",
    group: "review",
    title: { ru: "Утверждения о вкусе", en: "Taste claims" },
    value: "«Знакомый вкус» — без данных испытаний",
    where: { ru: "Первый экран, «Зачем это нужно»", en: "Hero, “Why it matters”" },
    need: { ru: "Результаты дегустаций/испытаний, отзывы первых клиентов", en: "Tasting/trial results, first customer testimonials" },
  },
];
