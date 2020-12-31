import { FC } from 'react';
import styled from 'styled-components';
import { PC_MIDDLE_WIDTH, TABLET_WIDTH } from '@/lib/constants/common';
import { StoreCard } from '../../atoms';

interface OwnProps {}
interface Card {
  src: string;
  href: string;
  title: string;
  company: string;
  discount: number;
  oldPrice: string;
  price: string;
}

type Props = OwnProps;
type Cards = Card[];

const CARDS: Cards = [
  {
    src: 'https://place-hold.it/500x500',
    href: '/',
    title: 'Godfall',
    company: 'Counterplay Games',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
  {
    src: 'https://place-hold.it/500x500',
    href: '/',
    title: 'Assasin\'s Creed: Valhalla',
    company: 'Ubisoft Montreal | Ubisoft',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
  {
    src: 'https://place-hold.it/500x500',
    href: '/',
    title: 'Assasin\'s Creed Rogue',
    company: 'Ubisoft',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
  {
    src: 'https://place-hold.it/500x500',
    href: '/',
    title: 'Watch Dogs: Legion',
    company: 'Ubisoft',
    discount: 17,
    oldPrice: '2 499,00',
    price: '2 074,17',
  },
];

export const StoreCards: FC<Props> = (props) => (
  <Container>
    {CARDS.map((card) => (
      <StoreCard
        src={card.src}
        href={card.href}
        title={card.title}
        company={card.company}
        discount={card.discount}
        oldPrice={card.oldPrice}
        price={card.price}
      />
    ))}
  </Container>
);

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: ${TABLET_WIDTH}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
