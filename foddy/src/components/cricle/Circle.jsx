import React from 'react'
import data2 from '../../utils/data2'

function Circle() {
    return (

   <div className='ci'>
   {
   data2.map((i)=>{
    <img src={data2.images}></img>

   })
   }
   </div>
  )
}

export default Circle