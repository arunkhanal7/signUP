import React, { useState } from 'react'
import data from './Buttondet'
import Button from './Button'
import Forms from './Forms'


const App = () => {
  const [showButtons,setShowButtons] = useState(true)
  const [showForm,setShowForm] = useState(false)
  function handleOnclick(){
    setShowForm(true)
    setShowButtons(false)
  }

  return (
    <>
    
    <div className='container'>
      <div className='text'>
        <h1>Sign up with:</h1>
        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>

      </div>
      <hr></hr>

      <div className='block-item'>
      {showButtons && (
        
          data.map((e)=>{
            return (
              <Button onClick={handleOnclick} imageSrc={e.imageSrc} name={e.name} bgcolor={e.bgcolor}/>

            )
          })
)}

      </div>
      <div className='block-item'>
      {
          showForm && (
            <Forms  />
          )
        }

      </div>
      
    </div>
    

    </>
  )
}

export default App