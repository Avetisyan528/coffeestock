import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bean,
  Check,
  ChevronRight,
  Coffee,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Send,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

type Language = "ru" | "en";
type Category = "coffee" | "tea" | "syrups" | "accessories";
const copy = {
  ru: {
    location: "Йошкар-Ола, Россия",
    wholesale: "Ваш партнёр в мире кофе",
    nav: ["Ассортимент", "О нас", "Предложения", "Контакты"],
    contact: "Связаться с нами",
    eyebrow: "КОФЕ. ЛЮДИ. ВАШ БИЗНЕС.",
    title: (
      <>
        Хороший кофе.
        <br />
        Большие <em>возможности.</em>
      </>
    ),
    intro:
      "Кофе, чай и всё необходимое для вашей кофейни, ресторана или офиса. Собираем лучшее в одном месте — в Йошкар-Оле.",
    catalog: "Смотреть ассортимент",
    partner: "Давайте знакомиться",
    heroNote: "От первого зерна\nдо любимой чашки.",
    stamp: "С ЛЮБОВЬЮ К КОФЕ",
    photoLabel: "НАЧИНАЕТСЯ С ХОРОШЕГО ЗЕРНА",
    benefits: [
      ["Продуманный ассортимент", "Всё для вашей кофейной истории"],
      ["Оптовый формат", "Для кофеен, ресторанов и офисов"],
      ["Рядом с вами", "Работаем в Йошкар-Оле"],
    ],
    catalogLabel: "01 / АССОРТИМЕНТ",
    catalogTitle: "Найдите свой вкус.",
    catalogIntro:
      "От классического эспрессо до новых сочетаний.\nВсё, что нужно для хорошей чашки.",
    categories: ["Кофе в зёрнах", "Чай", "Сиропы", "Аксессуары"],
    demo: "Демонстрационный каталог",
    productNote: "Примеры ассортимента. Наличие и цены появятся позже.",
    unavailable: "Скоро в каталоге",
    kg: "1 кг",
    teaWeight: "250 г",
    syrupWeight: "1 л",
    piece: "1 шт.",
    aboutLabel: "02 / О COFFEE STOCK",
    aboutTitle: (
      <>
        Ваш бизнес.
        <br />
        Наша общая
        <br />
        <em>любовь к кофе.</em>
      </>
    ),
    aboutText:
      "Мы — Coffee Stock, оптовый магазин в Йошкар-Оле. Объединяем всё, что нужно тем, кто готовит кофе и создаёт места, в которые хочется возвращаться.",
    aboutText2:
      "Открываете первую кофейню или ищете нового поставщика? Давайте начнём с простого знакомства.",
    aboutPoints: [
      "Кофе и сопутствующие товары в одном месте",
      "Внимание к потребностям вашего бизнеса",
      "Местный партнёр в Йошкар-Оле",
    ],
    aboutCaption: "Для тех, кто делает каждый день вкуснее.",
    offersLabel: "03 / ПРЕДЛОЖЕНИЯ",
    offersTitle: "Больше поводов начать.",
    offersIntro:
      "Готовим предложения для вашего бизнеса. Скоро здесь появятся все подробности.",
    comingSoon: "СКОРО",
    offer1Title: "Первый шаг к своей кофейне",
    offer1Text:
      "Стартовый набор: кофе, сиропы и аксессуары. Всё, чтобы начать вашу историю.",
    offer2Title: "Больше кофе — больше возможностей",
    offer2Text:
      "Специальные условия для регулярных оптовых закупок. Растём вместе с вашим бизнесом.",
    offerButton: "Предложение готовится",
    offerDisclaimer:
      "Предложения — примеры. Заказ и оформление пока недоступны.",
    contactsLabel: "04 / КОНТАКТЫ",
    contactsTitle: (
      <>
        Хороший кофе начинается
        <br />с разговора.
      </>
    ),
    contactsIntro:
      "Мы в Йошкар-Оле. Будем рады познакомиться с вами и вашим бизнесом.",
    address: "Где мы находимся",
    addressValue: "Россия, г. Йошкар-Ола",
    addressPlaceholder: "ул. Примерная, д. 1 — пример адреса",
    phone: "Позвонить",
    email: "Написать",
    placeholder: "Пример контакта",
    socialTitle: "Давайте будем на связи",
    socialHint: "Ссылки-примеры · настоящие страницы появятся позже",
    contactNotice:
      "Сайт знакомится с вами. Контакты, адрес и социальные ссылки пока демонстрационные.",
    footerText: "Кофе и всё для вашего бизнеса.",
    rights: "Все права защищены.",
    backTop: "Наверх",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
    skip: "Перейти к содержимому",
  },
  en: {
    location: "Yoshkar-Ola, Russia",
    wholesale: "Your partner in the world of coffee",
    nav: ["Our range", "About us", "Offers", "Contact"],
    contact: "Get in touch",
    eyebrow: "COFFEE. PEOPLE. YOUR BUSINESS.",
    title: (
      <>
        Good coffee.
        <br />
        Great <em>possibilities.</em>
      </>
    ),
    intro:
      "Coffee, tea, and the essentials for your café, restaurant, or office. Bringing the good things together, here in Yoshkar-Ola.",
    catalog: "Explore our range",
    partner: "Get to know us",
    heroNote: "From the first bean\nto your favourite cup.",
    stamp: "FOR THE LOVE OF COFFEE",
    photoLabel: "IT STARTS WITH A GOOD BEAN",
    benefits: [
      ["A thoughtful selection", "Everything for your coffee story"],
      ["Made for wholesale", "For cafés, restaurants, and offices"],
      ["Your local partner", "Based in Yoshkar-Ola"],
    ],
    catalogLabel: "01 / OUR RANGE",
    catalogTitle: "Find your flavour.",
    catalogIntro:
      "From a classic espresso to something new.\nEverything that makes a great cup.",
    categories: ["Coffee beans", "Tea", "Syrups", "Accessories"],
    demo: "Preview collection",
    productNote: "Sample products. Availability and prices are coming soon.",
    unavailable: "Coming to the catalog",
    kg: "1 kg",
    teaWeight: "250 g",
    syrupWeight: "1 L",
    piece: "1 pc.",
    aboutLabel: "02 / ABOUT COFFEE STOCK",
    aboutTitle: (
      <>
        Your business.
        <br />
        Our shared
        <br />
        <em>love of coffee.</em>
      </>
    ),
    aboutText:
      "We are Coffee Stock, a wholesale shop in Yoshkar-Ola. We bring together the essentials for people who make coffee and create places worth coming back to.",
    aboutText2:
      "Opening your first café or looking for a new supplier? Let’s start by getting to know each other.",
    aboutPoints: [
      "Coffee and supplies, all in one place",
      "A personal approach to your business",
      "A local partner in Yoshkar-Ola",
    ],
    aboutCaption: "For people who make every day taste better.",
    offersLabel: "03 / OFFERS",
    offersTitle: "Good things are brewing.",
    offersIntro:
      "We’re putting together offers for your business. All the details are coming soon.",
    comingSoon: "COMING SOON",
    offer1Title: "Your first café starts here",
    offer1Text:
      "A starter selection of coffee, syrups, and accessories. The essentials for your next chapter.",
    offer2Title: "More coffee. More possibilities.",
    offer2Text:
      "Special terms for regular wholesale orders. Growing together with your business.",
    offerButton: "Offer coming soon",
    offerDisclaimer:
      "These are sample offers. Ordering and checkout are not available yet.",
    contactsLabel: "04 / CONTACT",
    contactsTitle: (
      <>
        Good coffee starts
        <br />
        with a conversation.
      </>
    ),
    contactsIntro:
      "Find us in Yoshkar-Ola. We’d love to get to know you and your business.",
    address: "Find us",
    addressValue: "Yoshkar-Ola, Russia",
    addressPlaceholder: "1 Example Street — sample address",
    phone: "Call us",
    email: "Write to us",
    placeholder: "Sample contact",
    socialTitle: "Let’s keep in touch",
    socialHint: "Placeholder links · our real pages are coming soon",
    contactNotice:
      "We’re just getting started. Contact details, street address, and social links are placeholders.",
    footerText: "Coffee and everything for your business.",
    rights: "All rights reserved.",
    backTop: "Back to top",
    menu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
  },
};

