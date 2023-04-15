<script setup>
import Hero from "./sections/Hero/Hero.vue";
import About from "./sections/About.vue";
import Menu from "./sections/Menu.vue";
import Team from "./sections/Team.vue";
import Reservation from "./sections/Reservation.vue";
import Footer from "./sections/Footer/Footer.vue";
import ScrollTop from "./ScrollTop.vue";
import Testimonial from "./sections/Testimonial/Testimonial.vue";

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
    <Hero />
    <About />
    <Menu />
    <Team />
    <Testimonial />
    <Reservation />
    <Footer />
    <ScrollTop />
    <div class="h-[380px] md:h-[370px]"></div>
  </div>
</template>
