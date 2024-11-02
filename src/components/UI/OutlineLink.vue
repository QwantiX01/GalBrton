<script lang="ts" setup>
defineProps({ link: String, isOutlineLink: Boolean });
</script>

<template>
  <a :class="{ outline: isOutlineLink }" :href="link">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--foreground-primary);
}

.outline {
  padding: 12px;
  background-color: var(--foreground-primary);
  border-radius: 12px;
  color: var(--background-primary);
  transition: all 0.2s ease-in-out;
}

.outline:hover {
  filter: brightness(80%);
}
</style>
