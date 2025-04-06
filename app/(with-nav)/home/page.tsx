import Carousel from "@/app/components/Carousel";
import { Body, Caption, Title } from "@/app/components/font";
import PostLightPreview from "@/app/components/PostLightPreview";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const now = new Date();
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

const samplePosts = [
  {
    id: 1,
    image: "/yoga1.png",
    title: "하타요가 오전 클래스",
    content: "하루를 차분히 시작하고 싶은 분들을 위한 하타요가 클래스입니다. 호흡과 스트레칭 중심으로 진행됩니다.",
    location: "서울 마포구",
    viewCount: 42,
  },
  {
    id: 2,
    image: "/yoga2.png",
    title: "빈야사 요가 저녁반",
    content: "활력 넘치는 빈야사 요가로 하루의 피로를 풀어보세요. 동적인 움직임과 호흡이 조화롭게 이어집니다.",
    location: "서울 강남구",
    viewCount: 128,
  },
  {
    id: 3,
    image: "/yoga1.png",
    title: "아쉬탕가 요가 중급반",
    content: "아쉬탕가 요가의 기본 시퀀스를 익힌 분들을 위한 중급 클래스입니다. 더 깊은 자세와 호흡법을 배웁니다.",
    location: "서울 용산구",
    viewCount: 75,
  },
  {
    id: 4,
    image: "/yoga2.png",
    title: "쿤달리니 요가 특별 워크샵",
    content: "에너지 흐름을 깨우는 쿤달리니 요가 워크샵입니다. 명상과 만트라 챈팅이 포함됩니다.",
    location: "서울 송파구",
    viewCount: 95,
  },
  {
    id: 5,
    image: "/yoga1.png",
    title: "임산부 요가 클래스",
    content: "임신 중인 여성을 위한 안전하고 효과적인 요가 클래스입니다. 출산 준비에 도움이 됩니다.",
    location: "서울 서초구",
    viewCount: 63,
  },
];

const sampleFreePosts = [
  {
    id: 1,
    title: "요가매트 뭐 쓰시나요? 추천 좀 부탁드...",
    subtitle: "지금까지는 집에서 그냥 미끄럼방지 매트 깔고 했는데, 슬슬 진짜 요가매트를 하나 사보려...",
    timestamp: oneDayAgo,
    commentCount: 12,
    likeCount: 59,
    viewCount: 234,
    imageSrc: "/yoga1.png",
  },
  {
    id: 2,
    title: "요가 수련 일지 #3",
    subtitle: "오늘은 하타요가 기본 동작을 연습했습니다. 어깨가 많이 뻐근하네요.",
    timestamp: threeDaysAgo,
    commentCount: 8,
    likeCount: 0,
    viewCount: 120,
  },
  {
    id: 3,
    title: "첫 요가 클래스 후기",
    subtitle: "오늘 처음으로 요가 스튜디오에 가서 수업을 들었어요. 생각보다 어렵네요!",
    timestamp: oneWeekAgo,
    commentCount: 0,
    likeCount: 0,
    viewCount: 78,
  },
  {
    id: 4,
    title: "요가 초보자 질문이요",
    subtitle: "요가를 시작한 지 이제 2주 되었는데, 호흡법이 어려워요. 어떻게 하면 좋을까요?",
    timestamp: oneDayAgo,
    commentCount: 0,
    likeCount: 45,
    viewCount: 189,
  },
  {
    id: 5,
    title: "요가 초보자 질문이요",
    subtitle: "요가를 시작한 지 이제 2주 되었는데, 호흡법이 어려워요. 어떻게 하면 좋을까요?",
    timestamp: oneDayAgo,
    commentCount: 0,
    likeCount: 45,
    viewCount: 189,
  },
];

interface SubHeaderProps {
  children: React.ReactNode;
  href: string;
}

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <SubHeader href="/posts?type=workshop">워크샵 / 클래스</SubHeader>
        <Carousel posts={samplePosts} />
      </div>

      <div className="flex flex-col gap-4">
        <SubHeader href="/posts?type=free">자유 게시판</SubHeader>
        <div className="flex flex-col px-4 gap-4">
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
        <div className="px-4 w-full">
          <Link href="/posts?type=free" className="w-full">
            <Button className="w-full flex items-center justify-center gap-1 bg-blue-100 text-slate-800 px-2 py-1">
              <Body.B1>더보기</Body.B1>
              <span className="flex items-center">
                <ChevronRight className="w-5 h-5" style={{ minWidth: "20px", minHeight: "20px" }} />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SubHeader({ children, href }: SubHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4">
      <Title.T3 weight="medium">{children}</Title.T3>
      <Link href={href}>
        <button className="flex gap-1 bg-blue-100 rounded-full items-center px-2 py-1">
          <Caption>더보기</Caption>
          <ChevronRight className="w-4 h-4 font-medium" />
        </button>
      </Link>
    </div>
  );
}
