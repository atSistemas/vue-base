<template>
  <div>
    <todo-list :todos="todos" />
    <todo-controls />
    <button type="button" @click="saveTodos(todos)">Guardar lista localmente</button>
  </div>
</template>

<script>
import TodoControlsComponent from '../todo-controls/todo-controls.component';
import TodoListComponent from '../todo-list/todo-list.component';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'todo-main',
  computed: {
    ...mapState({
      todos: state => state.todo.todos
    })
  },
  methods: {
    ...mapActions([
      'saveTodos',
      'loadTodos',
    ]),
  },
  components: {
    'todo-list': TodoListComponent,
    'todo-controls': TodoControlsComponent,
  },
  created: function() {
    this.loadTodos();
  },
};
</script>
