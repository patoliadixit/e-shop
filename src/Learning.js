import React from 'react'

function Learning() {
  console.log("hello");
  const promise = new Promise((resolve, reject) => resolve("hello"))
  promise.then(value => console.log("resolved"))
  const f = () => {
    let j = 0
    for (let i = 0; i < 1000000; i++) {
      j = i
    }
    console.log("f done");
  }
  f()
  return (
    <div>
      Hello
    </div>
  )
}

export default Learning
