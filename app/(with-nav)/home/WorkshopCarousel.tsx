"use client";

import Carousel from "@/app/components/Carousel";
import { useTopWorkshops } from "@/app/hooks/useTopWorkshops";
import { formatKRAddress } from "@/app/utils/formatKRAddress";
import { Workshop } from "@/types/workshop";

export default function WorkshopCarousel() {
  const { data: workshops } = useTopWorkshops();

  if (!workshops || workshops.length === 0) {
    return <div className="px-6 py-8 text-center">현재 워크샵이 없습니다.</div>;
  }

  const carouselPosts = workshops.map((workshop: Workshop) => ({
    id: workshop.id,
    image: workshop.image_url || "/yoga1.png",
    title: workshop.title,
    content: workshop.overview || "",
    location: workshop.locationtext ? formatKRAddress(workshop.locationtext).name : "요가원 정보 없음",
    address: workshop.locationtext ? formatKRAddress(workshop.locationtext).address : "위치 정보 없음",
    viewCount: workshop.view || 0,
  }));

  return <Carousel posts={carouselPosts} />;
}
