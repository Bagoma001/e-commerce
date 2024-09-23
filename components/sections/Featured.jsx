"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Buttons from "../utils/Buttons";
import Image from "next/image";
import Link from "next/link";

function Featured() {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function getFeaturedProducts() {
      try {
        const { data } = await axios(
          "http://127.0.0.1:3000/api/v1/products/featured-categories"
        );

        const { products } = data.data;
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    }

    getFeaturedProducts();
  }, [setProducts]);

  function goPrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Go to the previous slide
    }
  }

  function goNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Go to the next slide
    }
  }

  function checkRef() {
    console.log("check for ref");
  }

  return (
    <section className="feature-size">
      <div className="featured">
        <div>
          <h2>Featured Categories</h2>
        </div>

        <div className="button-flex">
          <Buttons button="featured-btn" ref={swiperRef} onClick={goPrev}>
            <HiOutlineArrowLongLeft className="btn" />
          </Buttons>

          <Buttons button="featured-btn-right" ref={swiperRef} onClick={goNext}>
            <HiOutlineArrowLongRight className="btn-right" />
          </Buttons>
        </div>
      </div>

      <div className="">
        <ul className="slideshow-container">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Get the Swiper instance
          >
            {products.map((el) => (
              <SwiperSlide key={el._id}>
                <div className="slide-content">
                  <Image
                    src={`http://127.0.0.1:3000/${el.imageCover}`}
                    alt={el.category}
                    className="quarter-image"
                    // fill
                    width="500"
                    height="200"
                  />
                  <Link href={"/products"} className="featured-link">
                    {el.category}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}

export default Featured;
