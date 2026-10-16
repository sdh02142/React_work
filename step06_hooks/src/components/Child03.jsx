import { use } from "react";
import { GlobalContext } from "./Context01";

const Child03 = () => {
    // 상위 component에서 전역 영역에 공유된 Context 사용
    const {btnClick02} = use(GlobalContext);
    
    return (
        <div style={{border:"1px orange solid" , padding:"10px"}}>
            <h3>Child 03입니다.</h3>
            <button onClick={btnClick02}>클릭!</button>
        </div>
    );
};

export default Child03;