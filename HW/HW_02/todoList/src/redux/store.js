import {configureStore, createSlice} from '@reduxjs/toolkit'

// 작은 단위(slice) 형태로 state 정보 저장
const todoSlice = createSlice({
    name : 'todo',
    initialState:[
        {id:0, isDone:false, content:"React study", date: new Date().getTime()},
        {id:1, isDone:true, content:"친구만나기", date: new Date().getTime()},
        {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
    ],
    reducers:{
        onCreate : (stateArr, action) => {
            stateArr.push(action.payload);
        },
        onUpdate : (stateArr, action) => {
            let index = stateArr.findIndex(tD => tD.id==action.payload);
            stateArr[index].isDone = !stateArr[index].isDone;
        },
        onDelete : (stateArr, action) => {
            let index = stateArr.findIndex(tD => tD.id==action.payload);
            stateArr.splice(index, 1);
        },
    }
});

// countSlice의 reducers에 정의된 모든 함수를 외부에서 사용할 수 있게 export
export const { onCreate, onUpdate, onDelete } = todoSlice.actions;

// 여러 slice들을 reducers에 등록하는 작업 필요
export default configureStore({
    reducer:{
        todo : todoSlice.reducer,
    }
});