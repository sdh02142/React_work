import React from 'react';
import './Header.css'
import { memo } from 'react';

function Header() {
    console.log("Header ....")
    return (
        <div className="Header">
            <h3>오늘의 Plan🌼</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

// export default Header;

// memo 함수에 component를 전달해서 새로운 component를 return하게 하는 것을 고차 컴포넌트(HOC)라고 하며
// 이 고차 component를 기억시킴. 
// 고차 component의 props가 변경되지 않으면 해당 component를 re_rendering 하지 않음.
// 현재 Header component는 props를 가지지 않으므로 최초 실행 시 발생하는 rendering 외에는 다른 값의 변경에 따른 
// re_rendering에서 제외됨.

export default memo(Header);