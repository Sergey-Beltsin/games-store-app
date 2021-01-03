import { FC } from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { useRouter } from 'next/router';
import { generateUUID } from '@/lib/utils/generate-uuid';
import {
  TranslationsItem,
  TranslationsTopBar,
} from '../../../atoms/navigation';

interface OwnProps {
  onClose: () => void;
}
interface TranslationItem {
  title: string;
  abbr: string;
}

type TranslationsProps = OwnProps;
type TranslationsList = TranslationItem[];

const LOCALES: TranslationsList = [
  {
    title: 'English',
    abbr: 'en',
  },
  {
    title: 'Русский',
    abbr: 'ru',
  },
];

export const Translations: FC<TranslationsProps> = ({ onClose }) => {
  const { locale } = useRouter();

  return (
    <Container className="nav-close-btn">
      <TranslationsTopBar
        lang={LOCALES.find((item) => item.abbr === locale).title}
        onClose={onClose}
      />
      {LOCALES.map((item) => item.abbr !== locale && (
        <TranslationsItem
          lang={item.title}
          link={item.abbr}
          key={generateUUID()}
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
