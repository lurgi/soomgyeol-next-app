import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./index";
import { Body, Heading } from "@/app/components/font";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    // Using the global layout setting
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultTab: "tab1",
    className: "w-full",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab id="tab1">첫 번째 탭</Tabs.Tab>
      <Tabs.Tab id="tab2">두 번째 탭</Tabs.Tab>
      <Tabs.Tab id="tab3">세 번째 탭</Tabs.Tab>

      <Tabs.Content tabId="tab1">
        <div className="p-4 bg-gray-50 rounded-md">
          <Body.B1>첫 번째 탭 내용입니다.</Body.B1>
          <p className="mt-2">여기에 첫 번째 탭에 표시할 내용을 넣습니다.</p>
        </div>
      </Tabs.Content>

      <Tabs.Content tabId="tab2">
        <div className="p-4 bg-gray-50 rounded-md">
          <Body.B1>두 번째 탭 내용입니다.</Body.B1>
          <p className="mt-2">여기에 두 번째 탭에 표시할 내용을 넣습니다.</p>
        </div>
      </Tabs.Content>

      <Tabs.Content tabId="tab3">
        <div className="p-4 bg-gray-50 rounded-md mt-4">
          <Body.B1>세 번째 탭 내용입니다.</Body.B1>
          <p className="mt-2">여기에 세 번째 탭에 표시할 내용을 넣습니다.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
};

export const CustomStyling: Story = {
  args: {
    defaultTab: "tab1",
    className: "w-full max-w-md",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab id="tab1" className="bg-blue-50 rounded-t-lg hover:bg-blue-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span>프로필</span>
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" className="bg-green-50 rounded-t-lg hover:bg-green-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span>설정</span>
        </div>
      </Tabs.Tab>

      <Tabs.Content tabId="tab1" className="border border-blue-200 rounded-b-lg">
        <div className="p-4">
          <Heading.H2>프로필 정보</Heading.H2>
          <Body.B1 className="mt-2">사용자 프로필 정보를 관리할 수 있습니다.</Body.B1>
        </div>
      </Tabs.Content>

      <Tabs.Content tabId="tab2" className="border border-green-200 rounded-b-lg">
        <div className="p-4">
          <Heading.H2>설정</Heading.H2>
          <Body.B1 className="mt-2">앱 설정을 변경할 수 있습니다.</Body.B1>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
};

export const UnderlinedTabs: Story = {
  args: {
    defaultTab: "tab1",
    className: "w-full max-w-md",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab
        id="tab1"
        className="pb-2 px-1 text-base font-medium border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600"
      >
        워크샵
      </Tabs.Tab>
      <Tabs.Tab
        id="tab2"
        className="pb-2 px-1 text-base font-medium border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600"
      >
        자유 게시판
      </Tabs.Tab>

      <Tabs.Content tabId="tab1">
        <div className="p-4">
          <Body.B1>워크샵 목록이 표시됩니다.</Body.B1>
        </div>
      </Tabs.Content>

      <Tabs.Content tabId="tab2">
        <div className="p-4">
          <Body.B1>자유 게시판 글이 표시됩니다.</Body.B1>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
};
