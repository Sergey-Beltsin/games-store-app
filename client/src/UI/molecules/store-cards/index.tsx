import { FC } from 'react';
import styled from 'styled-components';
import hash from 'object-hash';

import { StoreCard } from '@/UI/atoms/store';
import { CARDS } from '@/lib/mock/mock-data';

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
