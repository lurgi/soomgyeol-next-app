"use client";

import { MapPin, Eye } from "lucide-react";
import { Heading, Body, Caption } from "../font";
import Link from "next/link";

interface CarouselCardProps {
  image: string;
  title: string;
  content: string;
  location: string;
  address: string;
  viewCount: number;
  className?: string;
  id: string;
}

export default function CarouselCard({
  id,
  image,
  title,
  content,
  location,
  address,
  viewCount,
  className = "",
}: CarouselCardProps) {
  return (
    <Link
      href={`/posts/${id}`}
      className={`w-[240px] h-[280px] rounded-lg border border-gray-200 overflow-hidden flex flex-col ${className}`}
    >
      {/* 이미지 영역 */}
      <div className="relative w-full h-[120px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex flex-col p-3 flex-grow">
        <Heading.H3 weight="medium" className="mb-1 line-clamp-1">
          {title}
        </Heading.H3>
        <Body.B2 className="text-gray-700 mb-2 line-clamp-3">{content}</Body.B2>

        {/* 하단 정보 영역 */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-start gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-500 mt-1" />
            <div className="flex flex-col">
              <Caption.C1 weight="regular" className="text-gray-500">
                {address}
              </Caption.C1>
              <Caption.C1 weight="regular" className="text-gray-500">
                {location}
              </Caption.C1>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-gray-500" />
            <Caption.C1 weight="regular" className="text-gray-500">
              {viewCount}
            </Caption.C1>
          </div>
        </div>
      </div>
    </Link>
  );
}
