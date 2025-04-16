import type { Meta, StoryObj } from "@storybook/react";
import LocationTags, { LocationTag } from "./index";
import { useState } from "react";

// Add global styles for Swiper in storybook
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const meta: Meta<typeof LocationTags> = {
  title: "Components/LocationTags",
  component: LocationTags,
  parameters: {
    // Using the global layout setting
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LocationTags>;

export const Default: Story = {
  args: {
    tags: ["하타", "서울", "부산", "제주도", "강원도"],
    selected: "하타",
  },
};

export const MultipleRows: Story = {
  args: {
    tags: ["하타", "서울", "부산", "제주도", "강원도", "인천", "대구", "광주", "울산", "세종"],
  },
};

const SwiperSlideComponent = () => {
  const [selected, setSelected] = useState("하타");
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <h3 className="mb-2 text-sm text-gray-500">스와이퍼/리스트 전환 기능</h3>
        <p className="text-xs text-gray-400 mb-2">
          • 초기: 스와이퍼 모드 - 좌우로 스와이프하여 태그 둘러보기
          <br />• 화살표 클릭: 리스트 모드로 전환 - 모든 태그를 한번에 보기
        </p>
        <LocationTags
          tags={["하타", "서울", "부산", "제주도", "강원도", "인천", "대구", "광주", "울산", "세종", "대전"]}
          selected="하타"
          onChange={setSelected}
        />
      </div>
      <div className="mb-4 pt-4 border-t border-gray-200">
        <h3 className="mb-2 text-sm text-gray-500">선택된 태그: {selected}</h3>
        <p className="text-xs text-gray-400">태그를 클릭하면 선택 상태가 변경됩니다</p>
      </div>
    </div>
  );
};

export const SwiperSlider: Story = {
  render: () => <SwiperSlideComponent />,
};

export const LocationTagStory: StoryObj<typeof LocationTag> = {
  name: "LocationTag Component",
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-sm text-gray-500">Selected State</h3>
        <LocationTag label="하타" isSelected={true} />
      </div>
      <div>
        <h3 className="mb-2 text-sm text-gray-500">Unselected State</h3>
        <LocationTag label="하타" isSelected={false} />
      </div>
    </div>
  ),
};
