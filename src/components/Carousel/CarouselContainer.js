import React from 'react';
import style from "./carousel.module.css"

const CarouselContainer = ({ children }) => {
    return (
        <div className={style.carouselContainer}>
            {children}
        </div>
    )
}

export default CarouselContainer