// import Book from "./EX02_Book";

// function EX02_Library(){
//     return(
//         <>
//         <Book/>
//         <Book/>
//         <Book/>
//         </>
//     )
// }

// export default EX02_Library;

// Reactjs code snippets 단축키 = rfce

import React from 'react'
import Book from './EX02_Book'

function EX02_Library() {
    const author = {name : "Cane", age : 32, addr : "Busan"}
  return (
    <>
        <Book name="Spring" totalPage='200' author={{name : "John", age : 20, addr : "Seoul"}}/>
        <Book name={"JPA"} totalPage={400} author={author}/>
        <Book name={"HTML"} totalPage={300}/>
    </>
  )
}

export default EX02_Library