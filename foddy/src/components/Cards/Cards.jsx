import React from 'react'
import "./Cards.css"
import data from '../../utils/data'

function Cards() {
    return (
        <div className='cont'>{
            
        data.map((data)=>(

            <div className='cards'>


                <div className='imgg'>

                    <img src={data.images1}></img>
                </div>
                <p>
                    {data.contant}
                </p>
            </div>
        ))
        }


        </div>

    )
}

export default Cards