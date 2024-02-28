import React, { useEffect } from 'react';
import Mine from './Mine';
import Bottom_bar from '../Home/Bottom/Bottom_bar';
import { useNavigate } from 'react-router';

const Profile = () => {

    const navigation = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    return (
        <>
            <div className='home_page'>
                <Mine />
                <Bottom_bar />
            </div>
        </>
    )
}

export default Profile;