import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { TranslationsTopBar } from '@/UI/atoms/navigation/translations';
import { TranslationsItem } from '@/UI/atoms/navigation/translations/translations-item';
import { LOCALES } from '@/lib/mock/mock-data';

type Props = {
  onClose: () => void;
};

export const Translations: FC<Props> = ({ onClose }) => {
  const { locale } = useRouter();

  return (
    <Container className="nav-close-btn">
      <TranslationsTopBar
        lang={LOCALES.find((item) => item.locale === locale).title}
        onClose={onClose}
      />
      {LOCALES.map((item) => item.locale !== locale && (
        <TranslationsItem
          title={item.title}
          locale={item.locale}
        />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;

  background-color: ${secondary};
  list-style: none;
`;
