<template>
  <v-app>
   <div>
    <v-app-bar appolor="primary" dark>
      <v-toolbar>
      <v-toolbar-title>STUDENT DETAILS DEMO</v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link v-btn flat color="primary" to="/login">LOGIN</router-link>|
        <router-link v-btn flat color="secondary" to="/restlogin">RESTEXAMPLE</router-link>
    </v-toolbar> 
    </v-app-bar>
  </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
    //
    }),
   
};
</script>
