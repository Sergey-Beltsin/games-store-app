import { FC } from 'react';
import styled from 'styled-components';
import hash from 'object-hash';

import { StoreCard } from '@/UI/atoms/store';

interface Card {
  src: string;
  title: string;
  company: string;
  discount: number;
  oldPrice: string;
  price: string;
}

type Cards = Card[];

const CARDS: Cards = [
  {
    src: 'https://place-hold.it/200x300',
    title: 'Godfall',
    company: 'Counterplay Games',
    discount: 15,
    oldPrice: '1 999,00',
    price: '1 699,15',
  },
  {
    src: 'https://place-hold.it/200x300',
    title: 'Assasin\'s Creed: Valhalla',
    company: 'Ubisoft Montreal | Ubisoft',
    discount: 67,
    oldPrice: '1 249,00',
    price: '412,17',
  },
  {
    src: 'https://place-hold.it/200x300',
    title: 'Assasin\'s Creed Rogue',
    company: 'Ubisoft',
    discount: 33,
    oldPrice: '2 499,00',
    price: '1 673,33',
  },
  {
    src: 'https://place-hold.it/200x300',
    title: 'Watch Dogs: Legion',
    company: 'Ubisoft',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
];

export const StoreCards: FC = () => (
  <Container>
    {CARDS.map((card) => (
      <StoreCard
        key={hash(card)}
        src={card.src}
        title={card.title}
        company={`${card.company}`}
        discount={card.discount}
        oldPrice={card.price}
        price={card.price}
      />
    ))}
  </Container>
);

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;

  list-style: none;
`;
