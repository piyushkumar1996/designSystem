import React, { useCallback, useEffect, useRef, useState } from "react";
import CarouselContainer from "./CarouselContainer";
import CarouselContent from "./CarouselContent";
import CarouselButton from "./CarouselButton";
import CarouselDots from "./CarouselDots";
import Context from "./CarouselContext";

export const list = [
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
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselTimer = useRef(null);
  const imagesLength = list.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesLength);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  }, []);

  useEffect(() => {
    setCarouselList(list);
  }, []);

  useEffect(() => {
    if (!carouselList.length) return;
    if (!autoPlay) return;
    // Auto slide
    carouselTimer.current = setInterval(() => handleNext(), 1000);

    return () => {
      if (carouselTimer.current) clearInterval(carouselTimer.current);
    };
  }, [carouselList, autoPlay]);

  return (
    <Context.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        carouselList,
        itemWidth,
        handleNext,
        handlePrev,
      }}
    >
      <div
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
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
