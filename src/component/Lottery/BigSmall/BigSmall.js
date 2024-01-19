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
                        {/* <ModalBottom /> */}
                    </Tab>
                    <Tab eventKey="small" title="Small">
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default BigSmall