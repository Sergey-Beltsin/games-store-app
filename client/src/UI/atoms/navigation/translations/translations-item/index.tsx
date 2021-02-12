import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  border,
  iconsColor,
  secondary,
  white,
} from '@/lib/constants/theme';

type TranslationsItemProps = {
  title: string;
  locale: string;
};

export const TranslationsItem: FC<TranslationsItemProps> = ({
  title,
  locale,
}) => {
  const path = useRouter().pathname;

  return (
    <StyledLink
      href={path}
      locale={locale}
    >
      <Ref className="nav-close-btn">
        <Container className="nav-close-btn">
          <Text className="nav-close-btn">
            {title}
          </Text>
        </Container>
      </Ref>
    </StyledLink>
  );
};

const Text = styled.span`
  font-size: 11px;
  color: ${iconsColor};
  letter-spacing: 1.3px;
  text-transform: uppercase;
`;

const Container = styled.li`
  display: flex;
  align-items: center;

  height: 42px;
  padding: 0 28px 0 28px;
  
  border-bottom: 1px solid ${border};
  cursor: pointer;

  background-color: ${secondary};

  &:hover ${Text} {
    color: ${white};
  }
`;

const StyledLink = styled(Link)``;

const Ref = styled.a``;
