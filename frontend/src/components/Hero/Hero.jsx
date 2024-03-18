import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="hero-left">
                    <div className="hero-title">
                        <h1>
                            Discover <br />
                            Most Suitable <br />
                            Property

                        </h1>

                    </div>
                    <div className="hero-des">
                        <span>Find a variety of properties that siuat you very easily </span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>

                </div>

                <div className="hero-right flexCenter">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="nothing" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero