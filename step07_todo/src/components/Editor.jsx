import React from 'react'

import './Editor.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

function Editor({createFunc}) {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  useEffect(()=>{
    contentRef.current.focus();
  },[]);

  const onSubmit = ()=>{
    if(content==''){
      contentRef.current.focus();
      return;
    }

    createFunc(content);
    setContent("");
    contentRef.current.focus();
  };

  return (
    <div className='Editor'>
      <input type="text" placeholder="새로운 todo" value={content} onChange={(e)=>setContent(e.target.value)} ref={contentRef}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor