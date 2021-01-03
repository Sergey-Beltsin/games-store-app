import { FC } from 'react';
import styled from 'styled-components';
import { greyText, primary, text01 } from '@/lib/constants/theme';
import Link from 'next/link';
import { TABLET_WIDTH } from '@/lib/constants/common';
import { StoreImage } from '../image';

interface OwnProps {
  src: string;
  title: string;
  company: string;
  discount: number;
  oldPrice?: string;
  price: string;
}
interface WrapperOwnProps {
  flex?: boolean;
  flexCenter?: boolean;
  flexColumn?: boolean;
  alignCenter?: boolean;
  topMargin?: boolean;
}

type StoreCardProps = OwnProps;
type WrapperProps = WrapperOwnProps;

export const StoreCard: FC<StoreCardProps> = ({
  src,
  title,
  company,
  discount,
  oldPrice,
  price,
}) => (
  <Container>
    <StyledLink href={`/store/product/${title
      .toLowerCase()
      .split('')
      .filter((item) => item !== '\'' && item !== ':')
      .join('')
      .split(' ')
      .join('-')}/home`}
    >
      <Ref>
        <Wrapper
          flex
          flexCenter
          alignCenter
        >
          <StoreImage
            src={src}
          />
        </Wrapper>
        <Wrapper
          flex
          flexColumn
          topMargin
        >
          <Title>
            {title}
          </Title>
          <Company>
            {company}
          </Company>
          <Wrapper flex alignCenter>
            <Discount>
              -
              {discount}
              %
            </Discount>
            {oldPrice && (
            <OldPrice>
              {oldPrice}
            </OldPrice>
            )}
            <Price>
              {price}
            </Price>
          </Wrapper>
        </Wrapper>
      </Ref>
    </StyledLink>
  </Container>
);

const Container = styled.li`
  width: calc(50% - 8px);
  margin-bottom: 15px;

  cursor: pointer;

  &:nth-child(2n) {
    margin-left: 15px;
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    width: calc(25% - 12px);
    margin-left: 15px;

    &:nth-child(4n + 1) {
      margin-left: 0;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;

const StyledLink = styled(Link)``;

const Ref = styled.a`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div<WrapperProps>`
  ${({
    flex,
    flexCenter,
    flexColumn,
    alignCenter,
  }) => flex && (`
    display: flex;
    ${alignCenter ? 'align-items: center;' : ''}
    ${flexColumn ? 'flex-direction: column;' : ''}
    ${flexCenter ? 'justify-content: center;' : ''}
    flex-grow: 1;
    flex-shrink: 0;
    flex-wrap: wrap;
  `)}
  ${({ topMargin }) => topMargin && ('margin-top: 25px;')}
`;

const Title = styled.span`
  display: block;

  width: 100%;

  overflow: hidden;

  font-size: 14px;
  color: ${text01};
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 0.2px;
  line-height: 1.4;
`;

const Company = styled(Title)`
  margin-top: 0;
  margin-bottom: 15px;

  color: ${greyText};
`;

const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 25px;
  margin-right: 8px;

  background-color: ${primary};
  border-radius: 4px;
  overflow: hidden;

  font-weight: 500;
  font-size: 11px;
  color: ${text01};
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.6;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const OldPrice = styled.s`
  display: block;
  margin-right: 8px;

  overflow: hidden;
  opacity: 0.5;

  font-size: 16px;
  color: ${text01};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled.span`
  display: block;

  overflow: hidden;

  font-size: 16px;
  color: ${text01};
  white-space: nowrap;
  text-overflow: ellipsis;
`;
