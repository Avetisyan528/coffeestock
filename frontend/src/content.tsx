export type Language = "ru" | "en";
export type Category = "all" | "classic" | "dessert" | "fruit";

export const copy = {
  ru: {
    location: "Йошкар-Ола, Россия",
    wholesale: "Сырьё для кофейной индустрии",
    nav: ["Вкусы", "О продукте", "Предложения", "Контакты"],
    contact: "Обсудить сотрудничество",
    eyebrow: "РАСТИТЕЛЬНАЯ ОСНОВА. НОВЫЕ РЕЦЕПТУРЫ.",
    title: (
      <>
        Основа для
        <br />
        <em>ваших блендов.</em>
      </>
    ),
    intro:
      "Сухая растительная основа с кофейным вкусоароматическим профилем. Ингредиент на бобово-липидной основе для разработки коммерческих смесей с натуральным жареным кофе.",
    catalog: "Выбрать вкус",
    partner: "Узнать о продукте",
    heroNote:
      "Зерноподобная форма · гранулы · порошок\nДля профессионального производства.",
    stamp: "ДЛЯ ВАШИХ РЕЦЕПТУР",
    photoLabel: "СЫРЬЁ ДЛЯ КОФЕЙНЫХ СМЕСЕЙ",
    photoCaption: "НАТУРАЛЬНЫЙ КОФЕ — КОМПОНЕНТ БЛЕНДА",
    benefits: [
      ["Несколько фракций", "Подбор под технологию производства"],
      ["Вкусовые варианты", "От классики до десертных профилей"],
      ["B2B-сотрудничество", "Йошкар-Ола · Россия"],
    ],
    catalogLabel: "01 / ВКУСОВЫЕ ПРОФИЛИ",
    catalogTitle: "Одна основа. Разные вкусы.",
    catalogIntro:
      "Классический кофейный профиль и ароматизированные варианты для ваших рецептур.",
    categories: ["Все вкусы", "Классический", "Десертные", "Фруктовые"],
    demo: "Линейка в разработке",
    productNote:
      "Иллюстрации упаковки условные. Фракцию, состав, фасовку, наличие и цену уточняйте перед заказом.",
    unavailable: "Условия уточняются",
    productBadge: "Сухая основа",
    aboutLabel: "02 / О ПРОДУКТЕ",
    aboutTitle: (
      <>
        Новая основа.
        <br />
        Знакомый
        <br />
        <em>кофейный профиль.</em>
      </>
    ),
    aboutText:
      "Coffee Stock представляет сухую растительную основу для кофейных смесей. Это многокомпонентный ингредиент на бобово-липидной основе, предназначенный для совместного использования с натуральным жареным кофе.",
    aboutText2:
      "Основа помогает разрабатывать рецептуры с заданным объёмом, вкусом и текстурой напитка. Итоговый результат зависит от натурального кофе, доли основы, фракции и способа приготовления — его оценивают на пробной партии.",
    aboutPoints: [
      "Зерноподобная форма, гранулы и порошок",
      "Классический и ароматизированные варианты",
      "Подбор фракции и рецептуры под ваш процесс",
    ],
    aboutCaption:
      "Растительный ингредиент для смеси, а не чистый кофе. Полный состав и аллергены необходимо уточнить в спецификации продукта.",
    technologyLabel: "ТЕХНОЛОГИЯ И ПРИМЕНЕНИЕ",
    technologyTitle: "От фракции до готовой смеси.",
    technologyIntro:
      "Параметры для обсуждения с технологом и проверки на вашем оборудовании.",
    technologyCards: [
      {
        title: "Структура и фракция",
        text: "Подбор цвета, насыпной плотности и размера частиц под выбранный кофе. Однородность смеси и устойчивость к расслоению при перевозке проверяют на конкретной рецептуре.",
      },
      {
        title: "Вкус и аромат",
        text: "Задача основы — дополнить кофейный профиль, текстуру и послевкусие напитка. Интенсивность аромата и его сохранность оценивают при заваривании и хранении.",
      },
      {
        title: "Ароматизированная основа",
        text: "Вкусовые варианты предполагают внесение ароматического профиля вместе с сухой основой. Необходимость дополнительной ароматизации определяет технолог.",
      },
      {
        title: "Стабильность рецептуры",
        text: "Основа предназначена для работы над повторяемостью вкуса от партии к партии. Состав антиоксидантов и регуляторов кислотности, их дозировки и условия применения уточняют в спецификации.",
      },
    ],
    ratioTitle: "Пропорции без двусмысленности",
    ratioIntro:
      "Варианты для пробного смешивания. Во всех примерах сначала указана основа, затем натуральный кофе.",
    ratios: [
      {
        value: "2 : 1",
        label: "Основа : натуральный кофе",
        detail: "2 части основы + 1 часть кофе",
      },
      {
        value: "3 : 1",
        label: "Основа : натуральный кофе",
        detail: "3 части основы + 1 часть кофе",
      },
    ],
    ratioNote:
      "Это исходные варианты для испытаний, а не универсальная дозировка. Окончательную рецептуру, способ дозирования и обозначение состава готовой смеси определяют отдельно.",
    targetsTitle: "Показатели, которые требуют подтверждения",
    targets: [
      {
        value: "2–3 раза",
        title: "Заявленный ориентир снижения затрат на сырьё",
        text: "Фактическую экономию рассчитывают по ценам компонентов, доле основы и затратам на производство.",
      },
      {
        value: "до 24 мес.",
        title: "Заявленный ориентир срока хранения",
        text: "Не подтверждён для готовой смеси. Срок устанавливают по результатам испытаний с учётом состава, упаковки и условий хранения.",
      },
    ],
    offersLabel: "03 / СОТРУДНИЧЕСТВО",
    offersTitle: "Начнём с вашей рецептуры.",
    offersIntro:
      "Готовим форматы сотрудничества для производителей и фасовщиков кофейных смесей.",
    comingSoon: "СКОРО",
    offer1Title: "Пробная партия для разработки",
    offer1Text:
      "Подбор вкусового профиля и фракции для тестирования совместно с вашим натуральным кофе.",
    offer2Title: "Основа для серийного производства",
    offer2Text:
      "Обсуждение объёмов, фасовки и регулярных поставок после согласования спецификации и результатов испытаний.",
    offerButton: "Предложение готовится",
    offerDisclaimer:
      "Форматы сотрудничества предварительные. Онлайн-заказ и оформление пока недоступны.",
    contactsLabel: "04 / КОНТАКТЫ",
    contactsTitle: (
      <>
        Обсудим основу
        <br />
        вашего продукта.
      </>
    ),
    contactsIntro:
      "Coffee Stock · Йошкар-Ола. Расскажите о вашей рецептуре, нужной фракции и планируемых объёмах.",
    address: "Где мы находимся",
    addressValue: "Россия, г. Йошкар-Ола",
    addressPlaceholder: "ул. Примерная, д. 1 — пример адреса",
    phone: "Позвонить",
    email: "Написать",
    placeholder: "Пример контакта",
    socialTitle: "Давайте будем на связи",
    socialHint: "Ссылки-примеры · настоящие страницы появятся позже",
    contactNotice: "Контакты, адрес и социальные ссылки пока демонстрационные.",
    footerText: "Растительная основа для кофейных смесей.",
    rights: "Все права защищены.",
    backTop: "Наверх",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
    skip: "Перейти к содержимому",
    pageTitle: "Coffee Stock — сухая основа для кофейных смесей",
    description:
      "Сухая растительная основа для кофейных смесей: зерноподобная форма, гранулы и порошок. Классический и ароматизированные варианты. Coffee Stock, Йошкар-Ола.",
  },
  en: {
    location: "Yoshkar-Ola, Russia",
    wholesale: "Ingredients for the coffee industry",
    nav: ["Flavours", "The product", "Offers", "Contact"],
    contact: "Discuss a partnership",
    eyebrow: "PLANT-BASED INGREDIENTS. NEW RECIPES.",
    title: (
      <>
        A foundation for
        <br />
        <em>your blends.</em>
      </>
    ),
    intro:
      "A dry plant-based ingredient with a coffee flavour and aroma profile. A legume-and-lipid base for developing commercial blends with natural roasted coffee.",
    catalog: "Explore flavours",
    partner: "Meet the product",
    heroNote:
      "Bean-shaped form · granules · powder\nFor professional production.",
    stamp: "MADE FOR YOUR RECIPES",
    photoLabel: "INGREDIENTS FOR COFFEE BLENDS",
    photoCaption: "NATURAL COFFEE — ONE PART OF THE BLEND",
    benefits: [
      ["Multiple particle sizes", "Selected for your production process"],
      ["Flavour options", "From classic to dessert profiles"],
      ["B2B partnerships", "Yoshkar-Ola · Russia"],
    ],
    catalogLabel: "01 / FLAVOUR PROFILES",
    catalogTitle: "One base. Many flavours.",
    catalogIntro:
      "A classic coffee profile and flavoured options for developing your recipes.",
    categories: ["All flavours", "Classic", "Dessert", "Fruit"],
    demo: "Range in development",
    productNote:
      "Packaging illustrations are conceptual. Confirm particle size, ingredients, pack size, availability, and pricing before ordering.",
    unavailable: "Details to be confirmed",
    productBadge: "Dry base",
    aboutLabel: "02 / THE PRODUCT",
    aboutTitle: (
      <>
        A new base.
        <br />A familiar
        <br />
        <em>coffee profile.</em>
      </>
    ),
    aboutText:
      "Coffee Stock introduces a dry plant-based ingredient for coffee blends. This multi-ingredient legume-and-lipid base is intended for use alongside natural roasted coffee.",
    aboutText2:
      "The base is intended to support recipes with a chosen volume, flavour, and beverage texture. Results depend on the coffee, inclusion rate, particle size, and brewing method, and should be evaluated in a trial batch.",
    aboutPoints: [
      "Bean-shaped form, granules, and powder",
      "Classic and flavoured options",
      "Particle size and recipe selection for your process",
    ],
    aboutCaption:
      "A plant-based blend ingredient, not pure coffee. Confirm the full ingredient and allergen list in the product specification.",
    technologyLabel: "TECHNOLOGY & APPLICATION",
    technologyTitle: "From particle size to finished blend.",
    technologyIntro:
      "Parameters to discuss with your food technologist and test on your equipment.",
    technologyCards: [
      {
        title: "Structure and particle size",
        text: "Select colour, bulk density, and particle size to suit the chosen coffee. Blend uniformity and resistance to separation in transit need testing with each recipe.",
      },
      {
        title: "Flavour and aroma",
        text: "The base is intended to complement the coffee profile, texture, and finish. Aroma intensity and retention are evaluated during brewing and storage.",
      },
      {
        title: "A flavoured dry base",
        text: "Flavoured options incorporate an aroma profile into the dry base. Your food technologist determines whether any additional flavouring is needed.",
      },
      {
        title: "Recipe consistency",
        text: "The base is intended to support batch-to-batch flavour consistency. Antioxidants, acidity regulators, their quantities, and conditions of use must be specified in the product documentation.",
      },
    ],
    ratioTitle: "Clear blending ratios",
    ratioIntro:
      "Starting points for trial blends. Each example lists the base first and natural coffee second.",
    ratios: [
      {
        value: "2 : 1",
        label: "Base : natural coffee",
        detail: "2 parts base + 1 part coffee",
      },
      {
        value: "3 : 1",
        label: "Base : natural coffee",
        detail: "3 parts base + 1 part coffee",
      },
    ],
    ratioNote:
      "These are trial formulations, not universal dosing instructions. The final recipe, dosing method, and ingredient declaration of the finished blend are determined separately.",
    targetsTitle: "Figures that require validation",
    targets: [
      {
        value: "2–3×",
        title: "Stated target for reducing ingredient costs",
        text: "Actual savings must be calculated using component prices, the inclusion rate, and production costs.",
      },
      {
        value: "up to 24 months",
        title: "Stated shelf-life target",
        text: "Not verified for the finished blend. Shelf life must be established through testing of its formulation, packaging, and storage conditions.",
      },
    ],
    offersLabel: "03 / PARTNERSHIPS",
    offersTitle: "Let’s start with your recipe.",
    offersIntro:
      "We’re preparing partnership options for manufacturers and packers of coffee blends.",
    comingSoon: "COMING SOON",
    offer1Title: "A trial batch for development",
    offer1Text:
      "Select a flavour profile and particle size for testing alongside your natural coffee.",
    offer2Title: "A base for ongoing production",
    offer2Text:
      "Discuss volumes, packaging, and regular supply after agreeing on specifications and evaluating trial results.",
    offerButton: "Offer coming soon",
    offerDisclaimer:
      "Partnership options are preliminary. Online ordering and checkout are not available yet.",
    contactsLabel: "04 / CONTACT",
    contactsTitle: (
      <>
        Let’s discuss the base
        <br />
        for your product.
      </>
    ),
    contactsIntro:
      "Coffee Stock · Yoshkar-Ola. Tell us about your recipe, particle size requirements, and expected volumes.",
    address: "Find us",
    addressValue: "Yoshkar-Ola, Russia",
    addressPlaceholder: "1 Example Street — sample address",
    phone: "Call us",
    email: "Write to us",
    placeholder: "Sample contact",
    socialTitle: "Let’s keep in touch",
    socialHint: "Placeholder links · our real pages are coming soon",
    contactNotice:
      "Contact details, street address, and social links are placeholders.",
    footerText: "A plant-based ingredient for coffee blends.",
    rights: "All rights reserved.",
    backTop: "Back to top",
    menu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    pageTitle: "Coffee Stock — dry base for coffee blends",
    description:
      "A dry plant-based ingredient for coffee blends in bean-shaped, granular, and powdered forms. Classic and flavoured options. Coffee Stock, Yoshkar-Ola.",
  },
};

