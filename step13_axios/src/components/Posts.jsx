import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
// default로 export된 경우, import에서 변수 명을 바꿀 수 있음.

function Posts() {
  // .env file load
  // const SERVER_API = import.meta.env.VITE_SERVER_API;
  // console.log(SERVER_API);

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const selectAll = async () => {
    const res = await axiosInstance.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    //    axios.get(SERVER_API+"/posts")
    //   .then(res => setPosts(res.data));

    // axiosInstance 사용
    selectAll();  
  }, []);

  const handleAdd = async () => {
    // json-server library는 자체적으로 id가 생성되어 sql의 PK처럼 보유하고 있음.
    console.log(await axiosInstance.post('/posts', {title, author}));
    setTitle('');
    setAuthor('');

    selectAll();
  };

  const handleDel = async () => {
    // json-server library는 자체적으로 id가 생성되어 sql의 PK처럼 보유하고 있음.
    // delete의 경우, 해당 json의 url/(id값)으로 넣으면 삭제됨.
    console.log(await axiosInstance.delete('/posts/' + id));
    setTitle('');
    setAuthor('');

    selectAll();
  };

  const handleUpd = async () => {
    // json-server library는 자체적으로 id가 생성되어 sql의 PK처럼 보유하고 있음.
    // delete의 경우, 해당 json의 url/(id값)으로 넣으면 삭제됨.

    // put은 전체 수정으로 json 내의 어느 한 요소가 누락되면 그 요소는 제거됨.
    // patch는 부분 수정으로 특정 요소만 수정되고 누락된 요소는 그 전 값으로 유지됨.
    
    // console.log(await axiosInstance.put('/posts/' + id, {title, author}));
    console.log(await axiosInstance.patch('/posts/' + id, {author}));
    setId('');
    setTitle('');
    setAuthor('');

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
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="작성자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDel}>삭제</button>
      <button onClick={handleUpd}>수정</button>
      {posts.map(p => <p key={p.id}>{p.id} / {p.title} / {p.author}</p>)}
    </div>
  );
}

export default Posts;