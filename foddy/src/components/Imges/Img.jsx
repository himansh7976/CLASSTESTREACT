import React from 'react'
import "./Img.css"

import data2 from './../../utils/data2';

function Img(props) {
    return (
        <div className='imagg'>
            {
                props.data2.map((item) => (
                    <img src={item.images}></img>

                ))
            }
        </div>


    )

}

export default Img