 <template>
   <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    
      
    <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="STUDENT NAME"
        required
      ></v-text-field>

      <v-text-field
        v-model="age"
        :rules="ageRules"
        label="STUDENT AGE"
        digits:2
      ></v-text-field>
      <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Course id required']"
        label="COURSES"
        required
      ></v-select>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate()"
      >
        SUBMIT
      </v-btn>
      
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        RESET FORM
      </v-btn>
      
    </v-form>
    </v-container> 
    
  </template>
  <script>
   
     import {EventBus} from './EventBus.js'
     
  export default {
 // 
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],

      age: '',
      ageRules: [
        v => !!v || 'Age is required',
        v => (v && v.length == 2) || 'Age must be valid',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      select: null,
      items: [
        'COMPUTER TECHNOLOGY',
        'INFORMATION TECHNOLOGY',
        'COMPUTER APPLICATION',
        'MATHS',
        'BIO TECHNOLOGY',
      ],
     
      StudentDetail :{
         
          name:'',
          age:'' ,
          email:'',
          select:''
               
        },
        studentData:[],
    }),
    methods: {
      validate () {
        let self=this
        
        self.$refs.form.validate()
        self.StudentDetail.name=self.name;
        self.StudentDetail.age=self.age;
        self.StudentDetail.email=self.email;
        self.StudentDetail.select=self.select
        console.log(self.StudentDetail)
        // let value=JSON.parse(JSON.stringify(self.StudentDetail))
        EventBus.$emit('studentData',self.StudentDetail);
        
        
      },
      reset () { 
        self.$refs.form.reset()
      },
  

    },
  }
</script>

