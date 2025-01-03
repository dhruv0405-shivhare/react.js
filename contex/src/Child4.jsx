import React from "react";
import { newdata } from "./child2";

const Child4 =() => {

    return (
      
       <>
       <h1>Child4</h1>
       <newdata.Consumer>
         {
            ({name,age}) => {
               return(
                  <h1>my name is: {name} and my age is: {age} </h1>
               )
            }
         }
       </newdata.Consumer>
       
       </>
    )
  }
  
  export default Child4