import React from 'react'
import { useState } from 'react'


function CounterBox (){
  return (
    <>
    {/* <h1>Hoc</h1> */}
     <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
      <HocBlue cmp={Counter} />
    </>
  );
}

function HocRed  (props){
    return <h1 style={{backgroundColor:'red', width:100 }}>Red Counter {props.cmp}</h1>
}

function HocGreen(props){
    return <h1 style={{backgroundColor:'green', width:100 }}>Green Counter{props.cmp}</h1>
}


function HocBlue (props) {
    return <h1 style={{backgroundColor:'blue', width:100 }}>Blue Counter {props.cmp}</h1>
}


function Counter() {
    const [counter, setcounter] = useState(0); 
     return (
         <div>
           <h2>{counter}</h2>
          <button onClick={()=>setcounter(counter+1)}>Click Update </button>
         </div>
     )
 }

export default CounterBox;

