import './App.css'
import './TripTest.css'
import Article from './components/Article'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <Header title="Trip"/>
    <Nav/>
    <Article title="태어난 김에 세계일주" body="올 여름 최고의 찬스"/>
    </>
  )
}

export default App
