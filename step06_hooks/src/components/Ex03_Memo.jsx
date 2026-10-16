import { useMemo, useState } from "react"

function Ex03_Memo() {
    const [list, setList] = useState([1,2,3,4,5]);
    const [age, setAge] = useState(20);
    // const getSumResult = () => {
    //     let sum = 0;
    //     list.forEach( n => sum+=n );

    //     return sum;
    // }

    const useMemoFunc = useMemo(()=>{
        console.log('useMemoFunc Called')
        let sum = 0;
        list.forEach( n => sum+=n );

        return sum;
    }, [list]);
    /*
    useMemo로 선언된 callback 함수는 배열 내의 특정 설정한 값(useState 변수 등)만 추적하여
    해당 값이 변할 때만 re-render 시에 실행되고, 그 외의 다른 re-render 상황에서는 제외시켜
    rendering 시의 자원 소모를 줄여줌.
    */
  return (
    <>
        <h1>useMemo Test</h1>
        {
            list.map((n,i)=><h5 key={i}>{n}</h5>)
        }
        {/* <h3>합계 : {getSumResult()}</h3> */}
        <h3>합계 : {useMemoFunc}</h3>
        <button onClick={()=>setList([...list, 10])}>click</button>
        <hr/>
        <h3>나이 : {age}</h3>
        <button onClick={()=>setAge(age+1)}>ageClick</button>

        {/*
        useState의 변수를 변경하는 setter를 호출하는 순간, re-rendering이 발생하여 component 전체를 전부 재실행하게 됨.
        => return 부분이 재실행되어 최적화가 필요함.
        */}
    </>
  )
}

export default Ex03_Memo