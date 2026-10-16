import React, { useState } from 'react'

function Ex02_Form() {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState(10);
    const inputNameChange = function(e){
        setUserName(e.target.value);
    };
  return (
    <>
    <h1>Form input value - useState</h1>
    <form>
        Name : <input type='text' name='userName' onChange={inputNameChange}/><br/>
        Age : <input type='text' name='userAge' value={userAge!==0 ? userAge:''} onChange={e=>setUserAge(e.target.value)}/><br/>
    </form>
    <div>
        Result Name : {userName}<br/>
        Result Age : {userAge}
    </div>
    </>
  )
}

export default Ex02_Form