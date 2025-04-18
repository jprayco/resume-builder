import React from 'react'

function TextArea({description, value, getValue}) {
  return (
    <div className='form-group'>
      <label htmlFor='' className=''>{description}</label>
      <textarea className='form-control'  rows="4" value={value} onChange={getValue}></textarea>
    </div>
  )
}

export default TextArea
