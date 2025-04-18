import React from 'react'
import Input from './forms/Input'
import TextArea from './forms/TextArea'

function Objective({Objective, setobjective, setobjectives }) {

  const getObjective = (e)=>{
    setobjective(e.target.value)
    setobjectives(true)
  }

  return (
    <div>
        <h5>Objective</h5>
      <TextArea description="Enter Objective" value={Objective} getValue={(e)=>{getObjective(e)}} />
    </div>
  )
}

export default Objective
