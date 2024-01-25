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

                            <div className='history_table'>
                                <div className='secound_table_sec'>
                                    <div className='statistic'>
                                        <h6>Statistic (Last 100 Periods)</h6>
                                    </div>
                                    <div className='flex_winning_number'>
                                        <div className='win_number_one'>Winning number</div>
                                        <div className='d-flex'>
                                            <p className='table_number_sec'>0</p>
                                            <p className='table_number_sec'>1</p>
                                            <p className='table_number_sec'>2</p>
                                            <p className='table_number_sec'>3</p>
                                            <p className='table_number_sec'>4</p>
                                            <p className='table_number_sec'>5</p>
                                            <p className='table_number_sec'>6</p>
                                            <p className='table_number_sec'>7</p>
                                            <p className='table_number_sec'>8</p>
                                            <p className='table_number_sec'>9</p>
                                        </div>
                                    </div>

                                    <div className='flex_winning_number'>
                                        <div className='win_number_one'>Missing</div>
                                        <div className='missing'>
                                            <p className='table_selected_number'>22</p>
                                            <p className='table_selected_number'>25</p>
                                            <p className='table_selected_number'>2</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                            <p className='table_selected_number'>18</p>
                                            <p className='table_selected_number'>9</p>
                                            <p className='table_selected_number'>11</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                        </div>
                                    </div>

                                    <div className='flex_winning_number'>
                                        <div className='win_number_one'>Avg missing</div>
                                        <div className='missing'>
                                            <p className='table_selected_number'>12</p>
                                            <p className='table_selected_number'>30</p>
                                            <p className='table_selected_number'>2</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                            <p className='table_selected_number'>18</p>
                                            <p className='table_selected_number'>9</p>
                                            <p className='table_selected_number'>11</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                        </div>
                                    </div>

                                    <div className='flex_winning_number'>
                                        <div className='win_number_one'>Frequency</div>
                                        <div className='missing'>
                                            <p className='table_selected_number'>12</p>
                                            <p className='table_selected_number'>30</p>
                                            <p className='table_selected_number'>2</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                            <p className='table_selected_number'>18</p>
                                            <p className='table_selected_number'>9</p>
                                            <p className='table_selected_number'>11</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                        </div>
                                    </div>

                                    <div className='flex_winning_number'>
                                        <div className='win_number_one'>Max consecutive</div>
                                        <div className='missing'>
                                            <p className='table_selected_number'>12</p>
                                            <p className='table_selected_number'>30</p>
                                            <p className='table_selected_number'>2</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                            <p className='table_selected_number'>18</p>
                                            <p className='table_selected_number'>9</p>
                                            <p className='table_selected_number'>11</p>
                                            <p className='table_selected_number'>36</p>
                                            <p className='table_selected_number'>8</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='result_row'>
                                    <div className='issue_number'>20240125010758</div>
                                    <div className='result_number'>
                                        <div className='d-flex'>
                                            <p className='table_number_sec'>0</p>
                                            <p className='table_number_sec'>1</p>
                                            <p className='table_number_sec'>2</p>
                                            <p className='table_number_sec'>3</p>
                                            <p className='table_number_sec'>4</p>
                                            <p className='table_number_sec'>5</p>
                                            <p className='table_number_sec'>6</p>
                                            <p className='table_number_sec'>7</p>
                                            <p className='table_number_sec'>8</p>
                                            <p className='table_number_sec'>9</p>
                                        </div>
                                        <div className='result_big_small'>
                                            <p>S</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='result_row'>
                                    <div className='issue_number'>20240125010758</div>
                                    <div className='result_number'>
                                        <div className='d-flex'>
                                            <p className='table_number_sec'>0</p>
                                            <p className='table_number_sec'>1</p>
                                            <p className='table_number_sec'>2</p>
                                            <p className='table_number_sec'>3</p>
                                            <p className='table_number_sec'>4</p>
                                            <p className='table_number_sec'>5</p>
                                            <p className='table_number_sec'>6</p>
                                            <p className='table_number_sec'>7</p>
                                            <p className='table_number_sec'>8</p>
                                            <p className='table_number_sec'>9</p>
                                        </div>
                                        <div className='result_big_small'>
                                            <p>S</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='result_row'>
                                    <div className='issue_number'>20240125010758</div>
                                    <div className='result_number'>
                                        <div className='d-flex'>
                                            <p className='table_number_sec'>0</p>
                                            <p className='table_number_sec'>1</p>
                                            <p className='table_number_sec'>2</p>
                                            <p className='table_number_sec'>3</p>
                                            <p className='table_number_sec'>4</p>
                                            <p className='table_number_sec'>5</p>
                                            <p className='table_number_sec'>6</p>
                                            <p className='table_number_sec'>7</p>
                                            <p className='table_number_sec'>8</p>
                                            <p className='table_number_sec'>9</p>
                                        </div>
                                        <div className='result_big_small'>
                                            <p>S</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='result_row'>
                                    <div className='issue_number'>20240125010758</div>
                                    <div className='result_number'>
                                        <div className='d-flex'>
                                            <p className='table_number_sec'>0</p>
                                            <p className='table_number_sec'>1</p>
                                            <p className='table_number_sec'>2</p>
                                            <p className='table_number_sec'>3</p>
                                            <p className='table_number_sec'>4</p>
                                            <p className='table_number_sec'>5</p>
                                            <p className='table_number_sec'>6</p>
                                            <p className='table_number_sec'>7</p>
                                            <p className='table_number_sec'>8</p>
                                            <p className='table_number_sec'>9</p>
                                        </div>
                                        <div className='result_big_small'>
                                            <p>S</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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