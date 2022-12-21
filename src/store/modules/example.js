// eslint-disable-next-line no-unused-vars
import axios from 'axios'


const state={
    example:[],
    studentData:[]
};

const getters={
    allExamples: state=> state.example,
    studentData:state=>state.studentData
};

const actions={
    async fetchExamples({ commit }){
        const response =await axios.get('https://jsonplaceholder.typicode.com/albums');
        // console.log(response.data)
        commit('setExamples',response.data);
    },
    async addExample({commit},title){
          const response=await axios.post('https://jsonplaceholder.typicode.com/albums',{title,
        completed:false});

        commit('newExamples',response.data);
    },
    async deleteExample({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);

        commit('removeExample',id);

    },
   
    async filterExample({commit}, e){
       const limit=parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    //    console.log(limit)
       const response =await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`);
        commit('setExamples',response.data);
       
    },
    deletecontent({commit},name){
     commit('removecontent',name);
    },
    editcontent({commit}){
        commit('editcontent');
    },
    addstudentdata({commit},state){
        commit('addDataToStudentForm',state);

    }
};

const mutations={
    setExamples: (state,example) => (state.example=example),
    newExamples: (state,example) =>(state.example.unshift(example)),
    removeExample:(state,id)=>state.example=state.example.filter(example=>example.id!==id),
    removecontent:(state,name)=>
    state.studentData=state.studentData.filter(studentData=>studentData.name!==name),
    addDataToStudentForm(state,data){
        // console.log(data)
        // let self=this
        let tData = JSON.parse(JSON.stringify(data));    
        state.studentData.push(tData);  
        console.log(tData)    
        },
        updateDataToForm(state,studentData){
            if(!studentData.isEdit){
                state.studentData.push(studentData)
            }else{
                state.studentData.map(item=>{
                    if(item.name=== item.name){
                        item=studentData
                      }              
                    })
            }
        }
};

export default{
    state,
    getters,
    actions,
    mutations
}