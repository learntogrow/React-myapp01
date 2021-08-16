
import React, { useState } from 'react' //useState is hook , hook means calling helper it comes and finish the work and go

function BtnHook() {

  // Declare a new state variable : "counter" & its setter method.
  const [counter, setCounter] = useState(4)  // setting the initial val to 4.
  const [name, setname] = useState('Rekha')  


  return (
    <div>
      <h2>Clicked count:  {counter} </h2> <br /><br />
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
      <li>{name}</li>
    </div>
  )
}

export default BtnHook;