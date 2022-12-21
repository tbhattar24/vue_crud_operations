<template>
  <div>
    <StudentLogin/>
    <StudentTable/>
  </div>
   </template>
   
   <script>
     
     import StudentLogin from '@/components/StudentLogin.vue';
     import StudentTable from '@/components/StudentTable.vue';
   
     export default {
       name: 'LoginView',
   
       components: {
         StudentLogin,
         StudentTable,
       },
     }
   </script>
   
   