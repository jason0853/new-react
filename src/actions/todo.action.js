// @flow
import * as types from 'types/todo.type';

export type InfoPayload = {
  id?: number | string,
  name: string,
  age: number
};

export type CreateAction = $Call<typeof create, InfoPayload>;
export type RemoveAction = $Call<typeof remove, string>;
export type UpdateAction = $Call<typeof update, InfoPayload>;

export type TodoAction = CreateAction | RemoveAction | UpdateAction;

export function create(payload: InfoPayload): CreateAction {
  return {
    type: types.CREATE,
    payload
  };
}

export function remove(payload: string): RemoveAction {
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
