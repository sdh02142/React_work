import React, { useState } from 'react'

function Ex03_Form() {
    const [profile, setProfile] = useState({
        name:'default',
        age:0,
        email:'default',
        addr:'default',
        birthday:'0000-00-00',
        job:'default'
    });

    const inputUpdate = (e)=>{
        // setProfile({...profile, [e.target.name]:e.target.value});
        const {name,value} = e.target;
        setProfile({...profile, [name]:value});
    };

    /*
    이벤트 1번 => 작업 queue 1회

    Ex01_Count.jsx의 예시에서는 onClick 이벤트 1회에 
    useState의 변수 값을 변경하는 다수의 갱신 로직을 작성하는 방법을 통해
    작업 queue 단위를 파악했음. 1회 이벤트 내에서 여러 로직의 실행이 필요한 경우에만
    arrow 함수를 통해 setter 함수를 여러번 호출하여 useState의 변수 값을 변경할 수 있음.
    */

  return (
    <div>
        Name : <input type='text' name='name' value={profile.name} onChange={inputUpdate}/><br/>
        Age : <input type='text' name='age' value={profile.age} onChange={inputUpdate}/><br/>
        E-mail : <input type='email' name='email' value={profile.email} onChange={inputUpdate}/><br/>
        Address : <input type='text' name='addr' value={profile.addr} onChange={inputUpdate}/><br/>
        Birthday : <input type='date' name='birthday' value={profile.birthday} onChange={inputUpdate}/><br/>
        Job : <select name='job' onChange={inputUpdate}>
            <option value="">--Select--</option>
            <option value="개발자">개발자</option>
            <option value="디자이너">디자이너</option>
            <option value="기획자">기획자</option>
            <option value="강사">강사</option>
            </select><br/>
            <hr/>
    <div>
        Result Name : {profile.name}<br/>
        Result Age : {profile.age}<br/>
        Result E-mail : {profile.email}<br/>
        Result Address : {profile.addr}<br/>
        Result Birthday : {profile.birthday}<br/>
        Result Job : {profile.job}<br/>
    </div>
    </div>
  )
}

export default Ex03_Form