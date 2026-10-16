import React from 'react'
import { useEffect } from 'react'

function Ex02_Timer() {
    useEffect(()=>{
        const timeSet = setInterval(()=>{
            console.log('Timer is running.');
        }, 1000);

        // unmount(component -> Ex02__Timer가 상위 component 혹은 어딘가에서 호출되었다가 사라질 때)될 때, 해야할 일을 return으로 callback 함수 선언
        return ()=>{
            console.log('clear interval');

            clearInterval(timeSet);
        }
    });


  return (
    <div>
        Ex02_Timer - Start Timer(Check console)
    </div>
  )
}

export default Ex02_Timer