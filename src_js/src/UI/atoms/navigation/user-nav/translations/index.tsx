import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import { TranslateIcon } from '@/lib/icons/user';
import { iconsColor, white } from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';

interface OwnProps {
  onClick: (isOpen: boolean) => void;
}

type Props = OwnProps;

export const UserNavTranslations: FC<Props> = ({ onClick }) => {
  const { lang } = useTranslation('common');

  return (
    <Container
      onClick={() => onClick(true)}
      onMouseEnter={() => typeof window !== 'undefined'
        && window.innerWidth >= TABLET_WIDTH && onClick(true)}
      onMouseLeave={() => typeof window !== 'undefined'
        && window.innerWidth >= TABLET_WIDTH && onClick(false)}
    >
      <Icon title={lang}>
        <TranslateIcon />
      </Icon>
    </Container>
  );
};

const Icon = styled.div`
  width: 30px;

  position: relative;
  top: 3px;

  & svg {
    width: 30px;
    height: 30px;

    & path,
    & circle {
      fill: ${iconsColor};
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;

  width: 40%;

  cursor: pointer;

  &:hover ${Icon} svg path,
  &:hover ${Icon} svg circle {
    fill: ${white}
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    order: 1;

    width: 50px;
  }
`;
