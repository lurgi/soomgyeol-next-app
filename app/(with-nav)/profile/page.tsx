import Avatar from "@/app/components/Avatar";
import Divider from "@/app/components/Divider";
import { Body, Caption, Heading } from "@/app/components/font";
import PostLightPreview from "@/app/components/PostLightPreview";
import { Button } from "@/components/ui/button";
import { ChevronRight, Instagram } from "lucide-react";
import Link from "next/link";

const now = new Date();
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

const sampleDetail = {
  email: "lurgi9710@gmail.com",
  instagram: "kku_lurgi",
  description:
    "안녕하세요, 요가와 함께 호흡하고 흐름을 사랑하는 한별입니다. RYT200 자격 보유, 빈야사·하타·요가테라피까지 다양한 수업을 진행해왔어요. 진심을 다해 함께 호흡해요.",
};

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

export default function Profile() {
  return (
    <div className="mt-16 flex flex-col items-center gap-5">
      <ProfileHeader avatarUrl="/logo.svg" username="요기한별" />
      <ProfileDetail {...sampleDetail} />

      <Divider height={12} />

      <div className="flex flex-col gap-4">
        <SubHeader href="/profile/posts?type=myPosts">작성한 게시글</SubHeader>
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
      </div>

      <PrivateArea />
    </div>
  );
}

interface ProfileHeaderProps {
  avatarUrl: string;
  username: string;
}

function ProfileHeader({ avatarUrl, username }: ProfileHeaderProps) {
  return (
    <div className="px-6 w-full space-y-5">
      <div className=" flex gap-6 w-full justify-between items-center">
        <Avatar name={username} avatar={avatarUrl} size={64} />
        <div className="flex-1">
          <Heading.H3 weight="medium">@{username}</Heading.H3>
        </div>
      </div>

      <Link href="/profile/edit">
        <Button className="px-6 w-full bg-slate-200 text-slate-800 active:bg-slate-300" size="lg">
          <Body.B2>프로필 수정</Body.B2>
        </Button>
      </Link>
    </div>
  );
}

interface ProfileDetailProps {
  email: string;
  instagram: string;
  description: string;
}

function ProfileDetail({ email, instagram, description }: ProfileDetailProps) {
  return (
    <div className="px-6 py-2 space-y-5">
      <div className="flex flex-col gap-4">
        <Body.B1>{email}</Body.B1>
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4" />
          <Link href={`https://instagram.com/${instagram}`}>
            <Body.B2>https://instagram.com/{instagram}</Body.B2>
          </Link>
        </div>
      </div>
      <Body.B2>{description}</Body.B2>
    </div>
  );
}

interface SubHeaderProps {
  children: React.ReactNode;
  href: string;
}

function SubHeader({ children, href }: SubHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6">
      <Heading.H2 weight="medium">{children}</Heading.H2>
      <Link href={href}>
        <button className="flex gap-1 bg-blue-100 rounded-full items-center px-2 py-1 active:bg-blue-200">
          <Caption.C1>더보기</Caption.C1>
          <ChevronRight className="w-4 h-4 font-medium" />
        </button>
      </Link>
    </div>
  );
}

function PrivateArea() {
  return (
    <div className="flex flex-col w-full">
      <Divider height={12} />
      <PrivateAreaButton href="/profile" content="최근 본 게시글" />
      <Divider />
      <PrivateAreaButton href="/profile" content="좋아요 한 게시글" />
      <Divider />
      <PrivateAreaButton href="/profile" content="피드백 남기기" />
    </div>
  );
}

function PrivateAreaButton({ href, content }: { href: string; content: React.ReactNode }) {
  return (
    <Link href={href} className="flex justify-between items-center text-slate-800 px-6 py-5 active:bg-slate-100">
      <Heading.H2 weight="medium">{content}</Heading.H2>
      <ChevronRight className="w-4 h-4 font-medium" />
    </Link>
  );
}
