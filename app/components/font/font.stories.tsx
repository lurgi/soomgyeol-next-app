import type { Meta, StoryObj } from "@storybook/react";
import { Title, Heading, Body, Caption } from "./index";

// 메타데이터 정의
const meta = {
  title: "Components/Font",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

// Title 컴포넌트 스토리
export const TitleComponent: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Title 컴포넌트</h2>
        <div className="space-y-2">
          <Title.T1 weight="bold">Title 1 Bold (2.8rem)</Title.T1>
          <Title.T1 weight="medium">Title 1 Medium (2.8rem)</Title.T1>
          <Title.T1>Title 1 Regular (2.8rem)</Title.T1>
        </div>
        <div className="space-y-2">
          <Title.T2 weight="bold">Title 2 Bold (2.6rem)</Title.T2>
          <Title.T2 weight="medium">Title 2 Medium (2.6rem)</Title.T2>
          <Title.T2>Title 2 Regular (2.6rem)</Title.T2>
        </div>
        <div className="space-y-2">
          <Title.T3 weight="bold">Title 3 Bold (2.4rem)</Title.T3>
          <Title.T3 weight="medium">Title 3 Medium (2.4rem)</Title.T3>
          <Title.T3>Title 3 Regular (2.4rem)</Title.T3>
        </div>
      </div>
    </div>
  ),
};

// Heading 컴포넌트 스토리
export const HeadingComponent: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Heading 컴포넌트</h2>
        <div className="space-y-2">
          <Heading.H1 weight="bold">Heading 1 Bold (2.2rem)</Heading.H1>
          <Heading.H1 weight="medium">Heading 1 Medium (2.2rem)</Heading.H1>
          <Heading.H1>Heading 1 Regular (2.2rem)</Heading.H1>
        </div>
        <div className="space-y-2">
          <Heading.H2 weight="bold">Heading 2 Bold (2.0rem)</Heading.H2>
          <Heading.H2 weight="medium">Heading 2 Medium (2.0rem)</Heading.H2>
          <Heading.H2>Heading 2 Regular (2.0rem)</Heading.H2>
        </div>
        <div className="space-y-2">
          <Heading.H3 weight="bold">Heading 3 Bold (1.8rem)</Heading.H3>
          <Heading.H3 weight="medium">Heading 3 Medium (1.8rem)</Heading.H3>
          <Heading.H3>Heading 3 Regular (1.8rem)</Heading.H3>
        </div>
      </div>
    </div>
  ),
};

// Body 컴포넌트 스토리
export const BodyComponent: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Body 컴포넌트</h2>
        <div className="space-y-2">
          <Body.B1 weight="bold">Body 1 Bold (1.8rem)</Body.B1>
          <Body.B1 weight="medium">Body 1 Medium (1.8rem)</Body.B1>
          <Body.B1>Body 1 Regular (1.8rem)</Body.B1>
        </div>
        <div className="space-y-2">
          <Body.B2 weight="bold">Body 2 Bold (1.6rem)</Body.B2>
          <Body.B2 weight="medium">Body 2 Medium (1.6rem)</Body.B2>
          <Body.B2>Body 2 Regular (1.6rem)</Body.B2>
        </div>
      </div>
    </div>
  ),
};

// Caption 컴포넌트 스토리
export const CaptionComponent: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Caption 컴포넌트</h2>
        <div className="space-y-2">
          <Caption.C1 weight="bold">Caption 1 Bold (1.4rem)</Caption.C1>
          <Caption.C1 weight="medium">Caption 1 Medium (1.4rem)</Caption.C1>
          <Caption.C1>Caption 1 Regular (1.4rem)</Caption.C1>
        </div>
      </div>
    </div>
  ),
};

// 모든 폰트 컴포넌트를 한 번에 보여주는 스토리
export const AllFontComponents: StoryObj = {
  render: () => (
    <div className="space-y-12 p-8">
      {/* Title 컴포넌트 */}
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Title 컴포넌트</h2>
        <div className="space-y-2">
          <Title.T1 weight="bold">Title 1 Bold (2.8rem)</Title.T1>
          <Title.T1 weight="medium">Title 1 Medium (2.8rem)</Title.T1>
          <Title.T1>Title 1 Regular (2.8rem)</Title.T1>
        </div>
        <div className="space-y-2">
          <Title.T2 weight="bold">Title 2 Bold (2.6rem)</Title.T2>
          <Title.T2 weight="medium">Title 2 Medium (2.6rem)</Title.T2>
          <Title.T2>Title 2 Regular (2.6rem)</Title.T2>
        </div>
        <div className="space-y-2">
          <Title.T3 weight="bold">Title 3 Bold (2.4rem)</Title.T3>
          <Title.T3 weight="medium">Title 3 Medium (2.4rem)</Title.T3>
          <Title.T3>Title 3 Regular (2.4rem)</Title.T3>
        </div>
      </div>

      {/* Heading 컴포넌트 */}
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Heading 컴포넌트</h2>
        <div className="space-y-2">
          <Heading.H1 weight="bold">Heading 1 Bold (2.2rem)</Heading.H1>
          <Heading.H1 weight="medium">Heading 1 Medium (2.2rem)</Heading.H1>
          <Heading.H1>Heading 1 Regular (2.2rem)</Heading.H1>
        </div>
        <div className="space-y-2">
          <Heading.H2 weight="bold">Heading 2 Bold (2.0rem)</Heading.H2>
          <Heading.H2 weight="medium">Heading 2 Medium (2.0rem)</Heading.H2>
          <Heading.H2>Heading 2 Regular (2.0rem)</Heading.H2>
        </div>
        <div className="space-y-2">
          <Heading.H3 weight="bold">Heading 3 Bold (1.8rem)</Heading.H3>
          <Heading.H3 weight="medium">Heading 3 Medium (1.8rem)</Heading.H3>
          <Heading.H3>Heading 3 Regular (1.8rem)</Heading.H3>
        </div>
      </div>

      {/* Body 컴포넌트 */}
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Body 컴포넌트</h2>
        <div className="space-y-2">
          <Body.B1 weight="bold">Body 1 Bold (1.8rem)</Body.B1>
          <Body.B1 weight="medium">Body 1 Medium (1.8rem)</Body.B1>
          <Body.B1>Body 1 Regular (1.8rem)</Body.B1>
        </div>
        <div className="space-y-2">
          <Body.B2 weight="bold">Body 2 Bold (1.6rem)</Body.B2>
          <Body.B2 weight="medium">Body 2 Medium (1.6rem)</Body.B2>
          <Body.B2>Body 2 Regular (1.6rem)</Body.B2>
        </div>
      </div>

      {/* Caption 컴포넌트 */}
      <div className="space-y-4">
        <h2 className="text-[2rem] font-bold">Caption 컴포넌트</h2>
        <div className="space-y-2">
          <Caption.C1 weight="bold">Caption 1 Bold (1.4rem)</Caption.C1>
          <Caption.C1 weight="medium">Caption 1 Medium (1.4rem)</Caption.C1>
          <Caption.C1>Caption 1 Regular (1.4rem)</Caption.C1>
        </div>
      </div>
    </div>
  ),
};
