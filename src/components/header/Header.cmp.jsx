import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from '../dropDown/DropDown.cmp'
import { useSelector, useDispatch } from 'react-redux'
import * as appActions from '../../store/actions/appActions'
import './Header.style.scss'


const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.appReducer.theme)
    const loggedinUser = useSelector(state => state.appReducer.loggedinUser)

    const setAppTheme=async (theme)=> {
        await dispatch(appActions.setAppTheme(theme))

    }

    const logout=async ()=>{
        await dispatch(appActions.logout())
    }

    return(

        <div className='dynamic-header'  style={{color:`${theme.txtColor}`, backgroundColor:`${theme.bgColor}`}}>
        <div className='logo'>
           WIKITUBE
        </div>
        <div className='appsus-nav'>
            <ul className="nav-bar clean-list  x flex">
                <li>  {loggedinUser?`hello ${loggedinUser.firstName} ${loggedinUser.lastName}`:''} </li>
                <li> {loggedinUser? (<img className="avatar" src={`https://robohash.org/${loggedinUser.firstName}.png`} alt=""/>):'' }</li>
                <li>  <DropDown setAppTheme={setAppTheme}/> </li>
                <li> <Link className='option' to='/'>WIKITUBE</Link>  </li>
                {loggedinUser?(
                    <li className='option' onClick={logout}> LOGOUT</li>
                ):<li><Link className='option' to='/logInSignUpPage'>SIGNUP/LOGIN</Link> </li>}
            </ul>
        </div>
    </div>
        )
    }

export default Header