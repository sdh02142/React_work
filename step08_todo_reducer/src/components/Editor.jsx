import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import './Editor.css';

function Editor({onCreate}) {//함수가 전달
    console.log("Editor ....")
    const [content, setContent] = useState("");
     const contentRef = useRef();//Dom요소 접근

     //마운트 되었을 때 커서놓기
     useEffect(()=>{
         contentRef.current.focus();//커서놓기
     },[]); //[]는 마운트 될때 최초의 딱한번만 ,update될때 안함

   
     const onSubmit=()=>{
         if(content===""){
            contentRef.current.focus();//커서놓기
            return;
         }

         onCreate(content);//부모쪽 함수 호출!!! (입력한 내용을 전달한다.)
         setContent("");//내용비우기
         contentRef.current.focus();

     }//onSubmitEnd

     //키보드에 enter를 했을때 onSubmit을  호출해주기위한 이벤트 함수
     const onKeyDownEnter = (e)=>{
        console.log(e.keyCode);

        if(e.keyCode===13) onSubmit();
     }

    return (
        <div className="Editor">
            <input type="text" placeholder='새로운 todo' value={content} 
             onChange={(e)=>setContent(e.target.value)}  ref={contentRef}  
             onKeyDown={onKeyDownEnter}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;