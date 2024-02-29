import React, { useEffect, useState } from 'react';
import Home_page from '../../component/Home/Home_page';
import Winner from './Winner/Index';
import Earning from './Winner/Earning';
import Information from './Information/Index';
import Bottom_bar from './Bottom/Bottom_bar';
import { randomMembersList } from '../../redux/randomMembersListSlice';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch();

    const randomMembersListReducer = useSelector((state) => state.randomMembersListReducer.data);

    const [randomMember, setRandomMember] = useState(null);

    useEffect(() => {

        dispatch(randomMembersList());
    }, []);


    useEffect(() => {
        console.log("randomMembersListReducer", randomMembersListReducer)
        if (
            randomMembersListReducer != null &&
            randomMembersListReducer.success === 1
        ) {
            console.log("randomMembersListReducer ===> ", randomMembersListReducer.data)
            setRandomMember(randomMembersListReducer.data);
        }
    }, [randomMembersListReducer]);

    return (
        <main>
            <div className='home_page'>
                <Home_page />
                <Information randomMember={randomMember} />
                <Earning randomMember={randomMember} />
                <Winner randomMember={randomMember} />
                <Bottom_bar />
            </div>
        </main >
    )
}

export default Index