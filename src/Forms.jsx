import React from 'react'

const Forms = ({name}) => {
  return (
    <>
    <div className='form_container'>
    <form action="" >
        <h1>Sign In {name}</h1>
        <div><input type="text" placeholder='Name' /></div>
        <div><input type="password" placeholder='Password' /></div>
        <button className='btn'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Forms