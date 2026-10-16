import React, { memo, useContext } from 'react'

import './TodoItem.css'
import { TodoDispatchContext } from '../App';

function TodoItem({id, isDone, content, date}) {
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={()=>onUpdate(id)}/>
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleString()}</div>
      <button onClick={()=>onDelete(id)}>삭제</button>
    </div>
  )
}

export default memo(TodoItem);