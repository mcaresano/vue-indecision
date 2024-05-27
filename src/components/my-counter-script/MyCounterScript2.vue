<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counter + squareCounter }}</h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2">
// forma 3 - con componente separado en el script. Se agrega el src= con el nombre del archivo de ts



//import { computed, ref } from 'vue';
/*// Forma 1 de declarar variables
  const props = defineProps({
      value: { 
        type:Number,
        required: true,
      }
  })
*/

/*// Forma 2
interface Props {
  value: number,  // si el campo queremos ponerlo que no sea obligatorio se le agrega el ? al final -> value?
}
const props = defineProps<Props>()
const counter = ref(props.value)
const squareCounter = computed(() => counter.value * counter.value) 
// --*/
</script>