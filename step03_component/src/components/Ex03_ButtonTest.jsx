import React from 'react'
import Ex03_ButtonImg from './Ex03_ButtonImg'

import location from '../assets/images/location.png';
import search from '../assets/images/search.png';
import mail from '../assets/images/mail.png';

import emotion5 from '../assets/images/emotion5.png'
import { Header } from '../App';

function Ex03_ButtonTest() {
  const btnClick = (e)=>{
    console.log(e.target);
    console.log(e.target.innerText + 'clicked');

    e.target.style.border = '5px double red';
  }

  const obj = {a:'100', b:200, c:'hi'}

  return (
    <>
    <div style={{display:'flex', gap:'30px'}}>
        <Ex03_ButtonImg imgSrc={location} text='위치' btnCk={btnClick}>
          <Header/>
        </Ex03_ButtonImg>
        <Ex03_ButtonImg imgSrc={search} text='검색' btnCk={btnClick} {...obj}/>
        <Ex03_ButtonImg imgSrc={mail} text='메일' btnCk={btnClick} a={obj.a} b={obj.b} c={obj.c}/>
    </div>
    <hr/>
    <div style={{display:'flex', gap:'30px'}}>
        <img src='emotion1.png' alt='publicImg'/>
        <img src={emotion5} alt='publicImg2'/>
        <img src='../assets/images/emotion3.png' alt='publicImg3'/>
    </div>
    </>
  )
}

export default Ex03_ButtonTest