import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import PaginationComponent from '../Pagination/Pagination';


const Tab_screen = () => {
    return (
        <>
            <div className='tab_screen'>
                <Tabs
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="game history" title="Game History">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Number </th>
                                    <th>Big Small</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>544463464</td>
                                    <td>1</td>
                                    <td>Big</td>
                                    <td><li></li></td>
                                </tr>
                                <tr>
                                    <td>544463464</td>
                                    <td>2</td>
                                    <td>Small</td>
                                    <td><li></li></td>
                                </tr>
                                <tr>
                                    <td>544463464</td>
                                    <td>3</td>
                                    <td>Big</td>
                                    <td><li></li></td>
                                </tr>
                                <tr>
                                    <td>544463464</td>
                                    <td>4</td>
                                    <td>Small</td>
                                    <td><li></li></td>
                                </tr>
                            </tbody>
                        </Table>

                        <PaginationComponent />

                    </Tab>
                    <Tab eventKey="chart" title="Chart">

                        <div className='chart_table'>
                            <div className='table_head'>
                                <h5>Period</h5>
                                <h4>Number</h4>
                            </div>
                            <div className='statistic'>
                                <h6>Statistic (Last 100 Periods)</h6>
                            </div>
                            <div></div>
                        </div>

                        <PaginationComponent />

                    </Tab>
                    <Tab eventKey="my history" title="My History">
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Tab_screen;