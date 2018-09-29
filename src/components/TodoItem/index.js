// @flow
import React from 'react';
import { Item, Id, Name, Age } from './styled';

type Props = {
  +idx: number,
  +name: string,
  +age: number
};

const TodoItem = ({ idx, name, age }: Props) => {
  return (
    <Item>
      <Id>{idx}</Id>
      <Name>{name}</Name>
      <Age>{age}</Age>
    </Item>
  );
};

export default TodoItem;
