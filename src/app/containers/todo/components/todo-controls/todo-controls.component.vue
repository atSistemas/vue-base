<template>
  <div>
    <h2>Crear tarea</h2>
    <form @submit.prevent="addTodo(content)">
      <div>
        <label for="content">Contenido:</label>
        <input id="content" v-model="content">
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TodoActionTypes from '../../action-types';
import { uuidv4 } from './utils';

export default {
  name: 'todo-controls',
  methods: {
    addTodo(content) {
      this.$store.commit(TodoActionTypes.ADD_TODO, { id: uuidv4(), content });
    }
  },
  data () {
    return {
      content: 'heello world',
    };
  }
};
</script>
