<script lang="ts" setup>
import { ref, computed } from "vue";
import { CircleArrowLeft, CircleArrowRight } from "lucide-vue-next";

interface ISlide {
  image: string;
  title: string;
  description: string;
}

const props = defineProps<{ slides: ISlide[] }>();

const slideIndex = ref(0);

const slide = computed(() => props.slides[slideIndex.value]);

const nextSlide = () => {
  slideIndex.value = (slideIndex.value + 1) % props.slides.length;
};

const previousSlide = () => {
  slideIndex.value =
    slideIndex.value - 1 < 0 ? props.slides.length - 1 : slideIndex.value - 1;
};
</script>

<template>
  <div class="slider">
    <div class="content">
      <div class="image-slide">
        <button class="button left" @click="previousSlide">
          <circle-arrow-left />
        </button>
        <img :src="slide.image" alt="slideImage" />
        <button class="button right" @click="nextSlide">
          <circle-arrow-right />
        </button>
      </div>
      <div class="text-content">
        <p class="title">{{ slide.title }}</p>
        <div class="description">
          {{ slide.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
}

.content {
  display: flex;
  width: 100%;
  gap: 24px;
}

.image-slide {
  position: relative;
  display: flex;
  flex: 3;
  align-items: center;
}

.button {
  position: absolute;
  background: none;
  border: none;
  aspect-ratio: 1/1;
}

.button.left {
  left: 12px;
}

.button.right {
  right: 12px;
}

.image-slide img {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 16/9;
}

.text-content {
  flex: 2;
}

.title {
  margin-bottom: 12px;
  font-size: 56px;
  font-weight: bold;
}

.description {
  padding: 32px;
  font-size: 18px;
  background-color: var(--background-secondary);
  border-radius: 12px;
}
</style>
