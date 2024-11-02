<script lang="ts" setup>
defineProps({ title: String, description: String });
</script>

<template>
  <div class="card">
    <slot></slot>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  padding: 32px;
  flex: 1;
  text-align: center;
  background-color: var(--background-secondary);
  border-radius: 8px;
}

.title {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
}

.description {
}
</style>
