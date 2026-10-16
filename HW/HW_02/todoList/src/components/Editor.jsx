import { useRef, useState } from 'react'

import './Editor.css'
import { useDispatch } from 'react-redux';
import { onCreate } from '../redux/store';

function Editor() {
  const [content, setContent] = useState('');

  let dispatch = useDispatch();
  let idRef = useRef(3);

  const contentRef = useRef();

  return (
    <div className='Editor'>
      <input type="text" placeholder="새로운 todo" ref={contentRef} value={content} onChange={(e)=>setContent(e.target.value)}/>
      <button onClick={()=>{
        if(content == ''){
          contentRef.current.focus();
          return;
        };
        dispatch(onCreate({id:idRef.current++, isDone:false, content:content, date: new Date().getTime()}));
        setContent('')
      }}>추가</button>
    </div>
  )
}

export default Editor