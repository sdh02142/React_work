import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { addUser, delUser, editUsers, getUsers } from "../api/userApi";

const reducer=(state, action) => { // action = {type : , data : } / state = (초기값)mockData
  switch(action.type){
    case 'SET' : return action.data;
    case 'CREATE' : return [...state, action.data];
    case 'UPDATE' : return state.map((user)=>user.id===action.data.id ? {...user, name:action.data.name, age:action.data.age} : user);
    case 'DELETE' : return state.filter((user)=> user.id !== action.data);
  }
};

function UsersReducer() {
  const [users, dispatch] = useReducer(reducer, []);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const setData = async () => {
      const loadData = await getUsers();
      dispatch({type:'SET', data:loadData})
    };

  useEffect(()=>{
    setData();
  },[]);

  

  const handleAdd = async () => {
    const re = await addUser({name, age});
    dispatch({type:'CREATE', data:re})
    setId('');
    setName('');
    setAge('');
  };

  const handleDel = async () => {
    await delUser(id);
    dispatch({type:'DELETE', data:id})
    setId('');
    setName('');
    setAge('');
  };

  const handleUpd = async () => {
    await editUsers(id, {name, age});
    dispatch({type:'UPDATE', data:{id, name, age}})
    setId('');
    setName('');
    setAge('');
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDel}>삭제</button>
      <button onClick={handleUpd}>수정</button>
      {users.map(p => <p key={p.id}>{p.id} / {p.name} / {p.age}</p>)}
    </div>
  );
}

export default UsersReducer;