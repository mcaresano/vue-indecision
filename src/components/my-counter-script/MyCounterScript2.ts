import { computed, defineComponent, ref } from 'vue';

// Forma 3 - Componente tradicional
export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value)
    const squareCounter = computed(() => counter.value * counter.value)

    return {
      counter,
      squareCounter
    }
  }
})