export const products: {
  id: string;
  name: Record<Language, string>;
  ru: string;
  en: string;
  category: Exclude<Category, "all">;
  color: string;
  label: string;
}[] = [
  {
    id: "classic",
    name: { ru: "Классический кофе", en: "Classic coffee" },
    ru: "Основа с кофейным профилем",
    en: "Base with a coffee profile",
    category: "classic",
    color: "olive",
    label: "CLASSIC",
  },
  {
    id: "irish-cream",
    name: { ru: "Ирландский крем", en: "Irish cream" },
    ru: "Основа со сливочным профилем",
    en: "Base with a creamy flavour profile",
    category: "dessert",
    color: "terracotta",
    label: "IRISH CREAM",
  },
  {
    id: "vanilla",
    name: { ru: "Французская ваниль", en: "French vanilla" },
    ru: "Основа с ванильным профилем",
    en: "Base with a vanilla flavour profile",
    category: "dessert",
    color: "ochre",
    label: "VANILLA",
  },
  {
    id: "chocolate",
    name: { ru: "Бельгийский шоколад", en: "Belgian chocolate" },
    ru: "Основа с шоколадным профилем",
    en: "Base with a chocolate flavour profile",
    category: "dessert",
    color: "cocoa",
    label: "CHOCOLATE",
  },
  {
    id: "banana",
    name: { ru: "Спелый банан", en: "Ripe banana" },
    ru: "Основа с банановым профилем",
    en: "Base with a banana flavour profile",
    category: "fruit",
    color: "sage",
    label: "BANANA",
  },
];
export const categories: Category[] = ["all", "classic", "dessert", "fruit"];
