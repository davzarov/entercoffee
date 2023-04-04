<script setup>
import Copyright from "../Copyright.vue";
import Newsletter from "../Newsletter.vue";
import SocialIcons from "../SocialIcons.vue";

import { footerData } from "../../constants/data";

const { contact, hours, social } = footerData;
</script>

<template>
  <footer
    class="relative top-96 z-20 bg-dark pt-20 lg:min-h-[620px] lg:bg-transparent lg:bg-footer lg:bg-center lg:bg-no-repeat lg:pt-32"
  >
    <div class="container mx-auto h-full">
      <!-- newsletter & info -->
      <div class="flex h-full flex-col gap-y-4">
        <!-- newsletter -->
        <div>
          <Newsletter />
        </div>
        <!-- info -->
        <div
          class="flex flex-col gap-y-12 lg:mb-12 lg:flex-row lg:gap-x-[130px] lg:gap-y-0"
        >
          <!-- contact -->
          <div class="flex-1 lg:max-w-[170px]">
            <div
              class="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]"
            >
              {{ contact.title }}
            </div>
            <div class="capitalize">{{ contact.address }}</div>
            <div class="capitalize">{{ contact.phone }}</div>
          </div>
          <!-- program -->
          <div class="flex-1">
            <div
              class="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]"
            >
              {{ hours.title }}
            </div>
            <div class="flex gap-x-[46px]">
              <div
                class="capitalize"
                v-for="(item, index) in hours.program"
                :key="index"
              >
                <div>
                  <div>{{ item.days }}</div>
                  <div class="text-[20px] text-accent">
                    {{ item.hours }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- social -->
          <div class="mb-12 flex-1 lg:max-w-[280px]">
            <div
              class="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]"
            >
              {{ social.title }}
            </div>
            <SocialIcons />
          </div>
        </div>
        <!-- copyright -->
        <Copyright />
      </div>
    </div>
  </footer>
</template>
