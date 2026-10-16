import React from 'react'

function Ex01_Map() {
    // 배열 선언
    const items = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <div>
        <h1>Ex01_Map</h1>
        <ul>{
            items.map((i, index) => <li key={index}>{i}</li>)
        }</ul>
    </div>
  )
}

export default Ex01_Map