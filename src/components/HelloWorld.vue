<script lang="ts">
import { defineComponent } from 'vue';

interface groceryItem {
  name: string
  id: string
  parent_id?: string  // optional
  order: number
}

export default defineComponent({
  data: () => ({
    flatItems: [],
    flatItemsJSON: '[]',
    flatHasError: false
  }),
  methods: {
    setFlatItemsJSON() {
      this.flatItemsJSON = JSON.stringify(this.flatItems, null, 2);
    },
    setFlatItemsArray() {
      try {
        this.flatItems = JSON.parse(this.flatItemsJSON);
        this.flatHasError = false;
      }
      catch (err) {
        this.flatHasError = true;
      }
    }

  },
  watch: {
    flatItemsJSON() {
      this.setFlatItemsArray();
    }
  }
})
</script>

<template>
<div class="grid-container">
  <div class="header">
    <p>A demo of recursion and nested subcategories</p>
  </div>
  <div class="menu">
    <textarea
      :class="{'has-error': flatHasError}"
      v-model="flatItemsJSON"
    />
    <p v-if="flatHasError" class="error-text">Please ensure valid JSON syntax</p>

  </div>
  <div class="left">
    <p>Configure Items</p>
    <p>There are {{ flatItems.length }} items.</p>
  </div>  
  <div class="right">Select Items</div>
  <div class="footer">Today's Shopping List</div>
</div>
</template>

<style scoped>
/* form elements */ 
.error-text {
  font-size: 10px;
  font-style: italic;
  color: #870000
}
textarea.has-error {
  outline: 1px solid red;
}


/* grid */
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
