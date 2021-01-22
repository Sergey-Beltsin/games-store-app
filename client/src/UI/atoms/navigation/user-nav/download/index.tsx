import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { primary, whiteSecondary } from '@/lib/constants/theme';
import { STORE_NAME, TABLET_WIDTH } from '@/lib/constants/common';

export const UserNavDownload: FC = () => {
  const { t } = useTranslation('nav');

  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link href="">
        <Text>
          {t('user.download', { name: STORE_NAME })}
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
  opacity: 0.9;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    height: 100%;
    width: 135px;
  }
`;

const Link = styled.a``;

const Text = styled.span`
  font-size: 9px;
  color: ${whiteSecondary};
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
