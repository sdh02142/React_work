// component 역할

// global 영역에서 사용 가능한 전역변수 선언 영역
// 변수 또한 export 가능.
export let num = 90;

export default function Ex01_Export(){
    // Ex01_Export 함수(=component) 내에서만 사용 가능한 지역변수 선언 영역
    return(
        <>
            <h3>Ex01_Export Component (num = {num})</h3>
        </>
    )    
}

export /* default <- 하나의 jsx 문서에는 default가 1개만 가능.*/ function Ex01_Export2(){
    return(
        <>
            <h3>Ex01_Export2 Component (num = {num})</h3>
        </>
    )    
}