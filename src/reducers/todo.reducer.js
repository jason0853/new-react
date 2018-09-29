// @flow
import uuid from 'uuid/v4';
import * as types from 'types/todo.type';
import type { TodoState } from 'models/todo.model';
import todoState from 'models/todo.model';
import type { TodoAction } from 'actions/todo.action';

export default (
  state: TodoState = todoState,
  { type, payload }: TodoAction
): TodoState => {
  switch (type) {
  case types.CREATE:
    return {
      ...state,
      info: [...state.info.concat({ id: uuid(), ...payload })]
    };
  case types.REMOVE:
    return {
      ...state,
      info: [...state.info.filter(data => data.id !== payload.id)]
    };
  case types.UPDATE:
    return {
      ...state,
      info: [
        ...state.info.map(
          data => (data.id === payload.id ? { ...data, ...payload } : data)
        )
      ]
    };
  default:
    return state;
  }
};
