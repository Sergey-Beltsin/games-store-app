import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { UserIcon } from '@/lib/icons/user';
import {
  borderSecondary,
  iconsColor,
  white,
} from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';

interface OwnProps {}

type Props = OwnProps;

export const UserNavUser: FC<Props> = () => {
  const { t } = useTranslation('nav');

  return (
    <Container>
      <Icon>
        <UserIcon />
      </Icon>
      <Text>
        {t('user.signIn')}
      </Text>
    </Container>
  );
};

const Icon = styled.div`
  width: 30px;

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
  justify-content: center;
  align-items: center;
  order: 1;

  width: 60%;
  padding: 0 7px;

  border-right: 1px solid ${borderSecondary};
  cursor: pointer;

  &:hover ${Icon} svg path {
    fill: ${white};
  }
  
  @media (min-width: ${TABLET_WIDTH}px) {
    order: 2;

    width: 100px;

    border-color: transparent;
  }
`;

const Text = styled.span`
  display: block;
  margin-left: 15px;

  font-size: 9px;
  color: ${white};
  text-transform: uppercase;
`;
