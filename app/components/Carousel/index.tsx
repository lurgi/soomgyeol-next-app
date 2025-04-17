"use client";

import React from "react";
import CarouselCard from "../CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useIsMobile from "@/app/hooks/useIsMobile";

interface PostData {
  id: string | number;
  image: string;
  title: string;
  content: string;
  address: string;
  viewCount: number;
}

interface CarouselProps {
  posts: PostData[];
}

const Carousel = ({ posts }: CarouselProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <style jsx global>{`
        .swiper-slide {
          cursor: pointer !important;
        }

        .swiper-pagination {
          position: relative;
          margin-top: 8px;
          bottom: 0 !important;
          text-align: right !important;
          padding-right: 16px;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0px 2px !important;
        }

        .swiper-pagination-bullet-active {
          width: 12px;
          background-color: var(--color-red-300);
          border-radius: 4px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #1f2937;
          background-color: rgba(255, 255, 255, 0.8);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
          opacity: 0.8;

          &:hover {
            background-color: var(--color-blue-200);
          }
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        centeredSlides={false}
        slidesOffsetBefore={isMobile ? 16 : 52}
        slidesOffsetAfter={isMobile ? 16 : 52}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          dynamicMainBullets: 5,
        }}
        navigation={true}
        className="mySwiper"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} style={{ width: "240px", height: "auto" }}>
            <CarouselCard
              id={String(post.id)}
              image={post.image}
              title={post.title}
              content={post.content}
              address={post.address}
              viewCount={post.viewCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
