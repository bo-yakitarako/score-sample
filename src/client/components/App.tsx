import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { StylesProvider, Typography } from '@material-ui/core';
import { dataAction } from '../actions/dataAction';
import { DataTable } from './DataTable';
import { Form } from './Form';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataAction());
  }, []);

  return (
    <StylesProvider injectFirst>
      <Wrapper>
        <TitleWrapper>
          <Title>スコア記入してぇ〜見るやつぅ〜</Title>
        </TitleWrapper>
        <Form />
        <TitleWrapper>
          <Title>いままでのきろく〜</Title>
        </TitleWrapper>
        <DataTable />
      </Wrapper>
    </StylesProvider>
  );
};

export { App };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  padding: 20px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
`;
