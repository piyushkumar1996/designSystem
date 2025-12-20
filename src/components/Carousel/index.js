import React, { useEffect, useRef, useState } from 'react';
import CarouselContainer from './CarouselContainer';
import CarouselContent from './CarouselContent';
import CarouselButton from './CarouselButton';
import CarouselDots from './CarouselDots';
import Context from './CarouselContext';

const list = [
    {
      id: 1,
      title: "Mountain View",
      image: "https://picsum.photos/id/1018/800/400",
    },
    {
      id: 2,
      title: "Serene Lake",
      image: "https://picsum.photos/id/1015/800/400",
    },
    {
      id: 3,
      title: "Forest Path",
      image: "https://picsum.photos/id/1016/800/400",
    },
    {
      id: 4,
      title: "Sunny Beach",
      image: "https://picsum.photos/id/1020/800/400",
    },
    {
      id: 5,
      title: "Countryside Fields",
      image: "https://picsum.photos/id/1024/800/400",
    },
  ];
  

const itemWidth = 500;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselList, setCarouselList] = useState([]);
    const carouselTimer = useRef(null);
    const imagesLength = list.length

    const resetTimer = () => {
        if (carouselTimer.current) clearInterval(carouselTimer.current);
    };

    const startTimer = () => {
        carouselTimer.current = setInterval(() => handleNext(), 1000);
    }

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % imagesLength);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + imagesLength) % imagesLength);
    };

    useEffect(() => {
        setCarouselList(list);
    }, []);

    useEffect(() => {
        if (!carouselList.length) return;

        // Auto slide
        startTimer();

        return () => resetTimer();
    }, [carouselList]);

    return (
        <Context.Provider value={{
            currentIndex,
            setCurrentIndex,
            carouselList,
            itemWidth,
            handleNext,
            handlePrev,
            resetTimer,
            startTimer
        }}>
            <div
                onMouseEnter={resetTimer}
                onMouseLeave={startTimer}
            >
                <CarouselContainer>
                    <CarouselContent />
                </CarouselContainer>
                <CarouselDots />
                <CarouselButton />
            </div>
        </Context.Provider>
    );
};

export default Carousel;
