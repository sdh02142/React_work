import './App.css'
import Context01 from './components/Context01'
import Ex01_Effect from './components/Ex01_Effect'
import Ex02_Effect from './components/Ex02_Effect'
import Ex03_Memo from './components/Ex03_Memo'
import Ex04_Ref from './components/Ex04_Ref'
import Ex05_Ref_vs_useState from './components/Ex05_Ref_vs_useState'
import Ex06_Ref_vs_let from './components/Ex06_Ref_vs_let'
import Ex07_Reducer from './components/Ex07_Reducer'

function App() {
  return (
    <>
    {/* 1. useEffect LifeCycle */}
    {/* <Ex01_Effect/> */}

    {/* 2. resource manage by useEffect */}
    {/* <Ex02_Effect/> */}

    {/* 3. 연산작업 기억시키기 by useMemo */}
    {/* <Ex03_Memo/> */}

    {/* 4. useRef를 이용한 Dom 접근 */}
    {/* <Ex04_Ref/> */}

    {/* 5. useRef vs useState */}
    {/* <Ex05_Ref_vs_useState/> */}

    {/* 6. useRef vs let */}
    {/* <Ex06_Ref_vs_let/>
    <h3 style={{color:'red'}}>Ex06_Ref component 위 아래 두 번 넣기</h3>
    <Ex06_Ref_vs_let/> */}
    {/*
      Ex06에 선언된 전역변수 let letNo는 상위 component에서 순차적 실행에 따라 
      같은 변수명을 공유하게 되어 먼저 호출된 component의 변수명을 공유하게 됨.

      -> 따라서 letNo을 변경하는 함수나 로직이 letNo을 공유하기 때문에 useRef를
         사용하는 것을 권장함.
    */}

    {/* 7. use = useContext / createContext */}
    {/* <Context01/> */}

    {/* 8. useReducer */}
    <Ex07_Reducer/>
    </>
  )
}

export default App
