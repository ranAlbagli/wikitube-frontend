import React from 'react'
import './Wikipedia.style.scss'

const Wikipedia=({term})=>{
    
    return ( 
        <div className='wiki-desc'>
            {term?<h5>{term}</h5>: <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates id libero repellendus, dignissimos corrupti tenetur voluptas tempora nisi alias itaque numquam odit ea assumenda consequuntur reiciendis aliquid perspiciatis labore explicabo.</h5>}
        </div>
    )
}

export default Wikipedia