import * as React from "react";

export interface Links {
  href: string;
  name: string;
  as?: string;
}

export const navLinks: Links[] = [
  { href: "/cards", name: "Карты" },
  { href: "/credits", name: "Кредиты" },
  { href: "/mortgage", name: "Ипотека" },
  { href: "/deposits", name: "Вклады" },
  { href: "/investment", name: "Инвестиции" },
  { href: "/articles", name: "Статьи" },
];

export const BreadCrumbsLinks = [
  { href: "/cards", name: "Карты" },
  { href: "/credits", name: "Кредиты" },
  { href: "/mortgage", name: "Ипотека" },
  { href: "/deposits", name: "Вклады" },
  { href: "/investment", name: "Инвестиции" },
  { href: "/articles", name: "Статьи" },
  { href: "/cards/debit_cards", name: "Дебетовые карты" },
  { href: "/cards/credit_cards", name: "Кредитные карты" },
];

export interface MainSlide {
  name: string;
  src: string;
}

export const mainSlider: MainSlide[] = [
  { name: "slide1", src: "MainPage/Main1.jpg" },
  { name: "slide2", src: "MainPage/Main2.jpg" },
];

export const BreadCrumbsArrow = () => (
  <svg
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.2571 4.67614L0.31108 7.70455V6.52273L4.87216 4.32528L4.83523 4.39915V4.21449L4.87216 4.28835L0.31108 2.09091V0.909091L6.2571 3.9375V4.67614Z"
      fill="#838CAB"
    />
  </svg>
);

export const cardsVariations: { name: string; href: string }[] = [
  {
    name: "Дебетовые",
    href: "/cards/debit_cards",
  },
  {
    name: "Кредитные",
    href: "/cards/credit_cards",
  },
];

export const CardIcon = () => (
  <svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.65685 2.00001L7.31371 7.65686L1.65685 13.3137"
      stroke="#0E284F"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
