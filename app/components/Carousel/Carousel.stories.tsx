import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./index";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// 샘플 데이터
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

// 기본 캐러셀
export const Default: Story = {
  render: () => (
    <div className="p-4">
      <Carousel>
        <Carousel.Header>워크샵 / 클래스</Carousel.Header>
        <Carousel.Body posts={samplePosts} />
      </Carousel>
    </div>
  ),
};

// 더보기 버튼 없는 캐러셀
export const WithoutMoreButton: Story = {
  render: () => (
    <div className="p-4">
      <Carousel>
        <Carousel.Header showMoreButton={false}>인기 클래스</Carousel.Header>
        <Carousel.Body posts={samplePosts.slice(0, 3)} />
      </Carousel>
    </div>
  ),
};

// 여러 캐러셀 스택
export const MultipleCarousels: Story = {
  render: () => (
    <div className="p-4 space-y-8">
      <Carousel>
        <Carousel.Header>워크샵 / 클래스</Carousel.Header>
        <Carousel.Body posts={samplePosts} />
      </Carousel>

      <Carousel>
        <Carousel.Header>추천 클래스</Carousel.Header>
        <Carousel.Body posts={samplePosts.slice().reverse()} />
      </Carousel>
    </div>
  ),
};
