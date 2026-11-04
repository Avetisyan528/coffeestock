import { useEffect, useState } from "react";
import {
  ArrowDown,
  ChevronDown,
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

import { copy, type Language } from "@/content";
import { products, categories, roastLabels, type Category } from "@/products";

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
        <span className="brand-second">stock</span>
      </span>
    </a>
  );
}

function ProductArt({ product }: { product: (typeof products)[number] }) {
  return (
    <div className={`product-art ${product.color}`} aria-hidden="true">
      <div className="package-shadow" />
      <div className="coffee-package">
        <div className="package-seal" />
        <div className="package-label">
          <span className="package-brand">COFFEGIO</span>
          <span className="pack-emblem"><Bean size={25} strokeWidth={1} /></span>
          <strong>{product.name.split(" ")[1]}</strong>
          <span className="package-type">PLANT-BASED BLEND INGREDIENT</span>
          <span className="package-bottom">FOR PROFESSIONAL FORMULATIONS</span>
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
  const [category, setCategory] = useState<Category>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy[language].pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy[language].description);
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
          <span className="topbar-note">B2B · BLEND INGREDIENTS</span>
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
        <section className="store-hero" aria-labelledby="store-title">
          <div className="container store-hero-inner">
            <div className="store-intro">
              <p className="store-kicker"><span />COFFEGIO <i>/</i> {t.wholesale}</p>
              <h1 id="store-title">{language === "ru" ? <>Основы для<br />кофейных<br /><em>блендов.</em></> : <>Plant-based<br />ingredients for<br /><em>coffee blends.</em></>}</h1>
              <p className="store-summary">{language === "ru" ? "Десять сухих обжаренных растительных основ. Подберите вкус и состав под обжарку вашего кофе." : "Ten dry, roasted plant-based ingredients. Find a flavour and recipe to pair with your coffee roast."}</p>
              <div className="store-actions">
                <Button asChild><a href="#catalog">{t.catalog}<ArrowRight size={16} /></a></Button>
                <a className="store-secondary" href="#offers">{language === "ru" ? "Сотрудничество" : "Partnerships"}<ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="store-stage">
              <div className="store-photo">
                <img src={`${import.meta.env.BASE_URL}images/coffee-roastery.jpg`} alt="" fetchPriority="high" />
              </div>
              <div className="stage-pack"><ProductArt product={products[0]} /></div>
              <a className="stage-caption" href="#blend-ORO" onClick={() => setCategory("all")}>
                <span className="stage-index">01 / 10</span>
                <strong>{products[0].name}</strong>
                <span>{language === "ru" ? "Цветочные ноты · средняя обжарка" : "Floral notes · medium roast"}</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

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
                  language === "ru" ? "Рекомендуемая обжарка кофе" : "Recommended coffee roast"
                }
              >
                {categories.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item === "all" ? (language === "ru" ? "Все обжарки" : "All roasts") : roastLabels[language][item]}
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
                  .filter(
                    (product) =>
                      category === "all" || product.roasts.includes(category),
                  )
                  .map((product) => (
                    <article className="product-card" key={product.name} id={`blend-${product.name.split(" ")[1]}`}>
                      <div className="product-image-wrap">
                        <Badge variant="secondary" className="product-weight">
                          {product.roasts.map((r) => roastLabels[language][r]).join(" / ")}
                        </Badge>
                        <ProductArt product={product} />
                      </div>
                      <div className="product-title-line">
                        <h3>{product.name}</h3>
                        <span className="product-category-icon">
                          <Bean size={15} strokeWidth={1.3} />
                        </span>
                      </div>
                      <p className="tasting-notes">{product[language].meaning}</p>
                      <details className="product-details">
                        <summary>{language === "ru" ? "Состав и профиль" : "Ingredients & profile"}<ChevronDown size={16} /></summary>
                      <dl className="blend-spec">
                        <dt>{language === "ru" ? "Ожидаемый профиль" : "Expected flavour"}</dt>
                        <dd>{product[language].profile}</dd>
                        <dt>{language === "ru" ? "Состав" : "Ingredients"}</dt>
                        <dd>{product[language].ingredients}</dd>
                        <dt>{language === "ru" ? "Рекомендуемая обжарка кофе" : "Recommended coffee roast"}</dt>
                        <dd>{product.roasts.map((r) => roastLabels[language][r]).join(" / ")}</dd>
                      </dl>
                      </details>
                    </article>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          <p className="catalog-disclaimer">{t.productNote}</p>
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
