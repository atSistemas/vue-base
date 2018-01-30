import TodoActionTypes from '../action-types';

export const actions = {
  addTodo({ commit }, todo) {
    commit(TodoActionTypes.ADD_TODO, todo);
  },

  saveTodos(state, todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },

  loadTodos({ commit, state }) {
    if (state.todos && state.todos.length) return;
    const todos = localStorage.getItem('todos');
    if (!todos || !todos.length) return;
    commit(TodoActionTypes.LOAD_TODOS, JSON.parse(todos));
  },

  clear({ commit }) {
    commit(TodoActionTypes.CLEAR);
  }
};
