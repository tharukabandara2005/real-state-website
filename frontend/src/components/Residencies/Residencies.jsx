import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    const SliderButtons = () => {
        const swiper = useSwiper();
    
        return (
            <div className="r-buttons flexCenter">
                <button onClick={() => swiper.slidePrev()}>&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        )
    }
    
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Choices</span>
                </div>
        
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart">
                                <img src={card.image} alt="none" />
                                <span className="secondaryText">
                                    <span style={{ color: "orange" }}>
                                        $
                                    </span>
                                    <span>
                                        {card.price}
                                    </span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;
