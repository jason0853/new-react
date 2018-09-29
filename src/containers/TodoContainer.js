// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import type { StoreState } from 'models/store.model';
import type { InfoItem } from 'models/todo.model';

type Props = {
  +info: Array<InfoItem>
};

type State = {
  +name: string,
  +age: string
};

@connect(({ todo }: StoreState) => ({
  info: todo.info
}))
@autobind
class TodoContainer extends Component<Props, State> {
  static defaultProps = {
    info: []
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

  handleCreate(e: SyntheticEvent<HTMLButtonElement>) {}

  render() {
    const { handleChange } = this;
    const { name, age } = this.state;
    const { info } = this.props;

    return (
      <Fragment>
        <TodoForm name={name} age={age} onChange={handleChange} />
        <TodoList info={info} />
      </Fragment>
    );
  }
}

export default TodoContainer;
