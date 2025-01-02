
import { createContext } from "react"
import Child1 from "./child1"
let cdata = createContext();
let data = "New year"
function App() {

  return (
    
     <>
     <cdata.Provider value={data}>
     <Child1/>
     </cdata.Provider>
     </>
  )
}

export default App
export {cdata}
