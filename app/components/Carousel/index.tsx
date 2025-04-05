"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Title } from "../font";
import CarouselCard from "../CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 캐러셀 헤더 컴포넌트
interface CarouselHeaderProps {
  children: React.ReactNode;
  showMoreButton?: boolean;
  onMoreClick?: () => void;
}

const CarouselHeader = ({ children, showMoreButton = true, onMoreClick }: CarouselHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <Title.T3 weight="medium">{children}</Title.T3>
      {showMoreButton && (
        <button onClick={onMoreClick} className="text-gray-500 text-sm flex items-center gap-1 hover:text-gray-700">
          더보기
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

interface PostData {
  id: string | number;
  image: string;
  title: string;
  content: string;
  location: string;
  viewCount: number;
}

interface CarouselBodyProps {
  posts: PostData[];
  className?: string;
}

const CarouselBody = ({ posts, className = "" }: CarouselBodyProps) => {
  return (
    <div className={`w-full ${className}`}>
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 8px;
          bottom: 0 !important;
          text-align: right !important;
          padding-right: 0px;
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
              image={post.image}
              title={post.title}
              content={post.content}
              location={post.location}
              viewCount={post.viewCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// 메인 캐러셀 컴포넌트 (합성 컴포넌트 패턴)
const Carousel = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full mb-8 flex flex-col gap-3">{children}</div>;
};

// 합성 컴포넌트 구성
Carousel.Header = CarouselHeader;
Carousel.Body = CarouselBody;

export default Carousel;
