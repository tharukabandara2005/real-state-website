const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="r-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}