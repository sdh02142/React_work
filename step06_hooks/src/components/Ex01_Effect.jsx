import { useState } from 'react';
import { useEffect } from 'react'

function Ex01_Effect() {
  const [no, setNo]=useState(0);
  const [str, setStr]=useState('');

  useEffect(()=>{
    console.log('1.useEffect call - mount(component -> Ex01_Effect가 어딘가에서 호출될 때)될 때, 호출됨.');
  }); // re-render가 발생할 때마다 실행됨.

  useEffect(()=>{
    console.log('2.useEffect call - 최초로 mount될 때, 호출됨.');
  }, []); // 최초의 render에서만 작동되게 dependency를 부여함. javascript에서 onload와 비슷함.

  useEffect(()=>{
    console.log('3.useEffect call - no가 변경될 때, 호출됨.');
  }, [no]); // no값이 변경됨에 따라 re-render가 발생할 때만 작동되게 dependency를 부여함.

  useEffect(()=>{
    console.log('4.useEffect call - no와 str이 변경될 때, 호출됨.');
  }, [no, str]); // no와 str 값이 변경됨에 따라 re-render가 발생할 때만 작동되게 dependency를 부여함.

  return (
    <>
      <h1>useEffect Practice</h1>
      <h4>no : {no}</h4>
      <button onClick={()=>setNo(no+1)}>click</button>

      <hr/>

      <h4>str : {str}</h4>
      <button onClick={()=>setStr(str=>str+1)}>click</button>
    </>
  )
}

export default Ex01_Effect