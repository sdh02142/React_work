import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// component 작성
function Test(){
  return(
    <>
    <h1>Component</h1>
    </>
  )
};

const Test2 = function (){
  return(
    <>
    <h1>Component-ver2</h1>
    </>
  )
};

createRoot(document.getElementById('root')).render(
  // <>
  //   <Test />
  //   <Test2 />
  //   </>
  <App/>
  /**
   * component를 main.jsx에서 직접 작성하여 호출 가능
   * 
   * App component 내에서 component를 호출하여 작성하는 것이 일반적
   */
)
