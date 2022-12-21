<!-- eslint-disable vue/no-parsing-error -->
<template>
    <v-container>
      <template>
        <v-text-field @select="filterContent"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="SEARCH"
          ></v-text-field>
        </template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              STUDENT NAME
            </th>
            <th class="text-left">
              STUDENT AGE
            </th>
            <th class="text-left">
              EMAIL
            </th>
            <th class="text-left">
              COURSES
            </th>
            <th class="text-center">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr
            v-for="item in studentData"
            :key="item.name" 
          >
          <template v-if="!studentForm">
           <td>{{ item.name}}</td>
           <td>{{ item.age }}</td>
           <td>{{ item.email }}</td>
            <td>{{ item.select }}</td>
            <td ><v-btn  @click="editcontent(item.name)">EDIT</v-btn></td>
            <td ><v-btn @click="deletecontent(item.name)" >Delete</v-btn></td>
          </template>
          <template v-if="studentForm===item.name">
            <v-text-field v-model="item.name" disabled>NAME</v-text-field>
            <v-text-field type="number" v-model="item.age">AGE</v-text-field>
            <v-text-field type="email" v-model="item.email">EMAIL</v-text-field>
            <v-select :items='course' v-model="item.select"></v-select>
            <v-btn @click="saveContent(item)">SAVE</v-btn>
          </template>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</v-container>
  </template>
  <script>
  import {EventBus} from './EventBus.js'
  import { mapGetters,  mapActions } from 'vuex';
  export default {
    name: 'StudentTable',
    props:[ 'StudentDetail'],
   
    data () {
      return {
            studentProperties :{
              name:'',
              age:'',
              email:'',
              select:'',
             
            },
            studentForm :'', 
            course:['COMPUTER TECHNOLOGY','INFORMATION TECHNOLOGY','COMPUTER APPLICATION','MATHS','BIO TECHNOLOGY'],
          }      
     },
     methods:{
         addDataToStudentForm(data){
          // let self=this
          // eslint-disable-next-line no-unused-vars
          let sData = JSON.parse(JSON.stringify(data)); 
          this.$store.commit ('addDataToStudentForm',sData)  
          // self.studentData.push(sData);
          // console.log(sData)  
          },
          editcontent(name){
            // let self=this
            // self.item=self.studentData
            this.studentForm=name;
            console.log(name)
            //this.$store.commit('updateDataToForm',name)
           
          },
          saveContent(item){
            console.log(item)
            this.studentForm='';
          },
          deletecontent(item){
            // console.log(item)
            this.$store.dispatch('deletecontent',item);
             console.log(item)            
          },
         ...mapActions([' addstudentdata']),
       },
       computed:{
        ...mapGetters(['studentData']),
       },
          created(){
            let self=this
            EventBus.$on("studentData",self.addDataToStudentForm);          
          }
  }
  
</script>


 