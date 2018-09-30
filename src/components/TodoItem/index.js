// @flow
import React from 'react';
import { Item, Id, Name, Age, Button } from './styled';

type Props = {
  +id: string | number,
  +idx: number,
  +name: string,
  +age: number,
  onRemove(id: number | string): any
};

const TodoItem = ({ idx, id, name, age, onRemove }: Props) => {
  return (
    <Item>
      <Id>{idx}</Id>
      <Name>{name}</Name>
      <Age>{age}</Age>
      <Button onClick={e => onRemove(id)}>X</Button>
    </Item>
  );
};

export default TodoItem;
