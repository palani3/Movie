import { useSelector } from 'react-redux';
import {Outlet,Navigate} from 'react-router-dom'


const PrivateRoute=()=>{
    const Token = localStorage.getItem('token');
    
    let auth ={'token':Token};
    // let auth ={'token':false};
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/> 
      
    )
}


export default PrivateRoute