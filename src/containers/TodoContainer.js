// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import { type StoreState } from 'models/store.model';
import { type InfoItem } from 'models/todo.model';
import {
  create,
  remove,
  update,
  type InfoPayload,
  type TodoAction
} from 'actions/todo.action';

type Props = {
  +info: Array<InfoItem>,
  create(payload: InfoPayload): TodoAction,
  remove(id: number | string): TodoAction
};

type State = {
  name: string,
  age: string
};

@connect(
  ({ todo }: StoreState) => ({
    info: todo.info
  }),
  { create, remove, update }
)
@autobind
class TodoContainer extends Component<Props, State> {
  static defaultProps = {
    info: [],
    create: () => {},
    remove: () => {},
    update: () => {}
  };

  state: State = {
    name: '',
    age: ''
  };

  handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    });
  }

  handleCreate(e: SyntheticEvent<*>) {
    const { name, age } = this.state;
    const ageOfNumber = Number(age);
    e.preventDefault();
    this.props.create({ name, age: ageOfNumber });
    this.setState({
      name: '',
      age: ''
    });
  }

  handleRemove(id: number | string) {
    this.props.remove(id);
  }

  handleUpdate(paylaod: InfoPayload) {}

  render() {
    const { handleChange, handleCreate, handleRemove } = this;
    const { name, age } = this.state;
    const { info } = this.props;

    return (
      <Fragment>
        <TodoForm
          name={name}
          age={age}
          onChange={handleChange}
          onCreate={handleCreate}
        />
        <TodoList info={info} onRemove={handleRemove} />
      </Fragment>
    );
  }
}

export default TodoContainer;
