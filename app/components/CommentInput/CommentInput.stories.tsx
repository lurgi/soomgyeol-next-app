import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CommentInput from "./index";

const meta: Meta<typeof CommentInput> = {
  title: "Components/CommentInput",
  component: CommentInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CommentInput>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <CommentInput placeholder="댓글을 입력하세요" onSubmit={(text) => console.log("제출된 텍스트:", text)} />
    </div>
  ),
};

export const PostReply: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <CommentInput
        mode="post-reply"
        placeholder="댓글을 입력하세요"
        onSubmit={(text) => console.log("제출된 텍스트:", text)}
      />
    </div>
  ),
};

export const CommentReply: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <CommentInput
        mode="comment-reply"
        replyingTo="러기"
        placeholder="댓글을 입력하세요"
        onSubmit={(text) => console.log("제출된 텍스트:", text)}
      />
    </div>
  ),
};

export const AnimatedModeToggle: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<"default" | "post-reply" | "comment-reply">("default");

    return (
      <div className="w-full max-w-md p-4 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("default")} className="px-2 py-1 text-sm bg-gray-200 rounded">
            Default
          </button>
          <button onClick={() => setMode("post-reply")} className="px-2 py-1 text-sm bg-gray-200 rounded">
            Post Reply
          </button>
          <button onClick={() => setMode("comment-reply")} className="px-2 py-1 text-sm bg-gray-200 rounded">
            Comment Reply
          </button>
        </div>
        <CommentInput
          mode={mode}
          replyingTo="러기"
          placeholder="댓글을 입력하세요"
          onSubmit={(text) => console.log("제출된 텍스트:", text)}
        />
      </div>
    );
  },
};
