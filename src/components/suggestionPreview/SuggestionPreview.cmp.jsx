
import React from 'react';
// import { Link } from 'react-router-dom'
import './SuggestionPreview.style.scss'


const SuggestionPreview = ({ suggestion,setVideo }) => {  
    
     const handleChosenVideo= async ()=>{
        setVideo(suggestion)
    }

    return (
        <div className="suggestion-preview-container" onClick={handleChosenVideo}>
                <img src={suggestion.snippet.thumbnails.default.url} alt=""/>
                <h5>  {suggestion.snippet.title}</h5>
        </div>
    )
}
export default SuggestionPreview;