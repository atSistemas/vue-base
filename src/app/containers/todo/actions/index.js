import TodoActionTypes from '../action-types';

export const actions = {
  saveTodos(state, todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },

  loadTodos({ commit }) {
    const todos = localStorage.getItem('todos');
    if (!todos || !todos.length) return;
    commit(TodoActionTypes.LOAD_TODOS, JSON.parse(todos));
  }
};
