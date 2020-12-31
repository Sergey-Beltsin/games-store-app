import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { primary, white } from '@/lib/constants/theme';
import { STORE_NAME } from '@/lib/constants/common';

export const UserNavTranslations: FC = () => {
  const { t } = useTranslation('nav');

  return (
    <Container>
      <Link>
        <Text>
          {t('user.asd', { name: STORE_NAME })}
        </Text>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;

  background-color: ${primary};
`;

const Link = styled.a``;

const Text = styled.span`
  font-size: 9px;
  color: ${white};
`;
