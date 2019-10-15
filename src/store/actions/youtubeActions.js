import types from "../types";
import youtubeService from '../../services/YoutubeService';
import WikipediaService from '../../services/WikipediaService'



export const createAction = (data, type = '') => {
  return {
    type,
    data
  }
};





// -----------------------------------------------------------------------------
export const getVideos = (term = '') => {
  return (dispatch) => {
    return youtubeService.getYoutubeVideos(term)
      .then(response => {
        dispatch(createAction(response, types.FETCH_VIDEOS))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const getWikipediaTerm = term => {
  return (dispatch) => {
    return WikipediaService.getWikipediaTerm(term)
      .then(response => {
        dispatch(createAction(response, types.SET_TERM))
      })
      .catch(error => {
        throw (error);
      });
  };
};

 
export const setCurrVideos = video => {
  return dispatch => {
    return dispatch(createAction(video, types.FETCH_VIDEO));
  };
};






