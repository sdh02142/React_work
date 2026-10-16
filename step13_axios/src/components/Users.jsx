import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { addUser, delUser, editUsers, getUsers } from "../api/userApi";

function Users() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const selectAll = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    selectAll();  
  }, []);

  const handleAdd = async () => {
    await addUser({name, age});
    setId('');
    setName('');
    setAge('');

    selectAll();
  };

  const handleDel = async () => {
    await delUser(id);
    setId('');
    setName('');
    setAge('');

    selectAll();
  };

  const handleUpd = async () => {
    await editUsers(id, {name, age});
    setId('');
    setName('');
    setAge('');

    selectAll();
  };

  return (
    <div>
      <h1>Posts</h1>
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

export default Users;