import React from 'react';
import back from '../../../assets/img/back.svg';
import { useNavigate } from 'react-router';


const MyTicket = () => {

    const navigation = useNavigate();


    return (
        <>
            <div className="my_ticket">
                <div className="header_my_ticket">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="ticket">
                            <h4>My Ticket</h4>
                        </div>
                    </div>
                    <div className='my_ticket_section'>
                        <p>Subject</p>
                        <button type='button'>Active</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTicket;