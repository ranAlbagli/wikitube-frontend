
import types from "../types";
import AuthService from "../../services/AuthService";
import UserService from '../../services/UserService'




export const createAction = (data, type = '') => {
  return {
    type,
    data
  }
};


// -----------------------------------------------------------------------------

 
export const setAppTheme = theme => {
    return dispatch => {
      return dispatch(createAction(theme, types.SET_THEME));
    };
  };



  export const login = user => {
    return (dispatch) => {
      return AuthService.login(user)
        .then(response => {
          dispatch(createAction(response, types.SET_LOGGEDIN_USER))
        })
        .catch(error => {
          throw (error);
        });
    };
  };


  export const signup = user => {
    return (dispatch) => {
      return AuthService.signup(user)
        .then(response => {
          dispatch(createAction(response, types.SET_LOGGEDIN_USER))
        })
        .catch(error => {
          throw (error);
        });
    };
  };


  export const logout = ()=> {
    return (dispatch) => {
      return AuthService.logout()
        .then(response => {
          response=null
          dispatch(createAction(response, types.SET_LOGGEDIN_USER))
        })
        .catch(error => {
          throw (error);
        });
    };
  };

  export const updateUser = (user)=> {
    return (dispatch) => {
      return UserService.save(user)
        .then(response => {
          dispatch(createAction(response, types.SET_LOGGEDIN_USER))
        })
        .catch(error => {
          throw (error);
        });
    };
  };


//   async updateUser(context, { user }) {
//     try {
//         const updatedUser = await UserService.save(user)
//         context.commit({ type: 'updateUser', user: updatedUser })
//         return updatedUser;
//     } catch (err) {
//         throw err;
//     }
// },


