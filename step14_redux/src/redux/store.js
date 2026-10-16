import {configureStore, createSlice} from '@reduxjs/toolkit'

// 작은 단위(slice) 형태로 state 정보 저장
const countSlice = createSlice({
    name : 'count',
    initialState:{
        no:0
    },
    reducers:{
        up(s){ // => 인수로 들어오는 첫번째 값(s)은 initialState가 옴.
            console.log(s);
            s.no += 1;
        },
        down: (s) => { // => 함수의 표현 방식 2가지
            console.log(s);
            s.no -= 1;
        },
        incrementByNo(s, action){
            // 인수로 들어오는 두번째 값은 type과 payload를 포함한 객체를 담고있으며
            // payload는 해당 함수를 호출할 때 인수로 넣어준 값(자료형 값, 객체, 배열, ...)을 담음.
            console.log('s = ' + s);
            console.log(action.payload.num);
            s.no += action.payload.num;
        }
    }
});

// 장바구니에 해당하는 상태변수 설정
const cartSlice = createSlice({
    name:'cart',
    initialState:[
        {
            id:1,
            name:'수박',
            count:3
        },
        {
            id:2,
            name:'딸기',
            count:5
        }
    ],
    reducers:{
        addCount : (stateArr, action)=>{
            let index = stateArr.findIndex( fruit => fruit.id==action.payload);
            stateArr[index].count++;
        },
        sortByName(stateArr, action) { // name 오름차순
            stateArr.sort((a, b) => a.name > b.name? 1 : -1);
        },
        addItem : (stateArr, action) => {
            stateArr.push(action.payload);
        } 
    }
});

// countSlice의 reducers에 정의된 모든 함수를 외부에서 사용할 수 있게 export
export const { up, down, incrementByNo } = countSlice.actions;
export const { addCount, sortByName, addItem } = cartSlice.actions;

// 여러 slice들을 reducers에 등록하는 작업 필요
export default configureStore({
    reducer:{
        count:countSlice.reducer,
        cart:cartSlice.reducer,
    }
});