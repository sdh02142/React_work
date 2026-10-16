import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'


function App() {
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
          <Editor/>
          <List/>
    </div>
  )
}

export default App
