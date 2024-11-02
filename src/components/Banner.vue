<script lang="ts" setup>
import OutlineLink from "./UI/OutlineLink.vue";
import { computed } from "vue";

const props = defineProps({
  link: String,
  image: String,
  title: String,
  description: String,
  linkText: String,
});

const bgStyle = computed(() => {
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)), url(${props.image})`,
  };
});
</script>

<template>
  <div :style="bgStyle" class="background">
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="description">
      {{ description }}
    </p>
    <OutlineLink :is-outline-link="true" :link="link"
      >{{ linkText }}
    </OutlineLink>
  </div>
</template>

<style lang="css" scoped>
.title {
  font-size: 3rem;
  font-weight: bold;
}

.background {
  display: flex;
  box-sizing: border-box;
  padding: 40px 56px;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  background-position: center;
  background-size: cover;
  border-radius: 18px;
  aspect-ratio: 2/1;
  filter: saturate(2);
  gap: 16px;
}
</style>
