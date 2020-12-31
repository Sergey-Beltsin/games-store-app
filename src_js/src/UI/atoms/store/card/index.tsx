import { FC } from 'react';
import styled from 'styled-components';
import { greyText, primary, text01 } from '@/lib/constants/theme';
import Link from 'next/link';
import { StoreImage } from '../image';

interface OwnProps {
  src: string;
  href: string;
  title: string;
  company: string;
  discount: number;
  oldPrice?: string;
  price: string;
}
interface WrapperOwnProps {
  flex?: boolean;
  flexCenter?: boolean;
}

type StoreCardProps = OwnProps;
type WrapperProps = WrapperOwnProps;

export const StoreCard: FC<StoreCardProps> = ({
  src,
  href,
  title,
  company,
  discount,
  oldPrice,
  price,
}) => (
  <Container>
    <StyledLink href={href}>
      <Ref>
        <Wrapper flex flexCenter>
          <StoreImage
            src={src}
          />
        </Wrapper>
        <Wrapper>
          <Title>
            {title}
          </Title>
          <Company>
            {company}
          </Company>
          <Wrapper flex>
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

const Container = styled.li``;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const Ref = styled.a``;

const Wrapper = styled.div<WrapperProps>`
  ${({ flex, flexCenter }) => flex && (`
    display: flex;
    align-items: center;
    ${flexCenter ? 'justify-content: center;' : ''}
  `)}
`;

const Title = styled.span`
  display: block;
  margin-top: 25px;

  font-size: 14px;
  color: ${text01};
  letter-spacing: 0.2px;
  line-height: 1.4;
`;

const Company = styled(Title)`
  margin-top: 0;
  margin-bottom: 15px;

  color: ${greyText};
`;

const Discount = styled.div`
  padding: 3px 6px;
  margin-right: 8px;

  background-color: ${primary};
  border-radius: 4px;

  font-weight: 500;
  color: ${text01};
  line-height: 1.6;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const OldPrice = styled.s`
  margin-right: 8px;

  opacity: 0.5;

  font-size: 16px;
  color: ${text01};
`;

const Price = styled.span`
  font-size: 16px;
  color: ${text01};
`;
