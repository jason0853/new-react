// @flow
import React from 'react';
import TodoItem from 'components/TodoItem';
import { List } from './styled';
import { type InfoItem } from 'models/todo.model';

type Props = {
  info: Array<InfoItem>,
  onRemove(id: number | string): any
};

const TodoList = ({ info, onRemove }: Props) => {
  const items = info.map((item, idx) => (
    <TodoItem
      key={item.id}
      idx={idx}
      id={item.id}
      name={item.name}
      age={item.age}
      onRemove={onRemove}
    />
  ));
  return <List>{items}</List>;
};

export default TodoList;
