import React from 'react'
import SampleComponent, { HocSamplComponets } from './SampleComponet';
import CounterBox from './Counter';

const View_Hoc = ()=> {
  return (
    <>
    <h1> HOC COMPONENTS ..........</h1>
    <br/>

      <SampleComponent />
      <HocSamplComponets name ='Santosh Pal' />
      <br/>
      <CounterBox />

    </>
  )
}

export default View_Hoc;
