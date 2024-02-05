import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';
import card_emoji from '../../../assets/img/card_emoji.svg';
import next from '../../../assets/img/next.svg';
import copy from '../../../assets/img/copy.svg';
import pass_pass from '../../../assets/img/pass_pass.svg';
import update_version from '../../../assets/img/update_version.svg';
import close from '../../../assets/img/close.svg';
import group from '../../../assets/img/group.svg';
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { clearData, updateProfileApi } from '../../../redux/changeNickNameSlice';
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";


const customStyles = {
    content: {
        top: "initial",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, 0)",
        maxWidth: "100%",
        width: "420px",
        borderRadius: "5px",
        backgroundColor: "#74707008",
        borderRadius: "14px 14px 0 0",
    },
};


const Setting = () => {

    const navigation = useNavigate();

    const [isWinOpen, setWinOpen] = useState(false);
    const profileResponse = useSelector((state) => state.profileReducer.data);
    const updateProfile = useSelector((state) => state.changeNickNameReducer.data);
    const [nickName, setNickName] = useState("")
    const dispatch = useDispatch()

    const addNickName = () => {
        if (nickName === "") {
            alert("Please enter nick name")
        } else {
            const payload = {
                firstName: profileResponse.data.firstName,
                lastName: profileResponse.data.lastName,
                nickName: nickName
            }
            dispatch(updateProfileApi(payload))
        }

    }

    useEffect(() => {
        if (updateProfile != null && updateProfile.status === 1) {
            alert("Nickname updated!")
            dispatch(clearData())
            setWinOpen(false)
            navigation(-1)
        }
    }, [updateProfile])


    const isLoading = useSelector((state) => state.changeNickNameReducer.isLoading);



    return (
        <>
            <div className="setting">
                <div className="header_setting">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="setting_content">
                            <h4>Settings Center</h4>
                        </div>
                    </div>

                    <div className='setting_section'>
                        <div className='card'>
                            <div className='card_emoji_img'>
                                <img src={card_emoji} alt='card_emoji' />
                                <p>Change avatar <img src={next} alt='next' /></p>
                            </div>
                            <div className='nick_name' onClick={() =>
                                setWinOpen(true)
                            }>
                                <p>Nickname</p>
                                {profileResponse != null && <h6>{profileResponse.data.nickName == "" ? "Add Nick Name" : profileResponse.data.nickName} <img src={next} alt='next' /></h6>}
                            </div>
                            <div className='uid'>
                                <p>UID</p>
                                <h6>9517893 <img src={copy} alt='copy' /></h6>
                            </div>
                        </div>

                        <div className='security_information'>
                            <h6>Security information</h6>
                            <div className='card' onClick={() => navigation('/changePassword')}>
                                <div className='pass_edit'>
                                    <div className='password_img'>
                                        <img src={pass_pass} alt='pass_pass' />
                                        <p>Login password</p>
                                    </div>
                                    <div className='edit'>
                                        <p>Edit<img src={next} alt='next' /></p>
                                    </div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='pass_edit'>
                                    <div className='password_img'>
                                        <img src={update_version} alt='update_version' />
                                        <p>Updated version</p>
                                    </div>
                                    <div className='edit'>
                                        <p>1.0.9<img src={next} alt='next' /></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Modal
                            isOpen={isWinOpen}
                            style={customStyles}
                            onRequestClose={() => setWinOpen(false)}
                        >
                            <div className="change_nickname">
                                <h3>Change Nickname</h3>
                                <div className="nick_name">
                                    <div className='group'>
                                        <img src={group} alt="group" />
                                        <h4>Nickname</h4>
                                    </div>
                                    <input type='text' placeholder='Member Name' onChange={(val) => setNickName(val.target.value)} /><br />
                                    <div className='confirm_btn'>
                                        <button className='login_button' onClick={() => addNickName()}>  {isLoading ? (
                                            <ClipLoader color={myColors.txtWhite} />
                                        ) : (
                                            "Confirm"
                                        )}</button>
                                    </div>
                                    <div className="close_btn">
                                        <img
                                            src={close}
                                            alt="close"
                                            className="close_img"
                                            onClick={() => setWinOpen(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Setting;