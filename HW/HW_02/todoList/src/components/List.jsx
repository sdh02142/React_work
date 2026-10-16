import { useState } from 'react'

import './List.css'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';

function List() {
  let todoArr = useSelector(s=>s.todo);
  const [search, setSearch] = useState("");

  const getFilterData =()=>{
        if(search==="")
            return todoArr;
        else 
          return todoArr.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filterTodos = getFilterData();

  return (
    <div className='List'>
      <h4>Todo List 🎉</h4>
      <input type="text" id="keyword" placeholder="검색어를 입력해주세요." value={search} 
            onChange={(e)=>setSearch(e.target.value)}></input>
      <div className='todos_wrapper'>
        {
        filterTodos.map((todo)=><TodoItem key={todo.id} {...todo}/>)
      }
      </div>
    </div>
  )
}

export default List