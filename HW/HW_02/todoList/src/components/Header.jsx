import React, { memo }from 'react'

import './Header.css'

function Header() {
  const day =["일","월","화","수","목","금","토"];
  const today = new Date();
  return (
    <div className="Header">
                <div className="Header-top">
                    <h3>Today's Plan😄</h3>
                </div>
                <h1>{today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 {day[today.getDay()]}요일</h1>
            </div>
  )
}

// export default Header
export default memo(Header);