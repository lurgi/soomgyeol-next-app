import type { Meta, StoryObj } from "@storybook/react";
import CarouselCard from "./index";

const meta: Meta<typeof CarouselCard> = {
  title: "Components/CarouselCard",
  component: CarouselCard,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    content: { control: "text" },
    location: { control: "text" },
    viewCount: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof CarouselCard>;

// 기본 카드
export const Default: Story = {
  args: {
    image: "/yoga1.png",
    title: "하타요가 오전 클래스",
    content: "하루를 차분히 시작하고 싶은 분들을 위한 하타요가 클래스입니다. 호흡과 스트레칭 중심으로 진행됩니다.",
    location: "서울 마포구",
    viewCount: 42,
  },
};

// 다른 이미지를 사용한 카드
export const AlternateImage: Story = {
  args: {
    image: "/yoga2.png",
    title: "빈야사 요가 저녁반",
    content: "활력 넘치는 빈야사 요가로 하루의 피로를 풀어보세요. 동적인 움직임과 호흡이 조화롭게 이어집니다.",
    location: "서울 강남구",
    viewCount: 128,
  },
};

// 긴 텍스트 테스트
export const LongText: Story = {
  args: {
    image: "/yoga1.png",
    title: "아주 긴 제목의 요가 클래스로 텍스트 오버플로우를 테스트합니다",
    content: "이 설명은 매우 길게 작성되어 있어서 컴포넌트의 텍스트 오버플로우 처리 방식을 테스트하기 위한 목적입니다. 여러 줄에 걸쳐 표시되는지 확인하고 말줄임표가 제대로 표시되는지 확인합니다.",
    location: "서울 용산구",
    viewCount: 75,
  },
};
