import { ref } from "vue";
import { gsap } from "gsap";

export function useAnimateInView(element, duration, states) {
  const isIntersecting = ref(false);

  const observer = new IntersectionObserver(([entry]) => {
    isIntersecting.value = entry.isIntersecting;
  });

  observer.observe(element.value);

  const animate = () => {
    if (isIntersecting.value) {
      gsap.to(element.value.children, {
        duration,
        ...states.enter,
      });
    } else {
      gsap.to(element.value.children, {
        duration,
        ...states.leave,
      });
    }
  };

  return { animate };
}
