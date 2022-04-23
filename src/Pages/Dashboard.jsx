import React from 'react';
import {useUserAuth} from '../Context/UserAuthContext'
import {Button} from 'react-bootstrap'
import { async } from '@firebase/util';
function Dashboard(){
    const {user,logOut} = useUserAuth();
    console.log(user);
    const handleLogOut = async () => {
        try{
            await logOut();
        }catch(err){
            console.log(err.message)
        }
    }
    return(
        <>
            <h1>Welcome! {user && user.email}</h1>
            <Button onClick={handleLogOut}>Log Out</Button>
        </>
    )
}

export default Dashboard;