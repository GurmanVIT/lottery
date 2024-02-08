import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';
import Form from 'react-bootstrap/Form';


const Service = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="service_customer">
                <div className="header_service">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="service_content">
                            <h4>Generate Token</h4>
                        </div>
                    </div>

                    <div className='service_section'>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <div className='text_area'>
                            <textarea rows={10} placeholder='Gerenate Token'></textarea>
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

export default Service;