// @flow
export type InfoItem = {
  +id: number,
  +name: string,
  +age: number
};

export type TodoState = {
  +info: Array<InfoItem>
};

const todoState = {
  info: [{ id: 1, name: 'Jason', age: 33 }, { id: 2, name: 'Jeff', age: 34 }]
};

export default todoState;
