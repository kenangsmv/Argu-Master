import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

let categoriesArray = [
  {
    name: "Technology",
    backgroundColor: "orange",
  },
  {
    name: "Sports",
    backgroundColor: "blue",
  },
  {
    name: "Science",
    backgroundColor: "red",
  },
];

export default function stage2({ changeValue, data, categories }) {
    
  const toggle=(kategori)=>{
       console.log(categories)
      let geciciArr=[...categories];

     let checkCategori = geciciArr.includes(kategori);

     if (checkCategori){
      
         // cikar
        geciciArr = geciciArr.filter(item => item!==kategori)

     } 
     else{
       //ekle
       geciciArr.push(kategori)
     }


       changeValue("categories", geciciArr);



  }
    console.log("kategroiler",categories)
  const checkTick=(kategori)=>{

  let check = categories.includes(kategori)
 return  check;

  }

  return (
    <div className="w100 column">
      <div className="center w100 border-bottom">
        <h2 className="mb1">Stage 2</h2>
      </div>
      <div>
        <h4>Select Category</h4>
        <div className="categoryContainer">
     {  
         categoriesArray.map(element=> 
         
         <div style={{backgroundColor:element.backgroundColor}} className="category" onClick={()=>{toggle(element.name)}}>
     {element.name}
     {
         checkTick(element.name)&&<div className="categoryTick"></div>
       } 
         </div>)
        
          
       }
          
        </div>
      </div>
    </div>
  );
}
