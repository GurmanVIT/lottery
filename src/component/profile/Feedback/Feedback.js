import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';


const Feedback = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="feedback">
                <div className="header_feedback">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="feedback_content">
                            <h4>Feedback</h4>
                        </div>
                    </div>

                    <div className='feedback_section'>
                        <div className='text_area'>
                            <textarea rows={13} placeholder='Welcome to feedback, please give feedback-please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!'></textarea>
                        </div>
                        <div className='reward'>
                            <h5>Send helpful feedback</h5>
                            <h5>Chance to win Mystery Rewards</h5>
                        </div>
                        <div className='sumnit_btn'>
                            <button className='login_button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback;