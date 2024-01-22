import React, { useState } from 'react';


const ModalBottom = () => {

    const [selectedX, setSelectedX] = useState(1);


    return (
        <div className='modal_bottom'>
            <div className='modals'>
                <div className='win_go'>
                    <h4>Win Go 1 min</h4>
                    <h4>4</h4>
                </div>

                <div className='modal_content'>
                    <h5>Balance</h5>
                    <div className='rupees_button'>
                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "white" : "#707070",
                                background: selectedX === 1 ? "#FF4141" : "#E4E4E4",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            1
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "white",
                                background: selectedX === 1 ? "#E4E4E4" : "##FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            10
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            100
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            1000
                        </button>
                    </div>
                </div>

                <div className='quantity'>
                    <h5>Quantity</h5>
                    <div className='plus_minus'>
                        <button>-</button>
                        <h4>1</h4>
                        <button>+</button>
                    </div>
                </div>

                <div className='modal_content x_number'>
                    <div className='rupees_button'>
                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "white" : "#707070",
                                background: selectedX === 1 ? "#FF4141" : "#E4E4E4",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X1
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "white",
                                background: selectedX === 1 ? "#E4E4E4" : "##FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X5
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X10
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X20
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X50
                        </button>

                        <button
                            className="x_two_btn"
                            style={{
                                color: selectedX === 1 ? "#707070" : "#707070",
                                background: selectedX === 1 ? "#E4E4E4" : "#FF4141",
                            }}
                            onClick={() => setSelectedX(1)}
                        >
                            X100
                        </button>
                    </div>
                </div>

                <div className='radio_btn'>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" />
                            I agree
                        </label>
                        <h6>(Pre-sale rule)</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBottom