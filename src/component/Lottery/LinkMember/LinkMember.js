import React from 'react';
import back from '../../../assets/img/back.svg';
import { useNavigate } from 'react-router';


const LinkMebmer = () => {

    const navigation = useNavigate();


    return (
        <>
            <div className="link_member">
                <div className="header_link_member">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="link_1">
                            <h4>Link</h4>
                        </div>
                    </div>
                    <div className='link_member_section'>
                        <div className='card_link'>
                            <p >Member : <span className='ellipsis'>853.0 UfdfuadfuadfuahuihSDT</span></p>
                            <p >Paid Status : <span className='ellipsis'>853</span></p>
                            <p >Package Amount : <span className='ellipsis'>853</span></p>
                            <p >Joined At : <span className='ellipsis'>853</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinkMebmer;