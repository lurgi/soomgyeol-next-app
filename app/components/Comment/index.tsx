import { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Body, Caption } from "@/app/components/font";
import Avatar from "../Avatar";
import { Clock2, Heart, MessageSquare } from "lucide-react";
import { formatRelativeTime } from "@/app/utils/formatTime";

interface CommentBaseProps extends PropsWithChildren {
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
  likeCount: number;
  isLiked: boolean;
  toggleLike: () => void;
  className?: string;
}

interface CommentProps {
  className?: string;
  children?: ReactNode;
}

const Comment = ({ className, children }: CommentProps) => {
  return <div className={cn("flex flex-col gap-3", className)}>{children}</div>;
};

const BaseComment = ({
  author,
  content,
  createdAt,
  className,
  likeCount = 0,
  isLiked,
  toggleLike,
  type,
}: CommentBaseProps & { type: "main" | "sub" }) => {
  return (
    <div className={cn("flex gap-3 w-full", className)}>
      <Avatar name={author.name} avatar={author.avatar} size={32} />

      <div className="flex flex-col flex-1 items-start gap-3">
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Body.B2 className="font-medium text-slate-600">@{author.name}</Body.B2>
            </div>
            <Body.B2 className="text-slate-800">{content}</Body.B2>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              {type === "main" && (
                <button className={"flex gap-0.5 items-center text-slate-500"}>
                  <MessageSquare size={14} />
                  <Caption>답글달기</Caption>
                </button>
              )}
              <button className="flex gap-0.5 items-center text-slate-500" onClick={toggleLike}>
                <Heart size={14} className={cn(isLiked && "text-red-400 fill-red-400")} />
                {likeCount}
              </button>
            </div>

            <div className="flex gap-0.5 items-center text-slate-500">
              <Clock2 size={14} />
              {formatRelativeTime(createdAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainComment = (props: CommentBaseProps) => <BaseComment {...props} type="main" />;
const SubComment = (props: CommentBaseProps) => <BaseComment {...props} className="pl-10" type="sub" />;

Comment.Main = MainComment;
Comment.Sub = SubComment;

export default Comment;
