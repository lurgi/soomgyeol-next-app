"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, ChevronDown } from "lucide-react";
import { Body } from "../font";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface LocationTagProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const LocationTag: React.FC<LocationTagProps> = ({ label, isSelected = false, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-full transition-colors",
        isSelected
          ? "border-1 border-blue-100 bg-blue-100 text-blue-800"
          : "border-1 border-slate-300 text-slate-600 hover:bg-slate-200",
        className
      )}
    >
      <MapPin size={16} className={isSelected ? "text-blue-800" : "text-slate-600"} />
      <Body.B1 className={isSelected ? "text-blue-800" : "text-slate-600"}>{label}</Body.B1>
    </button>
  );
};

interface LocationTagsProps {
  tags: string[];
  selected?: string;
  onChange?: (selected: string) => void;
  className?: string;
}

const LocationTags: React.FC<LocationTagsProps> = ({ tags, selected, onChange, className }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [previousExpanded, setPreviousExpanded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const toggleExpand = () => {
    setPreviousExpanded(expanded);
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (previousExpanded && !expanded && swiperRef.current) {
      const swiper = swiperRef.current;
      const selectedIndex = tags.findIndex((tag) => tag === selected);

      if (selectedIndex >= 0) {
        setTimeout(() => {
          try {
            swiper.slideTo(selectedIndex, 500);
            console.log("Sliding to index:", selectedIndex);
          } catch (error) {
            console.error("Error sliding to index:", error);
          }
        }, 50);
      }
    }
  }, [expanded, previousExpanded, selected, tags]);

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      <div className="pr-10">
        <div className={cn("pr-10 px-1", expanded ? "opacity-0 h-0 overflow-hidden" : "")}>
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={8}
            slidesOffsetBefore={4}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              minimumVelocity: 0.02,
              momentum: true,
            }}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {tags.map((tag) => (
              <SwiperSlide key={tag} className="!w-auto">
                <LocationTag label={tag} isSelected={selected === tag} onClick={() => onChange?.(tag)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {expanded && (
          <div className="pr-10 px-2 bg-white flex flex-wrap gap-2">
            {tags.map((tag) => (
              <LocationTag key={tag} label={tag} isSelected={selected === tag} onClick={() => onChange?.(tag)} />
            ))}
          </div>
        )}
      </div>

      {tags.length > 1 && (
        <button
          onClick={toggleExpand}
          className="absolute right-0 top-[3px] flex items-center justify-center p-2 text-slate-600 hover:text-slate-800 transition-colors"
          aria-label={expanded ? "스와이퍼 보기로 전환" : "리스트 보기로 전환"}
          title={expanded ? "스와이퍼 보기로 전환" : "리스트 보기로 전환"}
        >
          <ChevronDown
            className={cn("w-6 h-6 transition-transform duration-500", expanded ? "transform rotate-180" : "")}
          />
        </button>
      )}
    </div>
  );
};

export default LocationTags;
