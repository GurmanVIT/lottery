import React from 'react'
import Wallet from './Wallet'
import Bottom_bar from '../Home/Bottom/Bottom_bar'

const index = () => {
    return (
        <div className='home_page'>
            <Wallet />
            <Bottom_bar />
        </div>
    )
}

export default index