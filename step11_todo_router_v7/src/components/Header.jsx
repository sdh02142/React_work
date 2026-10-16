import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const nav = useNavigate();

  const btn1=()=>{
    // 유효성 체크 -> 페이지 전환 or 경고 메세지 출력
    // 페이지 전환
    nav('/')
  };
  const btn2=()=>{
    // 페이지 전환
    nav('/user/king')
  };
  const btn3=()=>{
    // 페이지 전환
    nav('/admin?name=james&age=40')
  };
  return (
    <div style={{border:'3px red solid'}}>
      <h3>Menu</h3>
      <Link to='/'>HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/user/hong'>USER</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/admin?name=john&age=20'>ADMIN</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/admin/manager'>MANAGER</Link>&nbsp;&nbsp;&nbsp;&nbsp;

      <hr/>
      {/*
        a태그(anchor)는 페이지 전체를 새로고침하고
        Link 요소는 페이지가 아닌 해당 component만 교체됨.
      */}
      <a href='/'>HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='/user/kim'>USER</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='/admin?name=cane&age=30'>ADMIN</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='/admin/manager'>MANAGER</a>&nbsp;&nbsp;&nbsp;&nbsp;
      
      <hr/>
      <button onClick={btn1}>click1</button>
      <button onClick={btn2}>click2</button>
      <button onClick={btn3}>click3</button>
    </div>
  )
}

export default Header