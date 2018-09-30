// @flow
import styled from 'styled-components';

const info = styled.div`
  font-size: 2rem;
`;

export const Item = styled.li`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid pink;
`;

export const Id = styled.div`
  font-size: 1.2rem;
`;

export const Name = styled(info)``;

export const Age = styled(info)``;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: red;
  border: none;
  color: white;
`;
