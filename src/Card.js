import React from 'react'
import "./Card.css"

export default function Card () {
    return (
        <card className="card-container">
            <div className="card-1">
                <img className="card-image" src="katie-zaferes.png" alt="triathelete"></img>
                <p className="card-tag">SOLD OUT</p>
                <div className="card-stats">
                    <img className="card-star" src="star.png" alt="star"/>
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
                </div>
                <div className="card-text">
                    <h2>Life lessons with Katie Zaferes</h2>
                    <p><strong>From $136</strong> / person</p>
                </div>
            </div>
            <div className="card-2">
                <img className="card-image" src="wedding-photography.png" alt="bride"/>
                <p className="card-tag">ONLINE</p>
                <div className="card-stats">
                    <img className="card-star" src="star.png" alt="star"/>
                    <span>5.0</span>
                    <span className="gray">(30) • </span>
                    <span className="gray">USA</span>
                </div>
                <div className="card-text">
                    <h2>Learn wedding photography</h2>
                    <p><strong>From $125</strong> / person</p>
                </div>
            </div>
            <div className="card-3">
                <img className="card-image" src="mountain-bike.png" alt="bike"/>
                <div className="card-stats">
                    <img className="card-star" src="star.png" alt="star"/>
                    <span>4.8</span>
                    <span className="gray">(2) • </span>
                    <span className="gray">USA</span>
                </div>
                <div className="card-text">
                    <h2>Group Mountain Biking</h2>
                    <p><strong>From $50</strong> / person</p>
                </div>
            </div>
        </card>
    )
}