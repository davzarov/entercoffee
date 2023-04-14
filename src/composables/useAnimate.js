import { onMounted } from "vue";
import gsap from "gsap";

export function useAnimate(element, duration, onBeforeEnter, onEnter, onLeave) {
  onMounted(() => {
    const animation = gsap.timeline({ onReverseComplete: onLeave });
    animation.from(element.value.children, duration, onBeforeEnter);
    animation.to(element.value.children, duration, onEnter);
  });
}
