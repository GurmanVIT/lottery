import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { myColors } from "../../../utils/Colors";

const BigSmall = ({ openModal, setSelectedColor, setSelectedValue }) => {
  const onBigClick = () => {
    openModal(true);
    setSelectedColor(myColors.primaryColor);
    setSelectedValue("Big");
  };
  const onSmallClick = () => {
    openModal(true);
    setSelectedColor(myColors.primaryColor);
    setSelectedValue("Small");
  };

  return (
    <>
      <div className="big_small">
        <button className="login_button" onClick={() => onBigClick()}>
          Big
        </button>

        <button className="register_button" onClick={() => onSmallClick()}>
          Small
        </button>
      </div>
    </>
  );
};

export default BigSmall;

// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import React, { useState } from 'react';
// import ModalBottom from './OffCanvas/ModalBottom';

// const BigSmall = () => {

//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const openModal = () => {
//         setModalIsOpen(true);
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     return (
//         <>
//             <div className='big_small'>
//                 <Tabs
//                     id="uncontrolled-tab-example"
//                 >

//                     <button onClick={openModal}>Open Modal</button>
//                     <ModalBottom isOpen={modalIsOpen} closeModal={closeModal} />
//                     <Tab eventKey="small" title="Small">
//                     </Tab>
//                 </Tabs>
//             </div>
//         </>
//     )
// }

// export default BigSmall
