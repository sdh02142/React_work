import { useRef, useState } from 'react';
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

function App() {
  let mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:true, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
  ];

  const indexNum = useRef(3);
  const [todos, setTodos] = useState(mockData);
  const [search, setSearch] = useState("");

  const onCreate = (con)=>setTodos(prevtodos => [...prevtodos, {id:indexNum.current++, isDone:false, content:con, date: new Date().getTime()}]);

  const onUpdate = (id)=>{
    setTodos(todos => todos.map(t=>{
      // if(t.id==e.target.nextElementSibling.nextElementSibling.nextElementSibling.value)t.isDone = !t.isDone;
      if(t.id==id)t.isDone = !t.isDone;
          return t;}));
  }

  const onDelete = (e)=>{
    setTodos(todos => todos.filter(t => t.id != e.target.value));
  }

  const onSearch = (keyword) => {
      setSearch(keyword);
  };

  const filteredTodos = todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='App'>
      <Header/>
      <Editor createFunc={onCreate}/>
      <List todoLists={filteredTodos} updateFunc={onUpdate} deleteFunc={onDelete} searchFunc={onSearch}/>
    </div>
  )
}

export default App
