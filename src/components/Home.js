import React, { useEffect, useRef, useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img6 from "./img6.jpg";
import img4 from "./img4.jpg";
import img3 from "./img3.jpg";
import homeBanner from "./assets/homeBanner.png";
import empW from "./assets/empW.jpg";

const Home = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    // Set rendered to true when the component mounts or refreshes
    setRendered(true);
  }, []);

  const carouselRef = useRef(null);
  const currentIndexRef = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    if (rendered) {
      const carouselItems = carouselRef.current.querySelectorAll(
        "[data-carousel-item]"
      );

      const showItem = (index) => {
        currentIndexRef.current = index;
        carouselItems.forEach((item, i) => {
          item.classList.toggle("hidden", i !== index);
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

      const handleCarouselClick = () => {
        clearInterval(autoSlideIntervalRef.current);
      };

      // Check if the carouselRef.current is not null before adding the event listener
      if (carouselRef.current) {
        carouselRef.current.addEventListener("click", handleCarouselClick);
      }

      startSliding();

      return () => {
        // Remove the event listener only if it exists
        if (carouselRef.current) {
          carouselRef.current.removeEventListener("click", handleCarouselClick);
        }

        clearInterval(autoSlideIntervalRef.current);
      };
    }
  }, [rendered]);

  if (!rendered) {
    // If not yet rendered, return null or a loading message
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full h-full p-5 bg-[#f1f2f8]"
        data-carousel="slide"
        ref={carouselRef}
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            className="duration-10000 ease-in-out"
            data-carousel-item
          >
            <img
              src={img1}
              height={200}
              width={200}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 1"
            />
          </div>
          <div
            className="duration-1 h-48 w-full ease-in-out"
            data-carousel-item
          >
            <img
              src={img2}
              height={200}
              width={200}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 2"
            />
          </div>
          <div
            className="duration-1 ease-in-out w-full h-56"
            data-carousel-item
          >
            <img
              src={img6}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 3"
            />
          </div>
          <div
            className="duration-1 ease-in-out"
            data-carousel-item
          >
            <img
              src={img4}
              height={200}
              width={200}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 4"
            />
          </div>
          <div
            className="duration-1 ease-in-out"
            data-carousel-item
          >
            <img
              src={img3}
              height={800}
              width={800}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 5"
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col items-center md:items-baseline py-12 space-y-5">
            <h1 className="text-2xl font-medium md:text-4xl md:text-left text-pink-600">
              About Us
            </h1>
            <p className="text-lg mr-4 px-2 md:text-xl">
              The EmpoverHer Organization works to improve Pakistani women's
              lives in a constructive manner. In an effort to stop discriminatory
              behaviors, we fight for justice and gender equality. We empower
              women by educating them about their legal rights and safeguards
              through educational programs. We actively collaborate with local
              communities to solve the unique difficulties encountered by women
              through our community outreach activities. Programs for vocational
              training give women real-world skills that improve their
              employability and financial security. Initiatives to support women
              entrepreneurs help them launch and expand their own companies,
              resulting in economic empowerment. Since we know how important
              legal assistance is, we provide legal aid services to women who are
              dealing with difficulties or injustices. By addressing complex
              issues, this all-encompassing strategy seeks to build a more just
              and equal society for women in Pakistan. The organization's
              commitment is reflected in a holistic strategy that combines
              advocacy, education, vocational training, entrepreneurship, and
              legal support, empowering women to lead fulfilling lives and
              contribute meaningfully to their communities.
            </p>
          </div>
          <div className="right">
            <img className="flex w-full h-auto" src={empW} alt="" />
          </div>
        </div>

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col items-center md:items-baseline py-12 space-y-5">
            <h1 className="text-2xl font-medium md:text-4xl md:text-left text-pink-600">
              Challenges Faced By Women
            </h1>
            <p className="text-lg mr-4 px-2 md:text-xl">
              Pakistan, being a third-world country with a deeply entrenched
              conservative and patriarchal society, women often find themselves
              at the receiving end of systemic suppression. This suppression
              manifests in the denial of fundamental rights, including access to
              education, freedom in marriage choices, opportunities for work,
              and the exercise of voting rights. Despite the ongoing efforts of
              women in contemporary times to instigate positive change and
              assert their rights, the situation in rural areas remains
              remarkably resistant to transformation. Here, women encounter
              persistent challenges, and the broader societal framework
              continues to perpetuate a misogynistic environment.
            </p>
          </div>
        </div>

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col items-center md:items-baseline py-12 space-y-5">
            <h1 className="text-2xl font-medium md:text-4xl md:text-left text-pink-600">
              Our Objective
            </h1>
            <p className="text-lg mr-6 px-2 md:text-xl">
              Our primary objective is to offer assistance to women in need by
              providing them with financial support. This support goes towards
              helping them overcome financial hurdles that often obstruct their
              path towards empowerment. Additionally, we organize seminars and
              conferences to raise awareness about women's rights. These events
              are designed to educate the public and foster a more inclusive and
              just society in Pakistan.
            </p>
          </div>
          <div className="right">
            <img className="flex w-auto " src={homeBanner} alt="" />
          </div>
        </div>

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col items-center md:items-baseline py-5 ml-2 space-y-5">
            <p className="text-lg mr-6 px-2 md:text-xl">
              The organisation holds workshops aimed at helping women in
              Pakistan enhance their skills and talents. By equipping them with
              the necessary tools and knowledge, these workshops encourage women
              to become self-sufficient and independent. By focusing on various
              aspects, such as entrepreneurship, vocational training, or
              leadership development, we aim to empower women to excel in their
              chosen fields and emerge as strong and capable individuals.
            </p>
          </div>
        </div>

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col items-center md:items-baseline py-5 space-y-5">
            <p className="text-lg mr-6 px-2 md:text-xl">
              This community welfare organisation operates with the purpose of
              empowering women and advocating for their rights in Pakistan. It
              tackles the challenges faced by women living in a deeply
              patriarchal society and aims to bring about a positive change. By
              providing financial support, spreading awareness through seminars
              and conferences, and offering skill-enhancing workshops, we strive
              to empower women in Pakistan to become independent, confident, and
              influential members of society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
