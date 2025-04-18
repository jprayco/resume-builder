import React from 'react'

function Input({type, description, value, getValue}) {
  return (
    <div className='form-group'>
      <label htmlFor='' className=''>{description}</label>
      <input type={type} className='form-control' value={value} onChange={getValue}/>
    </div>
  )
}

export default Input
