import React from 'react';
import styled from 'styled-components';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import dayjs from 'dayjs';
import { useSelector } from '../hooks/useSelector';
import { media } from '../modules/style';

const DataTable: React.FC = () => {
  const datas = useSelector(({ datas }) => datas);
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>プレイヤー</TableCell>
              <TableCell>スコア</TableCell>
              <TableCell>日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(({ userName, score, createdAt }) => (
              <TableRow key={`${userName}-${createdAt}`}>
                <TableCell>{userName}</TableCell>
                <TableCell>{score}</TableCell>
                <TableCell>{dayjs(createdAt).format('M/DD H:mm')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export { DataTable };

const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    width: 720px;
  `}
`;
