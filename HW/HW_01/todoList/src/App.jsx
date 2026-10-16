import { useRef, useState, useReducer, useCallback, createContext, useMemo } from 'react';
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

const reducer = (state, action)=>{
  switch(action.type){
    case 'CREATE' : return [action.data , ...state];
    case 'UPDATE' : return state.map((todo)=>todo.id===action.data ? {...todo, isDone:!todo.isDone} : todo);
    case 'DELETE' : return state.filter((todo)=> todo.id !== action.data);
  }
}

function App() {
  let mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:true, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
  ];

  const indexNum = useRef(3);
  // const [todos, setTodos] = useState(mockData);
  const [state, dispatch] = useReducer(reducer, mockData)

  const onCreate = useCallback((con)=>dispatch({type : 'CREATE', data : {id:indexNum.current++, isDone:false, content:con, date: new Date().getTime()}}),[]);

  const onUpdate = useCallback((id)=>dispatch({type : 'UPDATE', data : id}),[]);

  const onDelete = useCallback((id)=>dispatch({type : 'DELETE', data : id}),[]);

  const memoizedDispatch = useMemo(()=>{return {onCreate, onUpdate, onDelete}}, [])
  /*
    useMemo()에서 반환하는 함수들은 memoization되어 주소값의 변경이 일어나지 않아
    하위 component에 props로 전달되어도 re-rendering 대상에서 제외됨.

    이는 전달되는 과정에서 re-rendering이 발생하지 않는다는 뜻,
    해당 함수가 작동되면 useReducer 내의 state(useState에서의 변수이자 초기 데이터 mockData를 포함한 변경될 수 있는 변수)
    가 변동되어 re-rendering 발생
  */
  return (
    <div className='App'>
      <Header/>
      <TodoContext value={{state}}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor/>
          <List/>
        </TodoDispatchContext>
      </TodoContext>
    </div>
  )
}

export default App
