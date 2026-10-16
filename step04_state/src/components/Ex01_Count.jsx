import { useState } from 'react'

let i = 0;

function Ex01_Count() {
    // const re = useState();
    // console.log(re);

    // useState 함수의 결과 값으로 [초기값, 초기값을 변경시킬 수 있는 함수]가 나옴.
    const [no, setNo] = useState(/* 좌변의 a에 useState의 인수가 전달됨. 0 -> */0);
    // console.log(no);
    // console.log(setNo);

    // let i = 0;
    // 현재 component와 하위 component의 re_render가 발생하기 때문에 ※지역변수※인 i는 재선언되어 계속 0으로 초기화되고 변경된 값이 표시되지 않음.

    // 숫자 감소 함수
    const minusFunc = ()=>{
      // useState()의 초기값인 no 변경 -> 직접 변경 불가 -> const 형태이기 때문.
      // => 변경 함수인 setNo로 접근 가능.
      setNo(no-1);
      // useState()의 초기값인 no 변경이 발생하면 현재 component와 하위 component의 re_render가 발생함.

      // -- 또는 ++은 해당 변수 또는 값을 변경하는 수식이기 때문에 const에서는 사용불가.

      i--;
    }

    // 숫자 증가 함수
    const plusFunc = ()=>{
      setNo(no+1);

      i++;
    }

  return (
    <div>
        <h2>숫자 증가 or 감소</h2>
        <button onClick={minusFunc}>-</button>
        <span>number : {no} / i : {i}</span>
        <button onClick={plusFunc}>+</button>
        <button onClick={()=>{
          // setNo(no+1);
          // setNo(no+1);
          // setNo(no+1);
          // setNo(no+1);
          /*
          여러번 호출했음에도 불구하고
          no에 담긴 값이 실행되는 그 순간의 snapshot으로 값을 기억하고 있어
          각각의 setNo 내의 인수들로 들어온 no에 버튼이 눌리는 순간의 값을 기준으로 +1이 실행되어
          중첩 호출되어도 +1이 한 번만 실행된 것처럼 동작함.

          => re-render 과정이 일어나야만 no값의 변경이 적용되어 표출되지만
             현재 re-render가 일어나려면 단순 no+1과 같은 수식이 아닌
             queue에 작업이 담기게 하는 arrow 함수의 형태로 작업을 setNo 함수에 넣어야
             설계한 대로 로직이 작동되어 브라우저 화면에 표시됨.

          =>> 현재 로직 구조에서 버튼이 클릭될 때 (-> setNo 함수를 호출하면서 no의 값을 변경
              -> 단순 수식으로 no의 값을 변경하고 setNo 함수의 인수로 넣으면 작업 queue에 반영되지 않음
              -> setNo 함수의 인수에서 arrow 함수를 통해 작업 queue에 no의 값을 변경하는 로직을 넣음
              -> 실행되는 인수 내의 arrow 함수의 개수만큼 작업 queue에서 대기시켜 순차적으로 실행) -> 동기화
          
          =>>> useState는 component 내에서(Java의 개발자 지정 객체 class내의 private field 값처럼) 하나의 변수와 해당 변수를 
               변경할 수 있는 setter 함수로 사용 가능.
          */
         setNo(no=>no+1);
         setNo(no=>no+1);
         setNo(no=>no+1);
         setNo(no=>no+1);
        }}>여러번 +</button>
    </div>
  )
}

export default Ex01_Count