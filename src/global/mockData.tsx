interface accountMenuType {
  id: number;
  name: string;
}
interface accountType {
  id: number;
  name: string;
  stock: number;
  price: string;
}
interface LinksIconsType {
  id: number;
  name: string;
  icon: string;
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
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 50,
    price: "300.00 руб / 1 шт.",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 100,
    price: "400.00 руб / 1 шт.",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 23,
    price: "100.00 руб / 1 шт.",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 234,
    price: "50.00 руб / 1 шт.",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stock: 10,
    price: "250.00 руб / 1 шт.",
  },
];
