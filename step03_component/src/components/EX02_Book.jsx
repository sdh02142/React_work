// export default function EX02_Book(){
//     return(
//         <>
//         <h1>This is a Book</h1>
//         <h3>This Book had 200 pages</h3>
//         </>
//     )
// }

// Reactjs code snippets 단축키 = rfc

import React from 'react'

// Props의 구조 분해 할당
export default function EX02_Book({totalPage, author = {name : "James", age : 18, addr : "Ori" /* default 값 */}, name}) {
    console.log(name+', '+totalPage);
    console.log(author);
  return (
    <>
        <h1>This is a {name} Book</h1>
        <h3>This Book had {totalPage + 10} pages</h3>
        <h4>Author : {author.name} / Age : {author.age} / Addr : {author.addr}</h4>
    </>
  )
}
