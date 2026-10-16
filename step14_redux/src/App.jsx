// Redux store와 연결된 React 훅 import
import { useDispatch, useSelector } from 'react-redux'

// 스타일 파일 import (선택 사항)
import './App.css'

// store에서 정의한 액션 생성자(import한 slice 액션들)
import { down, up, incrementByNo } from './redux/store';
import Cart from './components/Cart';
import Order from './components/Order';

function App() {
  console.log('app rendering')
  // store에 있는 count 가져오기(useSelector()함수 => 조회)
  const no = useSelector((s) => {
    // s => store 내의 모든 slice를 가져오기 때문에 store 내부에 있는 모든 상태 변화를 전부 감지하게 될 수 있음.
    // s.(slice명).(가져올 상태 변수명)으로 지정해서 조회.
    // console.log(s);
    return s.count.no;
  })

  // 잘못 사용의 예시
  // const state = useSelector(s=>s);

  // 상태 변경 요청의 함수 호출 담당 - useDispatch();
  const dispatch = useDispatch();

  // '빼기' 버튼 클릭 시 down 액션을 디스패치 (no - 1)
  const minusFn = () => {
    dispatch(down());
  };

  // '더하기' 버튼 클릭 시 up 액션을 디스패치 (no + 1)
  const plusFn = () => {
    dispatch(up());
  };

  return (
    <>
      <h1>React-Redux TEST</h1>

      {/* 카운트 UI 영역 */}
      <div className="Count">
        {/* 버튼 클릭 시 각각 액션을 디스패치 */}
        <button onClick={minusFn}>빼기</button>
        {/* 현재 Redux store에 저장된 상태 값 표시 */}
        <span> {no} </span>

        <button onClick={plusFn}>더하기</button>
        {/* 5만큼 증가시키는 커스텀 액션 실행 */}
        <button onClick={() => {dispatch(incrementByNo({name:'abc', num:5}))}}>5씩 증가</button>
      </div>

      <hr/>

      <Cart/>
    </>
  )
}

export default App