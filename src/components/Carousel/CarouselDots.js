import React, { useContext } from 'react';
import Context from './CarouselContext';
import style from './carousel.module.css'

const CarouselDots = (props) => {
  const { carouselList, currentIndex, setCurrentIndex } = useContext(Context);

  const handleCarouselDots = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={style.dotContainer}>
      {carouselList.map((_, i) => {
        return (
          <div
            className={`${style.dots} ${currentIndex === i ? style.dotsActive : ''}`}
            onClick={() => handleCarouselDots(i)}>
          </div>
        )
      })}
    </div>
  )
}

export default CarouselDots