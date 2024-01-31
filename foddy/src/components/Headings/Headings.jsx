import React from 'react'
import './Headings.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Headings(props) {
  return (
    <div className='head'>
    <h3>{props.title}</h3>

    </div>

    
  )
}

export default Headings