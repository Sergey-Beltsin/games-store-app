import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { useAccountStore } from '@/features/account/store';

type WrapperProps = {
  flex?: boolean;
  bottomMargin?: boolean;
};

type TextProps = {
  leftMargin?: boolean;
};

export const Personal: FC = () => {
  const { t } = useTranslation('account');
  const {
    email,
    login,
    firstName,
    lastName,
    country,
  } = useAccountStore();

  const renderItem = (field, value) => (
    <Wrapper flex bottomMargin>
      <Text>
        {t(field)}
      </Text>
      <Text leftMargin>
        {value}
      </Text>
    </Wrapper>
  );

  return (
    <Container>
      <Title>
        {t('title')}
      </Title>
      <Wrapper bottomMargin>
        {renderItem('login', login)}
      </Wrapper>
      <Wrapper bottomMargin>
        {renderItem('email', email)}
      </Wrapper>
      <Wrapper bottomMargin>
        {renderItem('firstName', firstName)}
      </Wrapper>
      <Wrapper bottomMargin>
        {renderItem('lastName', lastName)}
      </Wrapper>
      <Wrapper>
        {renderItem('country', country)}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div<WrapperProps>`
  ${({ flex }) => flex && ('display: flex;')}

  ${({ bottomMargin }) => bottomMargin && ('margin-bottom: 10px;')}
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Text = styled.div<TextProps>`
  width: 250px;
  ${({ leftMargin }) => leftMargin && ('margin-left: 20px;')}

  font-size: 16px;
`;
