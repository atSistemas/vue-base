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
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }

</style>

<script>
import TodoItemComponent from '../todo-item/todo-item.component';
import TodoActionTypes from '../../action-types';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'todo-list',
  props: ['todos'],
  components: {
    'todo-item': TodoItemComponent,
  }
};
</script>
