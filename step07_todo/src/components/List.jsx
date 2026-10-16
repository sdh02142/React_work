import React, { useState } from 'react'

import './List.css'
import TodoItem from './TodoItem'

function List({todoLists, updateFunc, deleteFunc, searchFunc }) {
  const onSearch = (e) => {
    searchFunc(e.target.value);
  };

  return (
    <div className='List'>
      <h4>Todo List 🎉</h4>
      <input type="text" id="keyword" placeholder="검색어를 입력해주세요." onChange={onSearch}></input>
      <div className='todos_wrapper'>
        {
        todoLists.map((todo)=><TodoItem key={todo.id} {...todo} onUpdate={updateFunc} onDelete={deleteFunc}/>)
      }
      </div>
    </div>
  )
}

export default List