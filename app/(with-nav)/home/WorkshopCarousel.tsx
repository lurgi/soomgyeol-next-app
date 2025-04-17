"use client";

import Carousel from "@/app/components/Carousel";
import { useTopWorkshops } from "@/app/hooks/useTopWorkshops";
import { formatKRAddress } from "@/app/utils/formatKRAddress";
import { Workshop } from "@/types/workshop";

export default function WorkshopCarousel() {
  const { data: workshops } = useTopWorkshops();

  const carouselPosts = workshops?.map((workshop: Workshop) => ({
    id: workshop.id,
    image: workshop.image_url ?? (Math.random() < 0.5 ? "/yoga1.png" : "/yoga2.png"),
    title: workshop.title,
    content: workshop.overview || "",
    address: workshop.locationtext ? formatKRAddress(workshop.locationtext).address : "위치 정보 없음",
    viewCount: workshop.view || 0,
  }));

  return <Carousel posts={carouselPosts || []} />;
}
