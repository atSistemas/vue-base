<template>
  <div>
    <h2>Lista de tareas</h2>
    <ul v-if="todos.length">
      <todo-item
        v-for="todo of todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <p v-else>
      Aún no has añadido una tarea a la lista
    </p>
    <button type="button" @click="clear()">Limpiar lista</button>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

<script>
import TodoItemComponent from '../todo-item/todo-item.component';
import TodoActionTypes from '../../action-types';
import { mapActions } from 'vuex';

export default {
  name: 'todo-list',
  props: ['todos'],
  components: {
    'todo-item': TodoItemComponent,
  },
  methods: {
    ...mapActions([
      'clear',
    ]),
  }
};
</script>
