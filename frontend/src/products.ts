export const roastLabels = {
  ru: { mediumLight: "Средне-светлая", medium: "Средняя", mediumDark: "Средне-тёмная", dark: "Тёмная" },
  en: { mediumLight: "Medium-light", medium: "Medium", mediumDark: "Medium-dark", dark: "Dark" },
};
export type Roast = keyof typeof roastLabels.ru;
export const categories = ["all", "mediumLight", "medium", "mediumDark", "dark"] as const;
export type Category = (typeof categories)[number];
type Description = { meaning: string; profile: string; ingredients: string };
export const products: {name: string; roasts: Roast[]; color: string; ru: Description; en: Description}[] = [
  {
    "name": "COFFEGIO ORO",
    "roasts": [
      "medium"
    ],
    "color": "ochre",
    "ru": {
      "meaning": "Золотой стандарт, благородный, ароматный; премиальная линейка",
      "profile": "Мягкий, многогранный, изысканный вкус с деликатной, умеренной кислинкой и цветочными нотами",
      "ingredients": "Маш, нут, финиковая косточка, горох, бамия, ароматизатор со вкусом молотого кофе"
    },
    "en": {
      "meaning": "Gold standard; a refined, aromatic premium blend.",
      "profile": "Soft and complex, with delicate, moderate acidity and floral notes.",
      "ingredients": "mung bean, chickpea, date seed, pea, okra, ground coffee flavouring"
    }
  },
  {
    "name": "COFFEGIO CREMA",
    "roasts": [
      "medium"
    ],
    "color": "terracotta",
    "ru": {
      "meaning": "Кремовая пенка, бархатистый вкус",
      "profile": "Округлый, мягкий, обволакивающий, шоколадно-ореховый вкус; густая устойчивая пенка",
      "ingredients": "Нут, горох, каштан съедобный, бразильский орех, ароматизатор со вкусом молотого кофе"
    },
    "en": {
      "meaning": "Creamy foam and a velvety flavour.",
      "profile": "Rounded and velvety, with chocolate and nut notes and a thick, stable foam.",
      "ingredients": "chickpea, pea, sweet chestnut, Brazil nut, ground coffee flavouring"
    }
  },
  {
    "name": "COFFEGIO CLASSICO",
    "roasts": [
      "medium"
    ],
    "color": "olive",
    "ru": {
      "meaning": "Классический, привычный, сбалансированный вкус на каждый день",
      "profile": "Сбалансированный, гармоничный вкус с умеренной горечью и кислинкой",
      "ingredients": "Нут, горох, ячмень, фисташка терпентинная, ароматизатор со вкусом молотого кофе"
    },
    "en": {
      "meaning": "A familiar, balanced everyday classic.",
      "profile": "Balanced flavour with moderate bitterness and acidity.",
      "ingredients": "chickpea, pea, barley, terebinth pistachio, ground coffee flavouring"
    }
  },
  {
    "name": "COFFEGIO INTENSO",
    "roasts": [
      "mediumDark"
    ],
    "color": "cocoa",
    "ru": {
      "meaning": "Интенсивный, насыщенный вкус, выраженный аромат и интенсивность",
      "profile": "Насыщенный, плотный вкус, выраженные какао-ноты с умеренной горчинкой",
      "ingredients": "Горох, гуава, ячмень, какавелла, миндаль, маш, финиковая косточка, ароматизатор со вкусом шоколада"
    },
    "en": {
      "meaning": "Intense flavour and a pronounced aroma.",
      "profile": "Full-bodied, with pronounced cocoa notes and a touch of bitterness.",
      "ingredients": "pea, guava, barley, cocoa bean shell, almond, mung bean, date seed, chocolate flavouring"
    }
  },
  {
    "name": "COFFEGIO FORTE",
    "roasts": [
      "dark"
    ],
    "color": "cocoa",
    "ru": {
      "meaning": "Крепкий, очень насыщенный по вкусу",
      "profile": "Благородный вкус с доминирующей горчинкой, плотное тело, длительное ароматное послевкусие",
      "ingredients": "Горох, нут, топинамбур, миндаль, маш, ароматизатор мокко"
    },
    "en": {
      "meaning": "Strong, full flavour.",
      "profile": "Pronounced bitterness, a full body and a long aromatic finish.",
      "ingredients": "pea, chickpea, Jerusalem artichoke, almond, mung bean, mocha flavouring"
    }
  },
  {
    "name": "COFFEGIO ESPRESSO",
    "roasts": [
      "mediumDark"
    ],
    "color": "olive",
    "ru": {
      "meaning": "Для эспрессо",
      "profile": "Плотный, сбалансированный, ароматный, с мягкой горчинкой и тонкой кислинкой, идеально раскрывается в кофемашине",
      "ingredients": "Горох, каштан съедобный, бразильский орех, рожь, ароматизатор со вкусом молотого кофе"
    },
    "en": {
      "meaning": "For espresso.",
      "profile": "Full-bodied and balanced, with a rich aroma, gentle bitterness and delicate acidity; intended for machine-brewed coffee.",
      "ingredients": "pea, sweet chestnut, Brazil nut, rye, ground coffee flavouring"
    }
  },
  {
    "name": "COFFEGIO AROMA",
    "roasts": [
      "mediumLight"
    ],
    "color": "sage",
    "ru": {
      "meaning": "Ароматный, выразительный, приятное послевкусие",
      "profile": "Яркий аромат с мягкими фруктово-цветочными оттенками",
      "ingredients": "Нут, гуава, какавелла, миндаль, маш, финиковая косточка, ароматизатор со вкусом капучино"
    },
    "en": {
      "meaning": "Fragrant and expressive with a pleasant finish.",
      "profile": "A bright aroma with soft fruit and floral notes.",
      "ingredients": "chickpea, guava, cocoa bean shell, almond, mung bean, date seed, cappuccino flavouring"
    }
  },
  {
    "name": "COFFEGIO DOLCE",
    "roasts": [
      "medium",
      "mediumLight"
    ],
    "color": "ochre",
    "ru": {
      "meaning": "Мягкий, сладковатый",
      "profile": "Нежный, утонченный, деликатный шоколадно-карамельный вкус с минимальной горчинкой",
      "ingredients": "Гуава, рожь, нут, миндаль, маш, финиковая косточка, горох, ароматизатор со вкусом карамель"
    },
    "en": {
      "meaning": "Mild and slightly sweet.",
      "profile": "Delicate chocolate and caramel flavours with very little bitterness.",
      "ingredients": "guava, rye, chickpea, almond, mung bean, date seed, pea, caramel flavouring"
    }
  },
  {
    "name": "COFFEGIO JAZZVE",
    "roasts": [
      "medium"
    ],
    "color": "terracotta",
    "ru": {
      "meaning": "Для кофе по-восточному, для приготовления в турке, джезве",
      "profile": "Плотное тело, глубокий аромат, выраженная устойчивая пенка",
      "ingredients": "Горох, нут, миндаль, виноградная косточка, рожь, ароматизатор со вкусом молотого кофе"
    },
    "en": {
      "meaning": "For Turkish-style coffee prepared in a cezve.",
      "profile": "Full-bodied, with a deep aroma and a pronounced, lasting foam.",
      "ingredients": "pea, chickpea, almond, grape seed, rye, ground coffee flavouring"
    }
  },
  {
    "name": "COFFEGIO RICCO",
    "roasts": [
      "mediumDark"
    ],
    "color": "cocoa",
    "ru": {
      "meaning": "Богатый, полный, насыщенный",
      "profile": "Густой, интенсивный вкус с щедрыми нотами какао, горького шоколада и сладкой карамели",
      "ingredients": "Горох, маш, бамия, цератония стручковая, ячмень, какавелла, миндаль, ароматизатор со вкусом шоколада"
    },
    "en": {
      "meaning": "Rich, full and intense.",
      "profile": "Rich cocoa, dark chocolate and sweet caramel notes with a full, intense flavour.",
      "ingredients": "pea, mung bean, okra, carob, barley, cocoa bean shell, almond, chocolate flavouring"
    }
  }
];
