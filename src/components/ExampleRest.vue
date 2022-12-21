
<template>
    <div>
        <h3>EXAMPLE USING REST API</h3>
        <div class="examples">
        <div v-for="example in allExamples" :key="example.id" class="example">
        {{example.title}}
        <i @click="deleteExample(example.id)" class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  
   name:'ExampleRest',
   methods:{
    ...mapActions(['fetchExamples',"deleteExample"]),
   },
   computed:mapGetters(['allExamples']),
   created(){
       let self=this
       self.fetchExamples();
   }
}
</script>
<style scoped>
.examples{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.example{
    grid-template-columns: 2fr;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 5px;
  width:10cm;
  border-radius: 3px;
  text-align: left;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 100px) {
  .examples {
    grid-template-columns: 1fr;
  }
}
</style>
