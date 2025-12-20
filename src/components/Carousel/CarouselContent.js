import React, { useContext } from 'react';
import Context from './CarouselContext'
import style from './carousel.module.css'

const CarouselContent = () => {
    const { carouselList, currentIndex, itemWidth } = useContext(Context);

    return (
        <div className={style.imgContainer} style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
            {carouselList.map((item, _) => (
                <img
                    className={style.carouselImg}
                    src={item.image}
                    alt={item.title}
                    id={item.id}
                    // src={index === currentIndex ? item : ''}
                    // data-src={item}
                />
            ))}
        </div>
    )
}

export default CarouselContent