import React from 'react'
import './Footer.style.scss'

const Footer=({history,clearHistory})=>{
    
    return ( 
        <div className="footer">

            <h4 className="footer-txt"> your last searches:  </h4>
             {history
             .slice(0,3)
             .map(search=>(
               <span className="input">{search}</span>
           ))}
           <button className="clear-btn" onClick={clearHistory}>clear</button>
        </div>
    )
}

export default Footer