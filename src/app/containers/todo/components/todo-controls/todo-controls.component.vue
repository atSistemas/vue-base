<template>
  <div>
    <h2>Crear tarea</h2>
    <form @submit.prevent="handleAddTodo()">
      <div>
        <label for="content">Contenido:</label>
        <input ref="content" id="content" v-model="content">
        <button type="submit">Crear</button>
      </div>
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
    ...mapActions([
      'addTodo',
    ]),
    handleAddTodo() {
      const { content } = this;
      const todo = { id: uuidv4(), content };
      this.addTodo(todo);
      this.content = '';
      this.$refs.content.focus();
    },
  },
  data () {
    return {
      content: '',
    };
  },
};
</script>
