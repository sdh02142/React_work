import { createContext, useEffect, useState } from "react";
import Child01 from "./Child01";

// 현재 component 하위에 있는 모든 component들이 사용할 수 있도록 export
// context의 변수명은 대문자로 시작함.
export const GlobalContext = createContext();

const Context01 = () => {
    useEffect(()=>console.log(GlobalContext),[]);
    

    const [list , setList] = useState([
    {id:1,name:"희정"},
    {id:2,name:"나영"},
    {id:3,name:"효리"}
    ]);

    const btnClick01 = ()=>{
       console.log("btnClick01 호출됨...")
    }

    const btnClick02 = ()=>{
       console.log("btnClick02 호출됨...")
    }

    return (
        <GlobalContext value={{list, setList, btnClick01, btnClick02}}>
            {/* key의 이름과 value의 이름이 같으므로 함축해서 기입 가능. */}
           <div style={{border:"1px red solid" , padding:"10px"}}>
            <h1>useContext TEST</h1>
            <h3 onClick={btnClick01}>클릭</h3>
            {
              list.map( (user)=> <div key={user.id}> {user.id} : {user.name} </div>)
            }
            <Child01 />
           </div>
        </GlobalContext>
    );
};

export default Context01;