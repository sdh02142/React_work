import { useState } from "react"
import Ex02_Timer from "./Ex02_Timer";


function Ex02_Effect() {
    const [state, setState] = useState(false);

  return (
    <>
        <h3>Effect - Management of resource</h3>
        <button onClick={()=>setState(!state)}>ToggleButton</button>
        {state && <Ex02_Timer/>}
    </>
  )
}

export default Ex02_Effect