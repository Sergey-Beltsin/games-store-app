import Router from 'next/router';
import getT from 'next-translate/getT';
import i18n from '../../../i18n';

interface Edition {
  title: string;
  description: string;
  fullDescription: string;
  discount: number;
  price: number;
  currentPrice: number;
  releaseDt: string;
  screenshots: string[];
  previewImg: string;
}
type Editions = Edition[];

interface Item {
  title: string;
  description: string;
  fullDescription: string;
  dev: string;
  publisher: string;
  discount: number;
  discountEnd: string;
  price: string;
  currentPrice: string;
  tags: string[];
  releaseDt: string;
  platforms: string[];
  screenshots: string[];
  previewImg: string;
  Editions?: Editions;
}
type List = () => Item[];

export const mockData: List = async () => {
  const t = await getT(Router.locale, 'common');

  return [
    {
      title: t('common:storePage.product.products.assasinsCreedValhalla.title'),
      description: t('common:storePage.product.products.assasinsCreedValhalla.descr'),
      fullDescription: t('common:storePage.product.products.assasinsCreedValhalla.fullDescr'),
      dev: 'Ubisoft Montreal',
      publisher: 'Ubisoft',
      discount: 17,
      discountEnd: '1/7/2021 at 7:00',
      price: '2,499.00',
      currentPrice: '2,074.17',
      tags: ['Action', 'RPG', 'Open World'],
      releaseDt: 'Nov 10, 2020',
      platforms: ['windows'],
      screenshots: ['https://place-hold.it/1920x1080', 'https://place-hold.it/1920x1080'],
      previewImg: 'https://place-hold.it/150x200',
    },
    {
      title: t('common:storePage.product.products.godfall.title'),
      description: t('common:storePage.product.products.godfall.descr'),
      fullDescription: t('common:storePage.product.products.godfall.fullDescr'),
      dev: 'Ubisoft Montreal',
      publisher: 'Ubisoft',
      discount: 17,
      discountEnd: '1/7/2021 at 7:00',
      price: '2,499.00',
      currentPrice: '2,074.17',
      tags: ['Action', 'RPG', 'Open World'],
      releaseDt: 'Nov 10, 2020',
      platforms: ['windows'],
      screenshots: ['https://place-hold.it/1920x1080', 'https://place-hold.it/1920x1080'],
      previewImg: 'https://place-hold.it/150x200',
    },
    {
      title: t('common:storePage.product.products.assasinsCreedRogue.title'),
      description: t('common:storePage.product.products.assasinsCreedRogue.descr'),
      fullDescription: t('common:storePage.product.products.assasinsCreedRogue.fullDescr'),
      dev: 'Ubisoft Montreal',
      publisher: 'Ubisoft',
      discount: 17,
      discountEnd: '1/7/2021 at 7:00',
      price: '2,499.00',
      currentPrice: '2,074.17',
      tags: ['Action', 'RPG', 'Open World'],
      releaseDt: 'Nov 10, 2020',
      platforms: ['windows'],
      screenshots: ['https://place-hold.it/1920x1080', 'https://place-hold.it/1920x1080'],
      previewImg: 'https://place-hold.it/150x200',
    },
    {
      title: t('common:storePage.product.products.watchDogsLegion.title'),
      description: t('common:storePage.product.products.watchDogsLegion.descr'),
      fullDescription: t('common:storePage.product.products.watchDogsLegion.fullDescr'),
      dev: 'Ubisoft Montreal',
      publisher: 'Ubisoft',
      discount: 17,
      discountEnd: '1/7/2021 at 7:00',
      price: '2,499.00',
      currentPrice: '2,074.17',
      tags: ['Action', 'RPG', 'Open World'],
      releaseDt: 'Nov 10, 2020',
      platforms: ['windows'],
      screenshots: ['https://place-hold.it/1920x1080', 'https://place-hold.it/1920x1080'],
      previewImg: 'https://place-hold.it/150x200',
    },
  ];
};
