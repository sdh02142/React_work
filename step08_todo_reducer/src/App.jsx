
import { useReducer, useRef, useState } from 'react';
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:true, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
];

const reducer=(state, action) => { // action -> {type : , data : } / state = (초기값)mockData
  switch(action.type){
    case 'CREATE' : return [action.data , ...state];
    case 'UPDATE' : return state.map((todo)=>todo.id===action.data ? {...todo, isDone:!todo.isDone} : todo);
    case 'DELETE' : return state.filter((todo)=> todo.id !== action.data);
  }
};

function App() {
  console.log("App loading..")
  // const [todos, setTodos] = useState(mockData);

  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3); //상태 관리 

   //등록하기
    const onCreate =(content)=>{
        const newTodo={
          id:idRef.current++, 
          isDone:false, 
          content:content, 
          date: new Date().getTime()
        };

        //등록
        dispatch({type : 'CREATE', data : newTodo});

    }
   //수정하기
   const onUpdate =(targetId)=>{
       dispatch({type : 'UPDATE', data : targetId});
    }

   //삭제하기
   const onDelete =(targetId)=>{
      dispatch({type : 'DELETE', data : targetId});
    }


  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>

    </div>
  )
}

export default App
