import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { UserIcon } from '@/lib/icons/user';
import {
  borderSecondary,
  iconsColor,
  white,
} from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';
import { useAccountStore } from '@/features/account/store';
import { Dropdown } from '@/UI/molecules';

interface IDropdownItem {
  href: string;
  title: string;
}

type WrapperProps = {
  mobile?: boolean;
};

export const UserNavUser: FC = () => {
  const { t } = useTranslation('nav');
  const { login } = useAccountStore();

  const DROPDOWN_ITEMS: IDropdownItem[] = [
    {
      title: t('user.account'),
      href: '/account/personal',
    },
    {
      title: t('user.exit'),
      href: '/logout',
    },
  ];

  const renderContent = () => (
    <Container>
      <Icon>
        <UserIcon />
      </Icon>
      <Text>
        {login || t('user.signIn')}
      </Text>
    </Container>
  );

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href={login ? '' : '/id/login'}>
      <Ref>
        <Wrapper>
          {login ? (
            <Dropdown options={DROPDOWN_ITEMS}>
              {renderContent()}
            </Dropdown>
          ) : renderContent()}
        </Wrapper>
        <Wrapper mobile>
          {renderContent()}
        </Wrapper>
      </Ref>
    </Link>
  );
};

const Icon = styled.div`
  width: 30px;

  position: relative;
  top: 2px;

  & svg {
    width: 30px;
    height: 30px;

    & path {
      fill: ${iconsColor};
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  padding: 0 7px;

  border-right: 1px solid ${borderSecondary};
  cursor: pointer;
  
  @media (min-width: ${TABLET_WIDTH}px) {
    border-color: transparent;
  }
`;

const Text = styled.span`
  display: block;
  margin-left: 10px;

  font-size: 9px;
  color: ${white};
  text-transform: uppercase;
`;

const Ref = styled.a`
  display: flex;
  order: 1;

  width: 60%;

  &:hover ${Icon} svg path {
    fill: ${white};
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    order: 2;

    width: 175px;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;

  width: 100%;

  & .dropdown__content {
    left: -5px;
  }

  @media (${({ mobile }) => (mobile ? 'min' : 'max')}-width: ${TABLET_WIDTH}px) {
    display: none !important;
  }
`;
