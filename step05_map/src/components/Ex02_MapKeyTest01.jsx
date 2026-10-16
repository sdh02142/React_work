import React, { useState } from 'react';

const Ex02_MapKeyTest01 = () => {

   // const menu = ["짬뽕","짜장"];
   const [list , setList] = useState( ["짬뽕","짜장"] );
   const [inputValue, setInputValue ] = useState("")

   //추가
    const addList = ()=>{
       // console.log("inputValue" + inputValue);

        // text박스의 값을 조회
        setList((preList)=>[inputValue, ...preList]);
        /*
        setter 내에 callback 함수를 넣을 경우, 인수는 자동으로 useState의 변수가 배정됨.
        => 인수의 이름이 기존 변수와 달라도 자동으로 매칭되어짐.
        */

        //추가후에 text박스 지우기
        setInputValue("");
    }

    const inputChangeValue = (e)=>{
        setInputValue( e.target.value )
    }

    return (
        <div>
            <input type='text'  onChange={inputChangeValue} value={inputValue}/>
            <button onClick={addList}>추가</button>
            <ul>
               {
                list.map((menu, index)=>{
                    return (<li key={index}>{menu}</li>)
                })
               }
                {/*
                index를 key 값으로 배정하지 않는 이유

                위 예시와 같이 요소가 배열의 앞쪽에 추가되는 경우,
                배열 내에 새로운 요소가 index 값이 갱신되면서 추가되어
                rendering 과정이 일어날 때마다 모든 li 요소들의 key값이
                배열의 index값 변경으로 인해 전부 갱신되어 
                불필요한 갱신 과정이 반복됨.
                 */}
            </ul>
        </div>
    );
};

export default Ex02_MapKeyTest01;