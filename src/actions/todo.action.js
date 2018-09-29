// @flow
import * as types from 'types/todo.type';

type InfoPayload = {
  id: ?number,
  name: string,
  age: number
};

type CreateAction = $Call<typeof create, InfoPayload>;
type RemoveAction = $Call<typeof remove, number>;
type UpdateAction = $Call<typeof update, InfoPayload>;

export type TodoAction = CreateAction | RemoveAction | UpdateAction;

export function create(payload: InfoPayload): CreateAction {
  return {
    type: types.CREATE,
    payload
  };
}

export function remove(payload: number): RemoveAction {
  return {
    type: types.REMOVE,
    payload
  };
}

export function update(payload: InfoPayload): UpdateAction {
  return {
    type: types.REMOVE,
    payload
  };
}
