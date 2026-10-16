import { useState } from "react";
import axios from 'axios';

function FakeUsers() {
  const [users, setUsers] = useState([]);

  const selectAllByUsers = async ()=>{
      // const resultFist = fetch('https://jsonplaceholder.typicode.com/users')
      // .then().then().catch();
    try {
      const resultFist = await fetch('https://jsonplaceholder.typicode.com/users',
        {
          method:'GET',
          // body:JSON.stringify({id:11, name:'John'})
        }
      );

      const jsonRe = await resultFist.json();
      console.log(jsonRe);
      setUsers(jsonRe); // state 값이 변경되고 이에 따라 FakeUsers component가 re-rendering되어 화면을 다시 그림.
    } catch(err) {
      console.log(err)
    } finally {
      console.log('try-catch-finally finished.');
    }
  };

  const selectAllByUsers2 = async ()=>{
    try {
      // const re = await axios.get('https://jsonplaceholder.typicode.com/users');
      const re = await axios({
        url:'https://jsonplaceholder.typicode.com/users',
        method:'GET'
      });
      console.log(re);
      setUsers(re.data)
    }
    catch(err) {
      console.log(err)
    } finally {
      console.log('try-catch-finally finished.');
    }
  }
  

  return (
    <>
    <h1>Fetch() Function - http request</h1>
    <button onClick={selectAllByUsers}>Data Load - fetch()</button>
    <button onClick={selectAllByUsers2}>Data Load - axios</button>
    {
      users.map(u=><h5 key={u.id}>{u.id} / {u.name} / {u.address.street}</h5>)
    }
    </>
  )
}

export default FakeUsers