const products: {
  name: string;
  ru: string;
  en: string;
  category: Category;
  color: string;
  label: string;
  type: string;
}[] = [
  {
    name: "Brazil Santos",
    ru: "Шоколад · орех · карамель",
    en: "Chocolate · nuts · caramel",
    category: "coffee",
    color: "olive",
    label: "BRAZIL",
    type: "100% ARABICA",
  },
  {
    name: "Espresso Blend",
    ru: "Какао · фундук · плотное тело",
    en: "Cocoa · hazelnut · full body",
    category: "coffee",
    color: "terracotta",
    label: "ESPRESSO",
    type: "HOUSE BLEND",
  },
  {
    name: "Ethiopia Sidamo",
    ru: "Бергамот · ягоды · цитрус",
    en: "Bergamot · berries · citrus",
    category: "coffee",
    color: "ochre",
    label: "ETHIOPIA",
    type: "100% ARABICA",
  },
  {
    name: "Colombia Supremo",
    ru: "Карамель · красное яблоко · какао",
    en: "Caramel · red apple · cocoa",
    category: "coffee",
    color: "sage",
    label: "COLOMBIA",
    type: "100% ARABICA",
  },
  {
    name: "Earl Grey",
    ru: "Чёрный чай · бергамот",
    en: "Black tea · bergamot",
    category: "tea",
    color: "sage",
    label: "EARL GREY",
    type: "LOOSE LEAF TEA",
  },
  {
    name: "Jasmine Green",
    ru: "Зелёный чай · жасмин",
    en: "Green tea · jasmine",
    category: "tea",
    color: "olive",
    label: "JASMINE",
    type: "LOOSE LEAF TEA",
  },
  {
    name: "Vanilla",
    ru: "Сироп · мягкая ваниль",
    en: "Syrup · smooth vanilla",
    category: "syrups",
    color: "ochre",
    label: "VANILLA",
    type: "COFFEE SYRUP",
  },
  {
    name: "Barista Pitcher",
    ru: "Питчер · нержавеющая сталь · 600 мл",
    en: "Milk pitcher · stainless steel · 600 ml",
    category: "accessories",
    color: "sage",
    label: "BARISTA",
    type: "COFFEE ESSENTIALS",
  },
];
const categories: Category[] = ["coffee", "tea", "syrups", "accessories"];
const sectionIds = ["catalog", "about", "offers", "contacts"];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#"
      aria-label="Coffee Stock"
    >
      <span className="brand-symbol">
        <Bean size={26} strokeWidth={1.5} />
      </span>
      <span>
        coffee
        <span className="brand-second">
          stock<span className="brand-dot">®</span>
        </span>
      </span>
    </a>
  );
}

