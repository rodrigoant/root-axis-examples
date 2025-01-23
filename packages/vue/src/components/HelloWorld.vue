<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ra-button dark type="primary" @click="count++"
      >count is {{ count }}</ra-button
    >

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div class="accordions">
    <ra-accordion dark>
      <span slot="summary">Is it accessible?</span>
      Yes.
    </ra-accordion>
    <ra-accordion dark>
      <span slot="summary">Is it styled?</span>
      Yes. It comes with default styles that matches the other components
      aesthetic.
    </ra-accordion>
    <ra-accordion dark>
      <span slot="summary">Is it animated?</span>
      Yes. It&lsquo;s animated by default
    </ra-accordion>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
