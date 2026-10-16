import {useEffect, useRef, useState} from 'react'

function Ex04_Ref() {
    console.log('Ex04_Ref rendering');
    const refValue = useRef();

    // console.log(refValue);
    // 최초 실행 시, 순차적으로 진행되기 때문에 console 화면에 undefined로 나타남.
    useEffect(()=>{
        console.log(refValue);
        refValue.current.focus(); // 커서 놓기
    },[]);
    // useEffect는 랜더링이 된 후(바닐라 javascript의 onload 함수처럼)에 작동되므로
    // 요소인 input을 refValue.current에 불러올 수 있음.

  return (
    <>
    <h2>useRef 사용해보기</h2>
    <input type='text' ref={refValue}/>
    <button onClick={()=>{
        alert(`${refValue.current.value} inserted`);
        refValue.current.value = '';
        refValue.current.focus();
    }}>click</button>
    </>
  )
}

export default Ex04_Ref