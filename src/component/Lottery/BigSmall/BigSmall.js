import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BigSmall = () => {
    return (
        <>
            <div className='big_small'>
                <Tabs
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="big" title="Big">
                    </Tab>
                    <Tab eventKey="small" title="Small">
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default BigSmall