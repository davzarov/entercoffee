<script setup>
import gsap from "gsap";
import { navData } from "../../../constants/data";
import { navigateTo } from "../../../utils/navigateTo";

const onBeforeEnter = (el) => {
  el.style.opacity = 0;
};

const onEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.index * 0.15,
    onComplete: done,
  });
};

const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done,
  });
};
</script>

<template>
  <nav class="h-full w-full">
    <TransitionGroup
      tag="ul"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      class="flex h-full flex-col items-center justify-center gap-y-6"
    >
      <li v-for="(item, index) in navData" :key="item.name" :data-index="index">
        <a
          class="cursor-pointer font-primary text-xl capitalize italic transition-all duration-300 hover:text-dark"
          @click.prevent="navigateTo($event, item.id)"
        >
          {{ item.name }}
        </a>
      </li>
    </TransitionGroup>
  </nav>
</template>
