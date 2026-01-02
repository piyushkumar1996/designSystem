import React, { useContext, useRef, useLayoutEffect, useState } from 'react';
import Context from './CarouselContext';
import style from './carousel.module.css';

const CarouselContent = () => {
  const { carouselList, currentIndex, itemWidth } = useContext(Context);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // dynamic/responsive item width
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    let newOffset = 0;

    // sum width of items before currentIndex
    for (let i = 0; i < currentIndex; i++) {
      newOffset += children[i]?.offsetWidth || 0;
    }

    setOffset(newOffset);
  }, [currentIndex, carouselList]);

  return (
    <div
      ref={containerRef}
      className={style.imgContainer}
      style={{
        transform: `translateX(-${offset}px)`,  // dynamic/responsive item width
        // transform: `translateX(-${itemWidth * currentIndex}px)`,
      }}
    >
      {carouselList.map((item) => (
        <img
          key={item.id}
          className={style.carouselImg}
          src={item.image}
          alt={item.title}
          id={item.id}
          // src={index === currentIndex ? item : ''}
          // data-src={item}
        />
      ))}
    </div>
  );
};

export default CarouselContent;