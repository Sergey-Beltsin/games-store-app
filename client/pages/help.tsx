import useTranslation from 'next-translate/useTranslation';

import { STORE_NAME } from '@/lib/constants/common';

const Help = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      {t('title')}
      {t('store', { name: STORE_NAME })}
    </div>
  );
};

export default Help;
