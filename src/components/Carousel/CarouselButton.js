import React, { useContext } from 'react';
import Context from './CarouselContext'
import style from './carousel.module.css';

const CarouselButton = () => {
    const { handleNext, handlePrev } = useContext(Context);

    return (
        <div className={style.buttonConatiner}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default CarouselButton