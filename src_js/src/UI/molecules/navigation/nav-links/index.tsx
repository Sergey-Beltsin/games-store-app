import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { PC_MIDDLE_WIDTH } from '@/lib/constants/common';
import { NavLink } from '../../../atoms';

interface OwnProps {}

interface Link {
  title: string;
  href: string;
}

type NavLinksProps = OwnProps;
type Links = Link[];

export const NavLinks: FC<NavLinksProps> = () => {
  const { t } = useTranslation('common');
  const LINKS: Links = [
    {
      title: t('common:links.link01'),
      href: '/store',
    },
    {
      title: t('links.link02'),
      href: '/news',
    },
    {
      title: t('links.link03'),
      href: '/faq',
    },
    {
      title: t('links.link04'),
      href: '/help',
    },
    {
      title: t('links.link05'),
      href: '/unreal',
    },
  ];

  return (
    <Container>
      {LINKS.map((link) => (
        <NavLink href={link.href}>{link.title}</NavLink>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    flex-direction: row;
  }
`;
