import React from 'react'
import Card from "../card/card"
import { projectss } from '../../data';

function projects() {
  return (
    <div id='projects' className='mx-20 mt-20'>
      <p className='cherry text-4xl justify-center flex '>My projects </p>
    
      <div className=''>
        {projectss.map((project: any, i: any) => (
          <Card key={`p_${i}`} {...project} i={i} />
        ))}
      </div>
    </div>
  )
}

export default projects