import React, { useRef, useState } from 'react'

function Ex05_Ref_vs_useState() {
    console.log('Ex05_Ref_vs_useState Rendering')

    const countRef  = useRef(0);

    const [count, setCount] = useState(0);


  return (
    <>
        <h3>useRef vs useState</h3>
        <p>
            useRef : {countRef.current}
            <button onClick={()=>countRef.current++}>Ref</button>
            {/*
                useRef를 변경해도 re_Rendering이 발생하지 않지만 useRef 자체의 값인 useRef.current는 변경되어 저장됨.
            */}
        </p>

        <hr/>

        <p>
            useState : {count}
            <button onClick={()=>{setCount(count+1)}}>State</button>
            {/*
                onClick에 직접 setCount 함수를 넣지 않고 arrow 함수로 넣어서 포함시키는 이유는 바로 담을 경우,
                ()에 의해 rendering 과정에서 바로 실행되어버리기 때문.
            */}
        </p>
    </>
  )
}

export default Ex05_Ref_vs_useState