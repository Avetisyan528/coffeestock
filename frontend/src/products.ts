import type { Language } from "@/content";

export const roastLabels: Record<Language, Record<Roast, string>> = {
  ru: { mediumLight: "средне-светлая", medium: "средняя", mediumDark: "средне-тёмная", dark: "тёмная" },
  en: { mediumLight: "medium-light", medium: "medium", mediumDark: "medium-dark", dark: "dark" },
  hy: { mediumLight: "միջին-բաց", medium: "միջին", mediumDark: "միջին-մուգ", dark: "մուգ" },
};
export type Roast = "mediumLight" | "medium" | "mediumDark" | "dark";

type Description = { meaning: string; profile: string; ingredients: string };

export type Product = {
  name: string;
  roasts: Roast[];
  /** Best-suited brewing method, when the blend was designed for one. */
  method?: "jazzve" | "espresso";
  /** True when the recipe contains tree nuts (almond, Brazil nut, pistachio). */
  nuts: boolean;
} & Record<Language, Description>;

export const products: Product[] = [
  {
    name: "COFFEGIO ORO",
    roasts: ["medium"],
    nuts: false,
    ru: {
      meaning: "Золотой стандарт, благородный, ароматный; премиальная линейка",
      profile: "Мягкий, многогранный, изысканный вкус с деликатной, умеренной кислинкой и цветочными нотами",
      ingredients: "маш, нут, финиковая косточка, горох, бамия, ароматизатор со вкусом молотого кофе",
    },
    en: {
      meaning: "Gold standard; a refined, aromatic premium blend.",
      profile: "Soft and complex, with delicate, moderate acidity and floral notes.",
      ingredients: "mung bean, chickpea, date seed, pea, okra, ground coffee flavouring",
    },
    hy: {
      meaning: "Ոսկե ստանդարտ՝ ազնիվ, բուրավետ պրեմիում գիծ",
      profile: "Մեղմ, բազմաշերտ, նրբագեղ համ՝ չափավոր թթվայնությամբ և ծաղկային նոտաներով",
      ingredients: "մաշ, սիսեռ, արմավի կորիզ, ոլոռ, բամիա, աղացած սուրճի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO CREMA",
    roasts: ["medium"],
    nuts: true,
    ru: {
      meaning: "Кремовая пенка, бархатистый вкус",
      profile: "Округлый, мягкий, обволакивающий, шоколадно-ореховый вкус; густая устойчивая пенка",
      ingredients: "нут, горох, каштан съедобный, бразильский орех, ароматизатор со вкусом молотого кофе",
    },
    en: {
      meaning: "Creamy foam and a velvety flavour.",
      profile: "Rounded and velvety, with chocolate and nut notes and a thick, stable foam.",
      ingredients: "chickpea, pea, sweet chestnut, Brazil nut, ground coffee flavouring",
    },
    hy: {
      meaning: "Կրեմային փրփուր, թավշյա համ",
      profile: "Կլորավուն, մեղմ, պարուրող շոկոլադա-ընկուզային համ՝ խիտ, կայուն փրփուրով",
      ingredients: "սիսեռ, ոլոռ, ուտելի շագանակ, բրազիլական ընկույզ, աղացած սուրճի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO CLASSICO",
    roasts: ["medium"],
    nuts: true,
    ru: {
      meaning: "Классический, привычный, сбалансированный вкус на каждый день",
      profile: "Сбалансированный, гармоничный вкус с умеренной горечью и кислинкой",
      ingredients: "нут, горох, ячмень, фисташка терпентинная, ароматизатор со вкусом молотого кофе",
    },
    en: {
      meaning: "A familiar, balanced everyday classic.",
      profile: "Balanced flavour with moderate bitterness and acidity.",
      ingredients: "chickpea, pea, barley, terebinth pistachio, ground coffee flavouring",
    },
    hy: {
      meaning: "Դասական, ծանոթ, հավասարակշռված համ ամեն օրվա համար",
      profile: "Հավասարակշռված, ներդաշնակ համ՝ չափավոր դառնությամբ և թթվայնությամբ",
      ingredients: "սիսեռ, ոլոռ, գարի, բևեկնի (վայրի պիստակ), աղացած սուրճի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO INTENSO",
    roasts: ["mediumDark"],
    nuts: true,
    ru: {
      meaning: "Интенсивный, насыщенный вкус, выраженный аромат",
      profile: "Насыщенный, плотный вкус, выраженные какао-ноты с умеренной горчинкой",
      ingredients: "горох, гуава, ячмень, какавелла, миндаль, маш, финиковая косточка, ароматизатор со вкусом шоколада",
    },
    en: {
      meaning: "Intense flavour and a pronounced aroma.",
      profile: "Full-bodied, with pronounced cocoa notes and a touch of bitterness.",
      ingredients: "pea, guava, barley, cocoa bean shell, almond, mung bean, date seed, chocolate flavouring",
    },
    hy: {
      meaning: "Ինտենսիվ, հագեցած համ և արտահայտված բույր",
      profile: "Հագեցած, խիտ համ՝ կակաոյի արտահայտված նոտաներով և չափավոր դառնությամբ",
      ingredients: "ոլոռ, գուավա, գարի, կակաոյի կեղև, նուշ, մաշ, արմավի կորիզ, շոկոլադի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO FORTE",
    roasts: ["dark"],
    nuts: true,
    ru: {
      meaning: "Крепкий, очень насыщенный по вкусу",
      profile: "Благородный вкус с доминирующей горчинкой, плотное тело, длительное ароматное послевкусие",
      ingredients: "горох, нут, топинамбур, миндаль, маш, ароматизатор мокко",
    },
    en: {
      meaning: "Strong, full flavour.",
      profile: "Pronounced bitterness, a full body and a long aromatic finish.",
      ingredients: "pea, chickpea, Jerusalem artichoke, almond, mung bean, mocha flavouring",
    },
    hy: {
      meaning: "Թունդ, շատ հագեցած համ",
      profile: "Ազնիվ համ՝ գերակշռող դառնությամբ, խիտ մարմնով և երկար բուրավետ հետհամով",
      ingredients: "ոլոռ, սիսեռ, գետնախնձոր, նուշ, մաշ, մոկկայի բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO ESPRESSO",
    roasts: ["mediumDark"],
    method: "espresso",
    nuts: true,
    ru: {
      meaning: "Для эспрессо",
      profile: "Плотный, сбалансированный, ароматный, с мягкой горчинкой и тонкой кислинкой; раскрывается в кофемашине",
      ingredients: "горох, каштан съедобный, бразильский орех, рожь, ароматизатор со вкусом молотого кофе",
    },
    en: {
      meaning: "For espresso.",
      profile: "Full-bodied and balanced, with a rich aroma, gentle bitterness and delicate acidity; made for machine-brewed coffee.",
      ingredients: "pea, sweet chestnut, Brazil nut, rye, ground coffee flavouring",
    },
    hy: {
      meaning: "Էսպրեսոյի համար",
      profile: "Խիտ, հավասարակշռված, բուրավետ՝ մեղմ դառնությամբ և նուրբ թթվայնությամբ. լավագույնս բացվում է սրճեփ մեքենայում",
      ingredients: "ոլոռ, ուտելի շագանակ, բրազիլական ընկույզ, տարեկան, աղացած սուրճի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO AROMA",
    roasts: ["mediumLight"],
    nuts: true,
    ru: {
      meaning: "Ароматный, выразительный, приятное послевкусие",
      profile: "Яркий аромат с мягкими фруктово-цветочными оттенками",
      ingredients: "нут, гуава, какавелла, миндаль, маш, финиковая косточка, ароматизатор со вкусом капучино",
    },
    en: {
      meaning: "Fragrant and expressive with a pleasant finish.",
      profile: "A bright aroma with soft fruit and floral notes.",
      ingredients: "chickpea, guava, cocoa bean shell, almond, mung bean, date seed, cappuccino flavouring",
    },
    hy: {
      meaning: "Բուրավետ, արտահայտիչ, հաճելի հետհամով",
      profile: "Վառ բույր՝ մեղմ մրգային և ծաղկային երանգներով",
      ingredients: "սիսեռ, գուավա, կակաոյի կեղև, նուշ, մաշ, արմավի կորիզ, կապուչինոյի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO DOLCE",
    roasts: ["medium", "mediumLight"],
    nuts: true,
    ru: {
      meaning: "Мягкий, сладковатый",
      profile: "Нежный, утончённый шоколадно-карамельный вкус с минимальной горчинкой",
      ingredients: "гуава, рожь, нут, миндаль, маш, финиковая косточка, горох, ароматизатор со вкусом карамели",
    },
    en: {
      meaning: "Mild and slightly sweet.",
      profile: "Delicate chocolate and caramel flavours with very little bitterness.",
      ingredients: "guava, rye, chickpea, almond, mung bean, date seed, pea, caramel flavouring",
    },
    hy: {
      meaning: "Մեղմ, քաղցրավուն",
      profile: "Նուրբ, նրբագեղ շոկոլադա-կարամելային համ՝ նվազագույն դառնությամբ",
      ingredients: "գուավա, տարեկան, սիսեռ, նուշ, մաշ, արմավի կորիզ, ոլոռ, կարամելի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO JAZZVE",
    roasts: ["medium"],
    method: "jazzve",
    nuts: true,
    ru: {
      meaning: "Для кофе по-восточному в турке или джезве",
      profile: "Плотное тело, глубокий аромат, выраженная устойчивая пенка",
      ingredients: "горох, нут, миндаль, виноградная косточка, рожь, ароматизатор со вкусом молотого кофе",
    },
    en: {
      meaning: "For Turkish-style coffee prepared in a cezve.",
      profile: "Full-bodied, with a deep aroma and a pronounced, lasting foam.",
      ingredients: "pea, chickpea, almond, grape seed, rye, ground coffee flavouring",
    },
    hy: {
      meaning: "Արևելյան սուրճի համար՝ ջեզվեում պատրաստելու",
      profile: "Խիտ մարմին, խորը բույր, արտահայտված կայուն փրփուր",
      ingredients: "ոլոռ, սիսեռ, նուշ, խաղողի կորիզ, տարեկան, աղացած սուրճի համով բուրավետիչ",
    },
  },
  {
    name: "COFFEGIO RICCO",
    roasts: ["mediumDark"],
    nuts: true,
    ru: {
      meaning: "Богатый, полный, насыщенный",
      profile: "Густой, интенсивный вкус с щедрыми нотами какао, горького шоколада и сладкой карамели",
      ingredients: "горох, маш, бамия, цератония стручковая, ячмень, какавелла, миндаль, ароматизатор со вкусом шоколада",
    },
    en: {
      meaning: "Rich, full and intense.",
      profile: "Rich cocoa, dark chocolate and sweet caramel notes with a full, intense flavour.",
      ingredients: "pea, mung bean, okra, carob, barley, cocoa bean shell, almond, chocolate flavouring",
    },
    hy: {
      meaning: "Հարուստ, լի, հագեցած",
      profile: "Խիտ, ինտենսիվ համ՝ կակաոյի, դառը շոկոլադի և քաղցր կարամելի առատ նոտաներով",
      ingredients: "ոլոռ, մաշ, բամիա, եղջրենի (կարոբ), գարի, կակաոյի կեղև, նուշ, շոկոլադի համով բուրավետիչ",
    },
  },
];
