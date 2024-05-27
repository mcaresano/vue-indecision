<template>
  <section>
    <h1 className="text-3xl font-bold underline">
      Primera app
    </h1>
  
  <hr>
  <MyCounter :value ="5"/>
  <MyCounterScript :value="6"/>
  <MyCounterScript2 :value="7"/></section>
</template>

<script lang="ts" setup>
  import MyCounter from './components/MyCounter.vue'
  import MyCounterScript from './components/MyCounterScript.vue'
  import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'

</script>

<style scoped>
  h1 {
    color: green;
  }
</style>