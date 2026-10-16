import { useState } from "react";
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import "./JoinForm.css";
const JoinForm =()=>{
const [member, setMember] = useState({
id: "",
name: "",
pwd: "",
address: "",
});
// 중복체크 결과 값을 저장 할 idCheckResult
const [idCheckResult , setIdCheckResult] = useState(""); //중복입니다. or 사용가능합니다.
// 아이디 중복여부에 따른 css 를 적용하기 위해 상태 변수
const [isCheckResult , setIsCheckResult] = useState(false); //true이면 중복, false이면 사용가능
//각 text 박스에 값이 변경되었을 때
const changeValue = (e) => {
};
//가입하기
const submitJoin = (e)=>{
};
return (
<>
<h1 className="h1">회원가입</h1>
<div className="idDuplicate">
<LabelText text={"아이디"} name={"id"} changeValue={changeValue}/>
<div className="idText" style={ isCheckResult ? {color: "red"} : {color: "blue" } }>{idCheckResult}</div>
</div>
<LabelText text={"이름"} name={"name"} changeValue={changeValue} />
<LabelText text={"비밀번호"} name={"pwd"} changeValue={changeValue}/>
<LabelText text={"주소"} name={"address"} changeValue={changeValue} />
<div className="divBtn">
<Button text={"회원가입"} type={"button"} onClick={submitJoin} />
<Button text={"취소"} type={"reset"} />
</div>
</>
)
}
export default JoinForm;