import type { Meta, StoryObj } from "@storybook/react";
import MobileLayout from "./index";

const meta: Meta<typeof MobileLayout> = {
  title: "Layouts/MobileLayout",
  component: MobileLayout,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileLayout>;

// 기본 레이아웃 (메인 헤더)
export const Default: Story = {
  render: () => (
    <MobileLayout>
      <MobileLayout.Header type="main" title="숨결" hasIcons={true} />
      <MobileLayout.Main>
        <h2 className="text-xl font-bold mb-4">메인 페이지</h2>
        <p className="mb-4">스크롤을 위아래로 움직여보세요. 헤더가 나타나고 사라집니다.</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-4">
            스크롤 테스트를 위한 콘텐츠 {i + 1}
          </p>
        ))}
      </MobileLayout.Main>
      <MobileLayout.Navbar activeItem="home" />
    </MobileLayout>
  ),
};

// 상세 페이지 레이아웃 (뒤로가기 버튼이 있는 헤더)
export const DetailPage: Story = {
  render: () => (
    <MobileLayout>
      <MobileLayout.Header type="detail" title="상세 페이지" hasIcons={true} />
      <MobileLayout.Main>
        <h2 className="text-xl font-bold mb-4">상세 페이지</h2>
        <p className="mb-4">헤더에 뒤로가기 버튼이 표시됩니다.</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-4">
            스크롤 테스트를 위한 콘텐츠 {i + 1}
          </p>
        ))}
      </MobileLayout.Main>
      <MobileLayout.Navbar activeItem="document" />
    </MobileLayout>
  ),
};

// 편집 페이지 레이아웃 (아이콘 없는 헤더)
export const EditPage: Story = {
  render: () => (
    <MobileLayout>
      <MobileLayout.Header type="detail" title="편집 페이지" hasIcons={false} />
      <MobileLayout.Main>
        <h2 className="text-xl font-bold mb-4">편집 페이지</h2>
        <p className="mb-4">헤더에 아이콘이 없습니다.</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-4">
            스크롤 테스트를 위한 콘텐츠 {i + 1}
          </p>
        ))}
      </MobileLayout.Main>
      <MobileLayout.Navbar activeItem="edit" />
    </MobileLayout>
  ),
};

// 프로필 페이지 레이아웃
export const ProfilePage: Story = {
  render: () => (
    <MobileLayout>
      <MobileLayout.Header type="main" title="프로필" hasIcons={true} />
      <MobileLayout.Main>
        <h2 className="text-xl font-bold mb-4">프로필 페이지</h2>
        <p className="mb-4">사용자 프로필 정보가 표시됩니다.</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-4">
            스크롤 테스트를 위한 콘텐츠 {i + 1}
          </p>
        ))}
      </MobileLayout.Main>
      <MobileLayout.Navbar activeItem="profile" />
    </MobileLayout>
  ),
};
