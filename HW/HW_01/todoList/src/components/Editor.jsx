import React, { useContext, useRef, useState } from 'react'

import './Editor.css'
import { TodoDispatchContext } from '../App';

function Editor() {
  const {onCreate} = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const contentRef = useRef();

  return (
    <div className='Editor'>
      <input type="text" placeholder="새로운 todo" ref={contentRef} value={content} onChange={(e)=>setContent(e.target.value)}/>
      <button onClick={()=>{
        if(content == ''){
          contentRef.current.focus();
          return;
        };
        onCreate(content);
        setContent('')
      }}>추가</button>
    </div>
  )
}

export default Editor