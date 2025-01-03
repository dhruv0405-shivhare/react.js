import React, { createContext } from "react";
import { cdata } from "./App";
import Child3 from "./Child3";
let newdata = createContext()
let name = "Dhruv"
let age = 22
const Child2 = () => {

    return (
      
       <>
       <cdata.Consumer>
        {
            (data) => {
                return (
                    <h1>Happy{data}</h1>
                )
            }
        }
       </cdata.Consumer>

       <newdata.Provider value={{name,age}}>
        <Child3/>
       </newdata.Provider>
       </>
    )
  }
  
  export default Child2
  export {newdata}