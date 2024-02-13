import React from 'react';
import back from '../../../assets/img/back.svg';
import { useNavigate } from 'react-router';


const TicketSummery = () => {

    const navigation = useNavigate();


    return (
        <>
            <div className="ticket_summery">
                <div className="header_ticket_summery">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="ticket">
                            <h4>Ticket Summery</h4>
                        </div>
                    </div>
                    <div className='ticket_summery_section'>
                        <p>Ticket Summery</p>
                        <div className="text_area">
                            <textarea
                                rows={10}
                                disabled
                                placeholder="Gerenate Token"
                            ></textarea>
                        </div>

                        <div className="sumnit_btn">
                            <button
                                type="button"
                                className="login_button"
                            >
                                Complete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketSummery;