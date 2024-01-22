import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: 'initial',
        left: '50%',
        right: 'auto',
        bottom: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, 0)',
        maxWidth: '100%',
        width: '420px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        borderRadius: '14px 14px 0 0',
    },
};


const ModalBottom = ({ myColor, isOpenModal, setOpenModal }) => {


    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        < >
            <Modal isOpen={isOpenModal} style={customStyles} onRequestClose={() => closeModal}>

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
                                    className="x_one_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    1
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    10
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    100
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    1000
                                </button>
                            </div>
                        </div>

                        <div className='quantity'>
                            <h5>Quantity</h5>
                            <div className='plus_minus'>
                                <button style={{ backgroundColor: myColor }}>-</button>
                                <h4>1</h4>
                                <button style={{ backgroundColor: myColor }}>+</button>
                            </div>
                        </div>

                        <div className='modal_content x_number'>
                            <div className='rupees_button'>
                                <button
                                    className="x_one_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X1
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X5
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X10
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X20
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X50
                                </button>

                                <button
                                    className="x_two_btn"
                                    style={{ backgroundColor: myColor }}
                                >
                                    X100
                                </button>
                            </div>
                        </div>

                        <div className='radio_btn'>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1" />
                                    I agree <span color={myColor}>(Pre-sale rule)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cancel_amount'>
                    <button onClick={closeModal} className='cancel'>Cancel</button>
                    <button style={{ backgroundColor: myColor }} className='amount'>Total amount ₹ 1.00</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalBottom;
