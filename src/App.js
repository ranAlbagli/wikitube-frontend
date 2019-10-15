
// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import * as mediaActions from './store/actions/youtubeActions'
// import * as appActions from './store/actions/appActions'
// import SuggestionList from './components/suggestionList/SuggestionList.cmp'
// import Search from './components/search/Search.cmp'
// import VideoPlayer from './components/videoPlayer/VideoPlayer.cmp'
// import Wikipedia from './components/wikipedia/Wikipedia.cmp'
// import DropDown from './components/dropDown/DropDown.cmp'
// import './App.css';


// const App = () => {
//     const dispatch = useDispatch();
//     const videos = useSelector(state => state.youtubeReducer.videos)
//     const currVideo = useSelector(state => state.youtubeReducer.currVideo)
//     const term = useSelector(state => state.youtubeReducer.term)
//     const theme = useSelector(state => state.appReducer.theme)
    


//     useEffect(() => {
//         (async () => {
//             await dispatch(mediaActions.getVideos())
//         })();
//     }, [])

//     async function setFilter(filterBy) {
//         await dispatch(mediaActions.getVideos(filterBy))
//         await dispatch(mediaActions.getWikipediaTerm(filterBy))
//     }

//     async function setVideo(video) {
//         await dispatch(mediaActions.setCurrVideos(video))

//     }
    
//     async function setAppTheme(theme) {
//         await dispatch(appActions.setAppTheme(theme))

//     }

//     return videos && (
//         <div className="app-container" style={{color:`${theme.txtColor}`, backgroundColor:`${theme.bgColor}`}}>
//              <DropDown setAppTheme={setAppTheme}/>
//             <div className="item1">
//                 <Search setFilter={setFilter}></Search>
//             </div>
//             <div className="item2">
//                 <SuggestionList setVideo={setVideo} suggestions={videos} />
//             </div>
//             <div className="item3">
//                 <VideoPlayer currVideo={currVideo} />
//             </div>
//             <div className="item4">
//                 <Wikipedia term={term} />
//             </div>
//         </div>)

// }
// export default App


import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header.cmp'
import WikitubePage from './pages/wikitubePage/WikitubePage.cmp'
import logInSignUpPage from './pages/logInSignUpPage/LogInSignUpPage.cmp'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={WikitubePage} />
        <Route exact path='/logInSignUpPage' component={logInSignUpPage} />
      </Router>
    </div >
  )
}

export default App;