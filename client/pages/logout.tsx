import { FC, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { resetAccountStore } from '@/features/account/store';

const Logout: FC = () => {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove('token');
    Cookies.remove('expiresDate');
    Cookies.remove('user');

    resetAccountStore();

    router.push('/store');
  }, []);

  return (
    <Container />
  );
};

export default Logout;

const Container = styled.div``;
