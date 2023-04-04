<script setup>
import HeroSection from "./sections/HeroSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import MenuSection from "./sections/MenuSection.vue";
import TeamSection from "./sections/TeamSection.vue";
import TestimonialSection from "./sections/TestimonialSection.vue";
import ReservationSection from "./sections/ReservationSection.vue";
import FooterSection from "./sections/FooterSection.vue";

const initialLoading = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
await initialLoading();
</script>

<template>
  <div class="mx-auto h-full max-w-[1800px] overflow-hidden">
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <TeamSection />
    <TestimonialSection />
    <ReservationSection />
    <FooterSection />
    <div class="h-[380px] md:h-[370px]"></div>
  </div>
</template>
