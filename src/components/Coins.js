import React from 'react'
import Coinitem from './Coinitem'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24hr</p>
                <p className='mobile-hide'>Volume</p>
                <p className='mobile-hide'>Mkt Cap</p>
            </div>

            {props.coins.map((coins) => {
                
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin/>}  key={coins.id}>
                    <Coinitem coins={coins} />
                    </Link>
                );
            })}
        </div>
    </div>
  )
}

export default Coins