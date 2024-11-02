<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  titleSize: {
    default: 32,
  },
  titleBold: {
    default: true,
  },
});

const titleStyles = computed(() => {
  return {
    fontSize: `${props.titleSize}px`,
    fontWeight: props.titleBold ? "bold" : "normal",
  };
});
</script>

<template>
  <div>
    <h2 :style="titleStyles" class="title">
      {{ title }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 8px;
  font-weight: bold;
  text-align: center;
}

.description {
  margin-bottom: 48px;
  text-align: center;
}
</style>
