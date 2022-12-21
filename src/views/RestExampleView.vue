<template>
    <div class="rest"> 
      <AddExample/> 
      <ExampleRestFilter/>
       <ExampleRest/>
       
    </div>
  </template>
  
  <script>
   import ExampleRest from '@/components/ExampleRest.vue'
   import AddExample from '@/components/AddExample.vue'
   import ExampleRestFilter from '@/components/ExampleRestFilter.vue';
  export default {
    name: 'RestView',
    components: {
         ExampleRest,
         AddExample,
         ExampleRestFilter
    }
  }
  </script>
  
  