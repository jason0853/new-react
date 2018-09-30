// @flow
import React from 'react';
import { Form, Input, Button } from './styled';

type Props = {
  +name: string,
  +age: string,
  onChange(e: any): void,
  onCreate(e: any): void
};

const TodoForm = ({ name, age, onChange, onCreate }: Props) => {
  return (
    <Form onSubmit={onCreate}>
      <Input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Enter your name"
      />
      <Input
        name="age"
        value={age}
        onChange={onChange}
        placeholder="Enter your age"
      />
      <Button>Create</Button>
    </Form>
  );
};

TodoForm.defaultProps = {
  onChange: () => null
};

export default TodoForm;