function ProductArt({ product }: { product: (typeof products)[number] }) {
  return (
    <div className={`product-art ${product.color}`} aria-hidden="true">
      <div className={`package-shadow ${product.category}`} />
      <div className={`coffee-package ${product.category}`}>
        <div className="package-seal" />
        <div className="package-label">
          <span className="package-brand">
            coffee
            <br />
            stock.
          </span>
          <Bean size={25} strokeWidth={1} />
          <strong>{product.label}</strong>
          <span className="package-type">{product.type}</span>
          <span className="package-bottom">FRESH IDEAS. GOOD COFFEE.</span>
        </div>
        <div className="package-fold" />
      </div>
      <span className="art-caption">COFFEE STOCK / COLLECTION</span>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("coffee-stock-language") === "en"
        ? "en"
        : "ru";
    } catch {
      return "ru";
    }
  });
  const [category, setCategory] = useState<Category>("coffee");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "ru"
        ? "Coffee Stock — кофе для вашего бизнеса"
        : "Coffee Stock — coffee for your business";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "ru"
          ? "Coffee Stock — кофе и всё для вашего бизнеса. Оптовый магазин в Йошкар-Оле, Россия. Демонстрационный каталог."
          : "Coffee Stock — coffee and essentials for your business. Wholesale shop in Yoshkar-Ola, Russia. Preview collection.",
      );
    try {
      localStorage.setItem("coffee-stock-language", language);
    } catch {
      /* The site also works without browser storage. */
    }
  }, [language]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <MapPin size={12} />
            {t.location}
          </span>
          <span>{t.wholesale}</span>
          <span className="topbar-note">B2B · COFFEE & MORE</span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav
            className="desktop-nav"
            aria-label={
              language === "ru" ? "Основная навигация" : "Main navigation"
            }
          >
            {t.nav.map((label, i) => (
              <a key={sectionIds[i]} href={`#${sectionIds[i]}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              role="group"
              aria-label={language === "ru" ? "Язык" : "Language"}
            >
              <Globe2 size={14} />
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                aria-pressed={language === "ru"}
                lang="ru"
              >
                RU
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                lang="en"
              >
                EN
              </button>
            </div>
            <Button asChild className="header-contact">
              <a href="#contacts">
                {t.contact}
                <ArrowUpRight size={15} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button"
              aria-label={menuOpen ? t.closeMenu : t.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="mobile-nav container"
            id="mobile-nav"
            aria-label={
              language === "ru" ? "Мобильная навигация" : "Mobile navigation"
            }
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {t.nav.map((label, i) => (
              <a
                key={sectionIds[i]}
                href={`#${sectionIds[i]}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="little-line" />
              {t.eyebrow}
            </div>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.intro}</p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#catalog">
                  {t.catalog}
                  <ArrowUpRight size={17} />
                </a>
              </Button>
              <a className="text-link" href="#about">
                {t.partner}
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-beans">
                <Bean />
                <Bean />
                <Bean />
              </span>
              <span>{t.heroNote}</span>
              <ArrowDownRight size={28} strokeWidth={1} />
            </div>
          </div>
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}images/coffee-roastery.jpg`}
              alt={
                language === "ru"
                  ? "Обжаренные кофейные зёрна крупным планом"
                  : "A close-up of roasted coffee beans"
              }
              fetchPriority="high"
            />
            <div className="hero-image-shade" />
            <span className="image-label">{t.photoLabel}</span>
            <div className="coffee-stamp">
              <Bean size={28} strokeWidth={1.3} />
              <span>{t.stamp}</span>
              <small>COFFEE STOCK</small>
            </div>
            <span className="image-bottom">
              {language === "ru"
                ? "ХОРОШИЙ КОФЕ — ХОРОШИЙ ДЕНЬ"
                : "GOOD COFFEE — GOOD DAY"}
              <span>01 — 04</span>
            </span>
          </div>
        </section>

        <div className="container benefits">
          {t.benefits.map(([title, description], i) => {
            const Icon = [Bean, Package, MapPin][i];
            return (
              <div className="benefit" key={title}>
                <Icon size={25} strokeWidth={1.3} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <section className="section container" id="catalog">
          <div className="section-top">
            <div>
              <p className="eyebrow section-number">{t.catalogLabel}</p>
              <h2>{t.catalogTitle}</h2>
            </div>
            <p className="section-description">{t.catalogIntro}</p>
          </div>
          <Tabs
            value={category}
            onValueChange={(value) => setCategory(value as Category)}
          >
            <div className="catalog-toolbar">
              <TabsList
                aria-label={
                  language === "ru" ? "Категории товаров" : "Product categories"
                }
              >
                {categories.map((item, i) => (
                  <TabsTrigger key={item} value={item}>
                    {t.categories[i]}
                  </TabsTrigger>
                ))}
              </TabsList>
              <span className="preview-note">
                <span />
                {t.demo}
              </span>
            </div>
            <TabsContent value={category}>
              <div className="product-grid" aria-live="polite">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <article className="product-card" key={product.name}>
                      <div className="product-image-wrap">
                        <Badge variant="secondary" className="product-weight">
                          {category === "coffee"
                            ? t.kg
                            : category === "tea"
                              ? t.teaWeight
                              : category === "syrups"
                                ? t.syrupWeight
                                : t.piece}
                        </Badge>
                        <ProductArt product={product} />
                      </div>
                      <div className="product-title-line">
                        <h3>{product.name}</h3>
                        <span className="product-category-icon">
                          <Bean size={15} strokeWidth={1.3} />
                        </span>
                      </div>
                      <p className="tasting-notes">{product[language]}</p>
                      <Separator className="product-separator" />
                      <div className="product-availability">
                        <span>{t.unavailable}</span>
                        <span aria-hidden="true">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>
                    </article>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          <p className="catalog-disclaimer">{t.productNote}</p>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-heading">
              <p className="eyebrow section-number">{t.aboutLabel}</p>
              <h2>{t.aboutTitle}</h2>
              <div className="about-drawing" aria-hidden="true">
                <Coffee size={94} strokeWidth={0.75} />
                <span>
                  GOOD COFFEE.
                  <br />
                  GOOD COMPANY.
                </span>
                <Leaf size={39} strokeWidth={1} />
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <ul>
                {t.aboutPoints.map((point) => (
                  <li key={point}>
                    <Check size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contacts">
                {t.contact}
                <ArrowUpRight size={18} />
              </a>
              <span className="about-caption">{t.aboutCaption}</span>
            </div>
          </div>
        </section>

        <section className="section container offers-section" id="offers">
          <div className="section-top">
            <div>
              <p className="eyebrow section-number">{t.offersLabel}</p>
              <h2>{t.offersTitle}</h2>
            </div>
            <p className="section-description">{t.offersIntro}</p>
          </div>
          <div className="offers-grid">
            {[0, 1].map((i) => (
              <article className={`offer-card offer-${i}`} key={i}>
                <Badge variant="outline" className="coming-badge">
                  <span />
                  {t.comingSoon}
                </Badge>
                <div className="offer-art" aria-hidden="true">
                  {i === 0 ? (
                    <Coffee size={100} strokeWidth={0.75} />
                  ) : (
                    <Package size={100} strokeWidth={0.75} />
                  )}
                </div>
                <h3>{i === 0 ? t.offer1Title : t.offer2Title}</h3>
                <p>{i === 0 ? t.offer1Text : t.offer2Text}</p>
                <Button variant="outline" disabled className="offer-button">
                  {t.offerButton}
                  <ArrowUpRight size={16} />
                </Button>
              </article>
            ))}
          </div>
          <p className="catalog-disclaimer">{t.offerDisclaimer}</p>
        </section>

        <section className="contacts-section" id="contacts">
          <div className="container">
            <div className="contacts-top">
              <div>
                <p className="eyebrow section-number">{t.contactsLabel}</p>
                <h2>{t.contactsTitle}</h2>
                <p className="contacts-intro">{t.contactsIntro}</p>
              </div>
              <span className="contact-star" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="contact-grid">
              <div className="contact-item">
                <MapPin size={21} strokeWidth={1.4} />
                <span className="contact-label">{t.address}</span>
                <h3>{t.addressValue}</h3>
                <p>{t.addressPlaceholder}</p>
              </div>
              <div className="contact-item">
                <Phone size={21} strokeWidth={1.4} />
                <span className="contact-label">{t.phone}</span>
                <h3>+7 (8362) 00-00-00</h3>
                <p>{t.placeholder}</p>
              </div>
              <div className="contact-item">
                <Mail size={21} strokeWidth={1.4} />
                <span className="contact-label">{t.email}</span>
                <h3>hello@coffeestock.example</h3>
                <p>{t.placeholder}</p>
              </div>
            </div>
            <div className="contact-bottom">
              <div>
                <h3>{t.socialTitle}</h3>
                <p>{t.socialHint}</p>
              </div>
              <div className="social-links">
                <a
                  href="https://example.com/coffee-stock/telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Telegram — ${t.placeholder}`}
                >
                  <Send size={16} />
                  Telegram
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://example.com/coffee-stock/vk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`VK — ${t.placeholder}`}
                >
                  <strong>vk</strong>
                  {language === "ru" ? "ВКонтакте" : "VK"}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <p className="contact-notice">{t.contactNotice}</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-top">
          <div className="footer-brand">
            <Brand light />
            <span>{t.footerText}</span>
          </div>
          <a href="#" className="back-top">
            {t.backTop}
            <ArrowDown className="rotate-180" size={16} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Coffee Stock. {t.rights}
          </span>
          <span>
            {t.location}
            <ChevronRight size={12} />
          </span>
        </div>
      </footer>
    </>
  );
}
