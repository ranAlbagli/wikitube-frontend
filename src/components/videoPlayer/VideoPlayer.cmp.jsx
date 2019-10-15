import React from 'react';
// import { Link } from 'react-router-dom'
import './VideoPlayer.style.scss'


const VideoPlayer = ({ currVideo }) => {
    
    return (
        
            <div className="videoPlayer">
                <iframe src={`https://www.youtube.com/embed/${ currVideo? currVideo.id.videoId:'fJ9rUzIMcZQ'}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    width='100%'
                    height='100%'
                />
        
        </div>
    )

}
export default VideoPlayer