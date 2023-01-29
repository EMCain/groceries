<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>


<div class="grid-container">
  <div class="header">
    <p>A demo of recursion and nested subcategories</p>
  </div>
  <div class="menu">Menu</div>
  <div class="left">Category List</div>  
  <div class="right">Select Items</div>
  <div class="footer">Today's Shopping List</div>
</div>
</template>

<style scoped>
.header { grid-area: header; }
.menu { grid-area: menu; }
.left { grid-area: main; }
.right { grid-area: right; }
.footer { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  width: 90vw;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
