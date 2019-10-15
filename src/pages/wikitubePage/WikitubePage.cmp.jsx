
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as mediaActions from '../../store/actions/youtubeActions'
import * as appActions from '../../store/actions/appActions'
import SuggestionList from '../../components/suggestionList/SuggestionList.cmp'
import Search from '../../components/search/Search.cmp'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer.cmp'
import Wikipedia from '../../components/wikipedia/Wikipedia.cmp'
import Footer from '../../components/footer/Footer.cmp'
import './WikitubePage.style.scss';


const WikitubePage = () => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.youtubeReducer.videos)
    const currVideo = useSelector(state => state.youtubeReducer.currVideo)
    const term = useSelector(state => state.youtubeReducer.term)
    const theme = useSelector(state => state.appReducer.theme)
    const loggedinUser = useSelector(state => state.appReducer.loggedinUser)
    


    useEffect(() => {
        (async () => {
            await dispatch(mediaActions.getVideos())
        })();
    }, [])

    const setFilter=async (filterBy)=> {
        await dispatch(mediaActions.getVideos(filterBy))
        await dispatch(mediaActions.getWikipediaTerm(filterBy))
        if(loggedinUser) {
            loggedinUser.searchHistory.push(filterBy)
            await dispatch(appActions.updateUser(loggedinUser)) 
        }
        
    }

    const setVideo=async (video)=> {
        await dispatch(mediaActions.setCurrVideos(video))

    }

    const clearHistory=async ()=>{
        if(loggedinUser) {
            loggedinUser.searchHistory=[]
            await dispatch(appActions.updateUser(loggedinUser)) 
        }
    }
    
    return videos && (
        <div className="app-container" style={{color:`${theme.txtColor}`, backgroundColor:`${theme.bgColor}`}}>
            <div className="search">
                <Search setFilter={setFilter}></Search>
            </div>
            <div className="suggestions">
                <SuggestionList setVideo={setVideo} suggestions={videos} />
            </div>
            <div className="video-player">
                <VideoPlayer currVideo={currVideo} />
            </div>
            <div className="wikipedia">
                <Wikipedia term={term} />
            </div>
            {loggedinUser? 
            <div className="footer">
                <Footer history={loggedinUser.searchHistory} clearHistory={clearHistory}/>
            </div> :''
            }
        </div>)

}
export default WikitubePage