import React from 'react'
import "./Cards.css"
import data from '../../utils/data'
import Display from './Display'

function Cards({data}) {
    return (
        <div className='cont'>{
            
        data.map((data)=>(

            <Display images1={data.images1} contant={data.contant}/>
 
        ))
        }


        </div>

    )
}

export default Cards