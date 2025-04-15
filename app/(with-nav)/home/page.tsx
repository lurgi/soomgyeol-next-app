import { Caption, Title } from "@/app/components/font";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import WorkshopCarousel from "./WorkshopCarousel";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CarouselSkeleton from "../../components/_fallback/CarouselSkeleton";
import CarouselError from "../../components/_fallback/CarouselError";

interface SubHeaderProps {
  children: React.ReactNode;
  href: string;
}

export default function Home() {
  return (
    <div className="space-y-6 mt-18 md:mt-8">
      <div className="flex flex-col gap-3 md:gap-5">
        <SubHeader href="/posts?type=workshop">워크샵 / 클래스</SubHeader>
        <ErrorBoundary fallback={<CarouselError />}>
          <Suspense fallback={<CarouselSkeleton />}>
            <WorkshopCarousel />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* <div className="flex flex-col gap-4">
        <SubHeader href="/posts?type=free">자유 게시판</SubHeader>
        <div className="flex flex-col px-6 gap-4">
          {sampleFreePosts.map((post) => (
            <PostLightPreview key={post.id}>
              <PostLightPreview.Content
                title={post.title}
                subtitle={post.subtitle}
                imageSrc={post.imageSrc}
                imageAlt={post.title}
              />
              <PostLightPreview.Metadata
                timestamp={post.timestamp}
                commentCount={post.commentCount}
                likeCount={post.likeCount}
                viewCount={post.viewCount}
              />
            </PostLightPreview>
          ))}
        </div>

        <div className="px-6 w-full md:hidden">
          <Link href="/posts?type=free" className="w-full">
            <Button className="w-full flex items-center justify-center gap-1 bg-blue-100 text-slate-800 px-2 py-1">
              <Body.B1>더보기</Body.B1>
              <span className="flex items-center">
                <ChevronRight className="w-5 h-5" style={{ minWidth: "20px", minHeight: "20px" }} />
              </span>
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

function SubHeader({ children, href }: SubHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6">
      <Title.T3 weight="medium">{children}</Title.T3>
      <Link href={href}>
        <button className="flex gap-1 bg-blue-100 rounded-full items-center px-2 py-1 active:bg-blue-200 hover:bg-blue-200 hover:cursor-pointer">
          <Caption>더보기</Caption>
          <ChevronRight className="w-4 h-4 font-medium" />
        </button>
      </Link>
    </div>
  );
}
