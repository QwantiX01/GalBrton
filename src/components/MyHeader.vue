<script lang="ts" setup>
import OutlineLink from "./UI/OutlineLink.vue";
</script>

<template>
  <header class="header">
    <h1 class="logo">ГалБетон</h1>
    <div class="links">
      <outline-link :is-outline-link="false" link="/home">Головна</outline-link>
      <outline-link :is-outline-link="false" link="/products">Продукти</outline-link>
      <outline-link :is-outline-link="false" link="/about">Про нас</outline-link>
      <outline-link :is-outline-link="false" link="/contact">З'єднатися з нами</outline-link>
      <outline-link :is-outline-link="true" link="/auth">Авторизуватись</outline-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  padding: 22px 40px;
  justify-content: space-between;
  border: var(--background-secondary) 2px solid;
}

.logo {
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 2.25rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 36px;
}
</style>