import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModalBottom from './OffCanvas/ModalBottom';

const BigSmall = () => {
    return (
        <>
            <div className='big_small'>
                <Tabs
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="big" title="Big">
                        <ModalBottom />
                    </Tab>
                    <Tab eventKey="small" title="Small">
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

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