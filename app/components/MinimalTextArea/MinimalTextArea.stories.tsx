import type { Meta, StoryObj } from "@storybook/react";
import MinimalTextArea from "./index";
import { useState } from "react";

const meta: Meta<typeof MinimalTextArea> = {
  title: "Components/MinimalTextArea",
  component: MinimalTextArea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MinimalTextArea>;

export const Default: Story = {
  args: {
    placeholder: "소개를 입력하세요.",
    value: "안녕하세요! 저는 요가 강사입니다.",
    maxLength: 500,
  },
};

export const ShortText: Story = {
  args: {
    placeholder: "소개를 입력하세요.",
    value: "요가를 사랑하는 사람입니다.",
    maxLength: 500,
  },
};

export const LongText: Story = {
  args: {
    placeholder: "소개를 입력하세요.",
    value:
      "안녕하세요! 저는 요가와 명상을 통해 몸과 마음의 균형을 찾고자 노력하는 요가 강사입니다. 다양한 워크숍과 클래스를 통해 많은 분들과 함께 호흡하며 성장하고 싶습니다. 저의 수업은 초보자도 쉽게 따라올 수 있도록 구성되어 있으며, 무엇보다 즐겁고 편안한 분위기를 중요하게 생각합니다. 언제든 편하게 문의 주세요!",
    maxLength: 500,
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState("");

    return (
      <MinimalTextArea
        placeholder="직접 입력해보세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={200}
      />
    );
  },
};
