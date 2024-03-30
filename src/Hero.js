import React from 'react'
import './Hero.css'

export default function Hero () {
    return (
        <hero>
            <div className='photo-container'>
                <img className='photo-grid' src='photo-grid.png' alt='grid'></img>
            </div>
            <cta>
                <h1 className='hero-header'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities led by
                     on-of-a-kind hosts - all without leaving home.</p>
            </cta>
        </hero>
    )
}