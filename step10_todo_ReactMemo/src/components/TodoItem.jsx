import React, {memo} from 'react';
import './TodoItem.css';
//function TodoItem({id, isDone, content, date}) {
function TodoItem({id, isDone, content, date, onDelete, onUpdate}) {
console.log("TodoItem ....")
     const onChangeCheckbox=()=>{
       //수정하기(checkbox 상태변경)
       onUpdate(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={()=>onDelete(id)}>삭제</button>
        </div>
    );
}

// export default TodoItem;
/*
    memo()는 객체, 배열, 함수 등의 주소값으로 전달받는 props들에 대해서는 
    얕은 기록만 가능하기 때문에 해당 props들을 갖는 component에서는 memo()
    함수의 제 기능 활용이 불가능함.

    re_rendering => 발생하는 순간, 해당 component가 처음부터 실행됨.
    -> 선언했던 요소들이 재선언됨. -> 객체, 배열, 함수 등의 주소값으로 전달받는 대상들의 주소값이 변경됨.
    onDelete(), onUpdate() <- 주소값이 변경되어 전달되기 때문에 memo() 함수로 감싸져 있음에도 불구하고 re_rendering 발생

    아래와 같이 개별적으로 체크하여 re_rendering을 방지하거나 useCallback을 통해 선언된 모든 함수들을 re_rendering 대상에서 
    제외시키는 방법으로 방지.
*/
export default memo(TodoItem, (prevProps, nextProps)=>{
    // memo(component, callback)에서 callback함수가 true를 반환하면 re_render 발생 제외
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});