<template>
    <section>
      <h3>Counter: {{ counter }}</h3>
      <h3>Square: {{ counter + squareCounter }}</h3>
      <div>
        <button
          class="btn" 
          @click="counter++">+1</button>
        <button
          class="btn" 
          @click="counter--">-1</button>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
    import { computed, ref } from 'vue';

  /*// Forma 1 de declarar variables
    const props = defineProps({
        value: { 
          type:Number,
          required: true,
        }
    })
  */

  // Forma 2  
  interface Props {
    value: number,  // si el campo queremos ponerlo que no sea obligatorio se le agrega el ? al final -> value?
  }
  const props = defineProps<Props>()
  // --

  // Componente tradicional

    const counter = ref(props.value)
    const squareCounter = computed(() => counter.value * counter.value) 
  </script>

  <style scoped>
.btn {
 @apply p-5 bg-blue-500 rounded hover:bg-slate-200 m-5
}
</style>