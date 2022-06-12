import React , {useState} from 'react';
import {Navigate} from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import Swal from 'sweetalert2'

const ProtectedRoute = ({children}) => {
    let {user} = useUserAuth();
    const [currUser, setCurrUser] = useState(JSON.parse(window.localStorage.getItem('currUser')));
    // console.log(currUser);
    if((currUser.status == false)){      
        return <Navigate to='/' />
    }
    return children
}

export default ProtectedRoute;