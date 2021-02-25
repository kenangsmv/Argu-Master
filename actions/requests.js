import axios from "axios"

const url="http://localhost:5000"
  export const newDebate=async (data)=>{
   await axios({
        method: 'post',
        url: url+'/debate/add-debate',
        data: data
      });

  }

  export const getDebate=async (data)=>{
   return await axios({
         method: 'get',
         url: url+'/debate/get-debate',
         data: data
       });
 
   }