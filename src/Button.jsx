import React from 'react'

const Button = ({imageSrc,name,bgcolor}) => {
  return (
    <>
        
            <button className='btn' style={{backgroundColor:bgcolor}}> <img src= {imageSrc} alt="" srcset=""  />  {name}</button>
             
       

    
    </>
  )
}

export default Button