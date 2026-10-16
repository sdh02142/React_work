import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// default 있으면 {} 없이, 해당 component의 이름을 호출할 문서에서 import할 때 변경할 수 있음.
import Ex01, { Ex01_Export2, num } from './components/Ex01_Export'
import Library from './components/EX02_Library'
import Ex03_ButtonTest from './components/Ex03_ButtonTest'

// default 없으면 {} 붙음
// import { Ex01_Export } from './components/Ex01_Export'

export function Header(){
  return(
    /*2개 이상의 element가 있을 때는 <></> root fragment 필요.*/
    <>
    <h3>Header 영역</h3>
    <button>click</button>
    </>
  )
}

function App() {
  return (
    <>
    <h1>Component (Ex01_Export에서 선언한 전역변수 : {num})</h1>
    {/* <Header/>
    <Ex01/>
    <Ex01_Export2/>
    <Library/> */}

    {/* 3. Component + 이미지 처리 */}
    <Ex03_ButtonTest/>
    </>
  )
}

export default App
