import React, { useState } from 'react'
import Ex01_Count from './Ex01_Count';
import Ex03_Form from './Ex03_Form';

function Ex04_ConditionRendering() {
    const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div>
        <button onClick={()=>{
            // 화면 교체 (re-Rendering)
            setIsLogIn(!isLogIn);
        }}>
            {isLogIn? 'Go Count':'Go Form'}
        </button>

        {/* form 요소일 때만 = isLogIn가 true일 때만 h1태그 출력 */}
        {isLogIn && <h1>Register</h1>}
        <hr/>
        {isLogIn?<Ex03_Form/>:<Ex01_Count/>}
    </div>
  )
}

export default Ex04_ConditionRendering