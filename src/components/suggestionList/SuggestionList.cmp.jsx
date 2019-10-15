import React from 'react'
// import './SuggestionList.style.scss'

// import React from 'react';
import SuggestioPreview from '../suggestionPreview/SuggestionPreview.cmp'
// import './ContactList.style.scss'


const SuggestionList = ({suggestions ,setVideo }) => {    
    return <div className="suggestion-list">
        {suggestions.map((suggestion) => (
                <SuggestioPreview key={suggestion.id.videoId} suggestion={suggestion} setVideo={setVideo}></SuggestioPreview>    
        ))}
    </div>
}

export default SuggestionList