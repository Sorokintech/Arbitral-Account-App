interface accountMenuType {
  id: number;
  name: string;
}
interface accountType {
  id: number;
  country: string;
  name: string;
  stock: number;
  price: string;
  toAdd: number;
}
interface LinksIconsType {
  id: number;
  name: string;
  icon: string;
}
interface MenuItemsType {
  id: number;
  title: string;
  nav: string;
}

export const socialLinks: LinksIconsType[] = [
  {
    id: 1,
    name: "facebook",
    icon: "./icons/facebook.png",
  },
  {
    id: 2,
    name: "instagram",
    icon: "./icons/instagram.png",
  },
  {
    id: 3,
    name: "vk",
    icon: "./icons/vk.png",
  },
  {
    id: 4,
    name: "twitter",
    icon: "./icons/twitter.png",
  },
  {
    id: 5,
    name: "telegram",
    icon: "./icons/telegram.png",
  },
];
export const accounts: accountMenuType[] = [
  {
    id: 1,
    name: "Аккаунты ПЗРД",
  },
  {
    id: 2,
    name: "Аккаунты ПЗРД+БМ",
  },
  {
    id: 3,
    name: "KING для DOLPHIN",
  },
  {
    id: 4,
    name: "Мамка, Папка, King",
  },
  {
    id: 5,
    name: "Аккаунты c БМ",
  },
  {
    id: 6,
    name: "ФАРМ+ТОКЕН+ФП",
  },
];
export const accountsData: accountType[] = [
  {
    id: 1,
    country: "portugal",
    name: "Фарм 10-20 дней PRT ПЗРД+BM",
    stock: 50,
    price: "300",
    toAdd: 1,
  },
  {
    id: 2,
    country: "usa",
    name: "Фарм 10-20 дней USA ПЗРД+BM",
    stock: 100,
    price: "400",
    toAdd: 1,
  },
  {
    id: 3,
    country: "ukraine",
    name: "Фарм 10-20 дней UKR ПЗРД+BM",
    stock: 23,
    price: "100",
    toAdd: 1,
  },
  {
    id: 4,
    country: "canada",
    name: "Фарм 10-20 дней CND ПЗРД+BM",
    stock: 234,
    price: "50",
    toAdd: 1,
  },
  {
    id: 5,
    country: "portugal",
    name: "Фарм 10-20 дней PRT ПЗРД+BM",
    stock: 10,
    price: "250",
    toAdd: 1,
  },
];
export const MenuItems: MenuItemsType[] = [
  {
    id: 1,
    title: "На главную",
    nav: "/",
  },
  {
    id: 2,
    title: "Аккаунты",
    nav: "/account-page",
  },
  {
    id: 3,
    title: "Безопасность",
    nav: "/security",
  },
  {
    id: 4,
    title: "Политика",
    nav: "/policy",
  },
  {
    id: 5,
    title: "Публичная оферта",
    nav: "/offer",
  },
  {
    id: 6,
    title: "FAQ",
    nav: "/faq",
  },
];
