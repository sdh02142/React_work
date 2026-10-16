import Trip from "./Trip"

function Article({title, body}) {
  return (
    <>
    <h2>{title}</h2>
        <p>이번 여름에 바다가 있는 테마 여행을 시작합니다.<br/>{body}</p>
        <Trip/>
    </>
  )
}

export default Article