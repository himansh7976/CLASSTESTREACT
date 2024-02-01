import React from 'react'


function Display(props) {
  return (

    <div className='cards'>


                <div className='imgg'>

                    <img src={props.images1}></img>
                </div>
                <div className='flip'>

                <p>
                    {props.contant}
                </p>

                </div>
            </div>
    
  )
}

export default Display