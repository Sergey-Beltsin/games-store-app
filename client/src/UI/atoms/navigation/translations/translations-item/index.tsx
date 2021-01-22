import { FC } from 'react';
import styled from 'styled-components';

import {
  border,
  iconsColor,
  secondary,
  white,
} from '@/lib/constants/theme';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface OwnProps {
  lang: string;
  link: string;
}

type TranslationsItemProps = OwnProps;

export const TranslationsItem: FC<TranslationsItemProps> = ({
  lang,
  link,
}) => {
  const path = useRouter().pathname;

  return (
    <StyledLink
      href={path}
      locale={link}
    >
      <Ref className="nav-close-btn">
        <Container className="nav-close-btn">
          <Text className="nav-close-btn">
            {lang}
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
