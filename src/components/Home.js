import React, { useEffect, useRef } from 'react';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img7 from "./img7.jpg";
import img4 from "./img4.jpg";
import img3 from "./img3.jpg";

const Home = () => {
  const carouselRef = useRef(null);
  const currentIndexRef = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    const carouselItems = carouselRef.current.querySelectorAll('[data-carousel-item]');

    const showItem = (index) => {
      currentIndexRef.current = index;
      carouselItems.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });
    };

    const handleNext = () => {
      const newIndex = (currentIndexRef.current + 1) % carouselItems.length;
      showItem(newIndex);
    };

    const startSliding = () => {
      autoSlideIntervalRef.current = setInterval(() => {
        handleNext();
      }, 4000); // Change this interval as per your requirement
    };

    carouselRef.current.addEventListener('click', () => {
      clearInterval(autoSlideIntervalRef.current);
    });

    startSliding();

    return () => {
      carouselRef.current.removeEventListener('click', handleNext);
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  return (
    <div id="default-carousel" className="relative w-full h-full p-11"  data-carousel="slide" ref={carouselRef}>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-10000 ease-in-out" data-carousel-item>
          <img src={img1} height={200} width={200} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
        </div>

        <div className="duration-1 h-48 w-full ease-in-out" data-carousel-item>
          <img src={img2} height={200} width={200} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
        </div>

        <div className="duration-1 ease-in-out w-full h-56" data-carousel-item>
          <img src={img7} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
        </div>

        <div className="duration-1 ease-in-out" data-carousel-item>
          <img src={img4} height={200} width={200} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4" />
        </div>

        <div className="duration-1 ease-in-out" data-carousel-item>
          <img src={img3} height={800} width={800} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 5" />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>

      {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span> */}
      {/* </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}


    </div>
  );
}

export default Home;
