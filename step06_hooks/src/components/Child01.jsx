import { use, useRef } from "react";
import Child02 from "./Child02";
import { GlobalContext } from "./Context01";

const Child01 = () => {
    // 상위 component에서 전역 영역에 공유된 Context 사용
    const {setList, btnClick01, list} = use(GlobalContext);
    const idNum = useRef(4);
  
    return (
        <div style={{border:"1px blue solid" , padding:"10px"}}>
            <h3>Child01입니다.</h3>
            <button onClick={btnClick01}>눌려봐</button>
            <button onClick={()=>{setList([...list, {id:idNum.current++, name:'길동'}])}}>추가</button>

            <hr/>
            <Child02/>
        </div>
    );
};

export default Child01;