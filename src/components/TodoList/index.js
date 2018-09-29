// @flow
import React from 'react';
import TodoItem from 'components/TodoItem';
import { List } from './styled';
import type { InfoItem } from 'models/todo.model';

type Props = {
  info: Array<InfoItem>
};

const TodoList = ({ info }: Props) => {
  const items = info.map((item, idx) => (
    <TodoItem key={item.id} idx={idx} name={item.name} age={item.age} />
  ));
  return <List>{items}</List>;
};

export default TodoList;
