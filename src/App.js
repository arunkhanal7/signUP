import React from 'react'
import data from './Buttondet'
import Button from './Button'
import Forms from './Forms'


const App = () => {
  return (
    <>
    <div className='container'>
      <div className='text'>
        <h1>Sign up with:</h1>
        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>

      </div>
      <hr></hr>
      <div className='block-item'>
        {
          data.map((e)=>{
            return (
              <Button imageSrc={e.imageSrc} name={e.name} bgcolor={e.bgcolor}/>

            )
          })
        }

      </div>
    </div>
    <Forms />

    </>
  )
}

export default App