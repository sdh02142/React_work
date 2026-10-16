import React from 'react'

// css는 from절이 없음.
import './Ex03_ButtonImg.css';

/* 항상 fragment로 component를 만들어야하는 것은 아님. 쓰임에 따라 div나 span 등의 요소로 제작할 수 있음. */

function Ex03_ButtonImg({children, imgSrc, text, btnCk, a, b, c}) {
  console.log(children);
  console.log(a,b,c);
  return (
    <div className='divBtn'>
        <img src={imgSrc} alt={text}/>
        <button onClick={btnCk}>{text}</button>
    </div>
  )
}

export default Ex03_ButtonImg