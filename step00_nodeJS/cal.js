function add(a, b){
    return a + b;
}

const minus = (a, b) => {
    return a - b;
}

// commonJS 방식
/*
module.exports = {
    add,
    minus
} // 단축 속성명 = K와 V의 명칭이 같다면 어느 한 쪽의 명칭만 입력해도 자동으로 연결됨.
 */

// ES JS방식
export {
    add,
    minus
}