import { STORE_NAME } from '@/lib/constants/common';

interface ILoginMethod {
  logo: string;
  title: string;
  loginHref: string;
  registerHref: string;
}

export const LOGIN_METHODS: ILoginMethod[] = [
  {
    logo: 'Logo',
    title: STORE_NAME,
    loginHref: 'login/epic',
    registerHref: 'register/epic',
  },
];

interface TranslationItem {
  title: string;
  locale: string;
}

type TranslationsList = TranslationItem[];

export const LOCALES: TranslationsList = [
  {
    title: 'English',
    locale: 'en',
  },
  {
    title: 'Русский',
    locale: 'ru',
  },
];

interface Card {
  src: string;
  title: string;
  company: string;
  discount: number;
  oldPrice: string;
  price: string;
  descr: string;
}

type Cards = Card[];

export const CARDS: Cards = [
  {
    src: 'https://cdn1.epicgames.com/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/offer/EGS_Godfall_CounterplayGames_S2-1200x1600-2ec1c619129c3ac76a6229397d71bddf.jpg?h=854&resize=1&w=640',
    title: 'godfall.title',
    company: 'Counterplay Games',
    descr: 'godfall.descr',
    discount: 15,
    oldPrice: '1 999,00',
    price: '1 699,15',
  },
  {
    src: 'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=854&resize=1&w=640',
    title: 'assasinsCreedValhalla.title',
    company: 'Ubisoft Montreal | Ubisoft',
    descr: 'assasinsCreedValhalla.descr',
    discount: 67,
    oldPrice: '1 249,00',
    price: '412,17',
  },
  {
    src: 'https://cdn1.epicgames.com/epic/offer/ACRG_Store_Portrait_1280x1420-1280x1420-5cba5dab889312a3ee8e0cb414f1ebaa.png?h=854&resize=1&w=640',
    title: 'assasinsCreedRogue.title',
    company: 'Ubisoft',
    descr: 'assasinsCreedRogue.descr',
    discount: 33,
    oldPrice: '2 499,00',
    price: '1 673,33',
  },
  {
    src: 'https://cdn1.epicgames.com/0a84818055e740a7be21a2e5b6162703/offer/WatchDogs_Legion_Store_Portrait_1200x1600-1200x1600-a6b2d4cce489aeeb87bad4a6db168bed.jpg?h=854&resize=1&w=640',
    title: 'watchDogsLegion.title',
    company: 'Ubisoft',
    descr: 'watchDogsLegion.descr',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
];
