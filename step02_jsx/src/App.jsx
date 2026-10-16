import './App.css'

function App() { // component, 첫 글자가 대문자, Java에서의 Class와 비슷, 하나의 페이지 같은 개념
  const msg = 'Want to go home!';

  const student = {
    no:10,
    name:'Gildong',
    addr:'Ori Station',
    age:19
  };

  const arr = [1, 2, 3, 'A', true, 3.14];

  // css 속성을 변수로 선언
  const cssStyle = {
    backgroundColor:'pink', /* camel 표기법 */
    textDecoration:'underline',
    color:'red',
    border:'5px double blue'
  }

  const func1 = (e) => {
    console.log('clicked 1');
    e.target.style.border = 'double 10px red';
    // return <h2 style={{color:'red'}}>Clicked</h2>
  }

  const info = <div><h4>Hello</h4></div>;

  return (
    <>
      {/* 직접 css 편집 */}
      <h1 style={{border:'5px solid red', color:'blue'}}>JSX 문법</h1>
      
      {/* 변수로 css 작성 및 적용 (변수에서 이미 {}로 감싸져있음) */}
      <h3 style = {cssStyle}>msg : {msg}</h3>
      <h3>Student's Info : {/*student <- 객체는 일반 표기 불가, 점 표기법으로 key를 통해 value값을 불러와야함.*/student.no} / {student.name} / {student.addr} / {student.age}</h3>
      
      {/* 표현식만 출력 가능.(문자열, 숫자, 배열) */}
      <h3>{'hi'} / {100} / {false} / {null} / {undefined} / {arr}</h3>

      <h3 className='test'>{student.age > 18 ? 'Adult' : 'Child'}</h3>

      {student.age > 18 ? <h4 style={{color:'red'}}>'Adult'</h4> : <h4 style={{color:'blue'}}>'Child'</h4>}
      
      <a href=''>Link1</a>
      <hr/>
      {student.age > 18 && <h5>{student.age} Able to Access All Contents</h5>}

      <button onClick={
        /* 요소의 속성들은 브라우저의 개발자 모드에서 보이지 않음. */
        func1
        }>Click1</button>

      <button onClick={function(e) {
        /* 익명 함수 */
        console.log('clicked 2');
        e.target.style.color = 'red';
      }}>Click2</button>

      <button onClick={(e) => {
        /* Arrow 함수 */
        console.log('clicked 3');
        e.target.style.color = 'blue';
      }}>Click3</button>
      <hr/>
      Info : {info}
    </>
  )
}

export default App
