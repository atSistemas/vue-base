/* eslint-disable no-param-reassign */
import TodoActionTypes from '../action-types';

export const mutations = {
  [TodoActionTypes.ADD_TODO](state, todo) {
    state.todos.push(todo);
  },
  [TodoActionTypes.REMOVE_TODO](state, todo) {
    const todoIndex = state.todos.findIndex(t => t.id === todo.id);
    state.todos.splice(todoIndex, 1);
  },
  [TodoActionTypes.LOAD_TODOS](state, todos) {
    state.todos.push(...todos);
  },
  [TodoActionTypes.CLEAR](state) {
    state.todos = [];
  },
};
