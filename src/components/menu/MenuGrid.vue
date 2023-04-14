<script setup>
const props = defineProps(["menuItems"]);
</script>

<template>
  <div class="grid min-h-[590px] grid-cols-1 lg:grid-cols-4">
    <div v-for="(item, index) in menuItems" :key="index">
      <div class="flex h-full flex-row lg:flex-col">
        <!-- image -->
        <div
          :class="[
            'w-[45%] md:w-auto',
            index === 1 || index === 3 ? 'lg:order-1' : 'order-none',
          ]"
        >
          <img :src="item.image" alt="" />
        </div>
        <!-- text -->
        <div
          class="flex flex-1 flex-col justify-center bg-[#fff3e4] px-6 lg:max-h-[250px] lg:p-12 xl:max-h-max"
        >
          <div class="text-center">
            <div class="text-xl font-semibold text-dark xl:text-2xl">
              {{ item.name }}
            </div>
            <div
              class="my-1 text-[20px] font-semibold text-accent lg:my-6 lg:text-[40px]"
            >
              {{ item.price }}
            </div>
            <div>{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
