import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <dic className="paddings innerWidth flexCenter f-container">
                <div className='flexColStart f-left'>
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">
                        Our Vision is to make all people <br />
                        the best place to live for them

                    </span>

                </div>
                <div className='flexColStart f-right'>
                    <span className='primaryText'>
                        Information

                    </span>
                    <span className='secondaryText'>
                        Colombo 3 , Sri Lanka
                    </span>
                    <div className='flexCenter f-menu'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>Ablut Us</span>
                    </div>

                </div>
            </dic>
        </section>
    )
}

export default Footer