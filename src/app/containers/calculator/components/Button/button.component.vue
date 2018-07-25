<template>
  <button
    :class="{
      'Button': type === 'number',
      'ButtonZero': type === 'zero',
      'ButtonOperate': type === 'operator',
    }"
    class="ButtonCommon"
    @click="clickHandler">
    {{ value }}
  </button>
</template>

<style scoped src="./button.component.css"></style>
<script src="./button.component.js"></script>
