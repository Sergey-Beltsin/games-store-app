import { FC } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import { TranslateIcon } from '@/lib/icons/user';
import { iconsColor, white } from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';
import { Dropdown } from '@/UI/molecules/dropdown';
import { LOCALES } from '@/lib/mock/mock-data';

type Props = {
  onClick: (isOpen: boolean) => void;
};

type WrapperProps = {
  mobile?: boolean;
};

export const UserNavTranslations: FC<Props> = ({ onClick }) => {
  const { lang } = useTranslation('nav');
  const { locale } = useRouter();

  return (
    <Container
      onClick={() => onClick(true)}
      onMouseEnter={() => typeof window !== 'undefined'
        && window.innerWidth >= TABLET_WIDTH && onClick(true)}
      onMouseLeave={() => typeof window !== 'undefined'
        && window.innerWidth >= TABLET_WIDTH && onClick(false)}
    >
      <Wrapper>
        <Dropdown options={LOCALES} filterMethod={(item) => item.locale !== locale}>
          <Icon title={lang}>
            <TranslateIcon />
          </Icon>
        </Dropdown>
      </Wrapper>
      <Wrapper mobile>
        <Icon title={lang}>
          <TranslateIcon />
        </Icon>
      </Wrapper>
    </Container>
  );
};

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

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

const Wrapper = styled.div<WrapperProps>`
  display: flex;

  width: 100%;

  @media (${({ mobile }) => (mobile ? 'min' : 'max')}-width: ${TABLET_WIDTH}px) {
    display: none !important;
  }
`;
