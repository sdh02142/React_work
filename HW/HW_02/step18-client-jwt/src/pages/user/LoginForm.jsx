import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import { useState } from "react";
import "./LoginForm.css";
const LoginForm =()=>{
// 인증에 필요한 username, password 상태관리를 위한 useState
const [member, setMember] = useState({
username: "",
password: "",
});
// input 에 값이 입력될 때 상태 값 수정
const changeValue = (e) => {
setMember({
...member,
[e.target.name]: e.target.value,
});
}; //
//로그인
const submitLogin = (e) => {
}
//취소
const cancelBack=()=>{
}
return (
<div className="LoginForm">
<h1 className="h1">로그인</h1>
<LabelText text={"아이디"} name={"username"} changeValue={changeValue} />
<LabelText text={"비밀번호"} name={"password"} changeValue={changeValue} />
<div className="divBtn">
<Button text={"로그인"} type={"button"} onClick={submitLogin}/>
<Button text={"취소"} type={"reset"} onClick={cancelBack}/>
</div>
</div>
)
}
export default LoginForm;