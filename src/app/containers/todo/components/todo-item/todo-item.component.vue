<template>
  <li>
    <span>{{ todo.content }}</span>
    <button @click="removeTodo(todo)">Eliminar</button>
  </li>
</template>

<script>
import TodoActionTypes from '../../action-types';
import { mapActions } from 'vuex';

export default {
  name: 'todo-item',
  props: ['todo'],
  methods: {
    removeTodo(todo) {
      this.$store.commit(TodoActionTypes.REMOVE_TODO, todo);
    }
  }
};
</script>
