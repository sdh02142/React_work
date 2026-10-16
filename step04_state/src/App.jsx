import './App.css'
import Ex01_Count from './components/Ex01_Count'
import Ex02_Form from './components/Ex02_Form'
import Ex03_Form from './components/Ex03_Form'
import Ex04_ConditionRendering from './components/Ex04_ConditionRendering'

function App() {

  return (
    <>
    <h1>useState Practice</h1>
    {/* 1. useState를 이용한 숫자 증가, 감소 */}
    {/* <Ex01_Count/> */}
    
    {/* 2. Form 요소를 통해 useState 활용 */}
    {/* <Ex02_Form/> */}

    {/* 3. Form 요소들을 하나의 useState로 관리 */}
    {/* <Ex03_Form/> */}

    {/* 4. 조건부 rendering */}
    <Ex04_ConditionRendering/>
    </>
  )
}

export default App
