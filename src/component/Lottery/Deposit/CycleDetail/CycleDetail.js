import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../../assets/img/back.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { usdtDepositTransactions } from '../../../../redux/usdtDepositTransactionsSlice';
import { ClipLoader } from "react-spinners";
import { myColors } from '../../../../utils/Colors'


const CycleDetail = () => {

    const navigation = useNavigate();

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setIndex] = useState(false);
    const [dropdownContent, setDropdownContent] = useState(null);

    const [transactions, setTransactions] = useState(null)


    const data = useSelector((state) => state.usdtDepositTransactionsReducer.data);

    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    useEffect(() => {
        dispatch(usdtDepositTransactions())

    }, [])


    useEffect(() => {
        if (data != null && data.success === 1) {
            setTransactions(data.transactions)
        }
    }, [data])


    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }


    const toggleDropdown = (formData, index) => {
        setIsOpen(!isOpen);
        setIndex(index)
        if (!isOpen) {
            setTimeout(() => {
                setDropdownContent(
                    <div className='down_item'>
                        <h6>From <b>:</b> <span className='ellipsis'>{formData.from}</span></h6>
                        <h6>Amount <b>:</b> <span className='ellipsis'>{formData.value}</span></h6>
                        <h6>Hash <b>:</b> <span className='ellipsis'>{formData.hash}</span></h6>
                    </div>
                );
            }, 100);
        } else {
            setDropdownContent(null);
        }
    };


    return (
        <>
            <div className="cycle">
                <div className="header_cycle">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="cycle_detail">
                            <h4>Cycle Detail</h4>
                        </div>
                    </div>

                    {transactions != null ? (
                        <div className='detail_section'>
                            {transactions != null && transactions.map((item, index) => (
                                <div class="dropdown_cycle">
                                    <button onClick={() => toggleDropdown(item, index)}>{formatDate(item.createdAt)} <span><KeyboardArrowDownIcon className={isOpen && selectedIndex === index ? 'rotate' : ''} /></span></button>
                                    {selectedIndex === index && dropdownContent}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="detail_section" >
                            <div className="main_loader">
                                <ClipLoader color={myColors.primaryColor} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CycleDetail;