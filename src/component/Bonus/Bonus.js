import React, { useState } from "react";
import notification from '../../assets/img/notification.svg';
import next from '../../assets/img/next.svg';


const Bonus = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState(null);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setTimeout(() => {
            setDropdownContent(
                <div className='down_item'>
                    <p>Gurmandeep Singh</p>
                </div>
            );
        }, 100);
    };

    return (
        <>
            <div className="bonus">
                <div className="header_bonus">
                    <div className="header_flex">
                        <div className="bonus_content">
                            <h4>Bonus</h4>
                        </div>
                    </div>

                    <div className="bonus_section">

                        <div className="notification" onClick={() => toggleDropdown()}>
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Play & Earn</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>
                        {isOpen && dropdownContent}

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Matching Bonus</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Level Bonus</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Invitation Bonus</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>You Tube Promotion Bonus</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Member Activity Promotion</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Mysterious Gift</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Lottery System(pending)</p>
                            </div>
                            <div className="number_noti">
                                {/* <p>3</p> */}
                                <img src={next} alt="next" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;
