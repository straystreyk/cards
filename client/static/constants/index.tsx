export interface NavLink {
  href: string;
  name: string;
}

export const links: NavLink[] = [
  { href: "/cards", name: "Карты" },
  { href: "/credits", name: "Кредиты" },
  { href: "/mortgage", name: "Ипотека" },
  { href: "/deposits", name: "Вклады" },
  { href: "/investment", name: "Инвестиции" },
  { href: "/articles", name: "Статьи" },
];

export interface MainSlide {
  name: string;
  src: string;
}

export const mainSlider: MainSlide[] = [
  { name: "slide1", src: "MainPage/Main1.jpg" },
  { name: "slide2", src: "MainPage/Main2.jpg" },
];
