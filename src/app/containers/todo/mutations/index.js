import TodoActionTypes from '../action-types';

export const mutations = {
  [TodoActionTypes.ADD_TODO](state, todo) {
    state.todos.push(todo);
  },
  [TodoActionTypes.LOAD_TODOS](state, todos) {
    state.todos.push(...todos);
  },
};
