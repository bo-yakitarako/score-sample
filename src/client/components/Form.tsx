import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { post } from '../actions/dataAction';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [isValidName, setIsValidName] = useState(false);
  const [isValidScore, setIsValidScore] = useState(false);
  const [formName, setFormName] = useState('');
  const [formScore, setFormScore] = useState('');

  const handleFormName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setIsValidName(value !== '');
      setFormName(value);
    },
    [],
  );

  const handleFormScore = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setIsValidScore(!Number.isNaN(parseInt(value, 10)));
      setFormScore(value);
    },
    [],
  );

  const register = useCallback(() => {
    if (isValidName && isValidScore) {
      dispatch(post({ formName, formScore }));
      setFormScore('');
      setIsValidScore(false);
    }
  }, [isValidName, isValidScore, formName, formScore]);

  const hasErrorName = useMemo(
    () => formName !== '' && !isValidName,
    [formName, isValidName],
  );
  const hasErrorScore = useMemo(
    () => formScore !== '' && !isValidScore,
    [formScore, isValidScore],
  );

  return (
    <>
      <TextFieldWrapper>
        <TextFieldLayout
          color="primary"
          variant="outlined"
          error={hasErrorName}
          label="名前入れて〜"
          onChange={handleFormName}
          value={formName}
          helperText={hasErrorName ? '空白はダメ〜' : undefined}
        />
        <TextFieldLayout
          color="primary"
          variant="outlined"
          error={hasErrorScore}
          label="スコア入れて〜"
          onChange={handleFormScore}
          value={formScore}
          helperText={hasErrorScore ? '数字じゃないよぉ〜' : undefined}
        />
      </TextFieldWrapper>
      <ButtonWrapper>
        <StyledButton
          disabled={!isValidName || !isValidScore}
          color="primary"
          variant="contained"
          onClick={register}
        >
          送信〜
        </StyledButton>
      </ButtonWrapper>
    </>
  );
};

export { Form };

const TextFieldWrapper = styled.div`
  min-height: 82px;
`;

const TextFieldLayout = styled(TextField)`
  width: 140px;
  margin: 0 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
