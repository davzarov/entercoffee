import { onMounted, watchEffect } from "vue";
import gsap from "gsap";

export function useGsapAnimation(initialState, enterState, leaveState) {
  const element = ref(null);

  onMounted(() => {
    const timeline = gsap.timeline({ paused: true });
    timeline.from(element.value.children, { ...enterState });

    watchEffect(() => {
      const rect = element.value.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    });

    return () => {
      timeline.kill();
    };
  });

  return {
    element,
    initialState,
    enterState,
    leaveState,
  };
}
