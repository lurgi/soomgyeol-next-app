"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPin, MessageCircle, Heart, Eye, Calendar, MoreHorizontal, CalendarClock } from "lucide-react";
import { Body, Heading } from "../font";
import { formatDateToYYMMDD, formatTimeToKorean } from "@/app/utils/dateFormat";

interface PostDetailProps {
  className?: string;
  children: React.ReactNode;
}

interface ContentProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  author: {
    name: string;
    avatar?: string;
  };
}

interface SingleDateMetadataProps {
  type: "single";
  date: Date;
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location?: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

interface DateRangeMetadataProps {
  type: "range";
  startDate: Date;
  endDate: Date;
  daysOfWeek?: string[];
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location?: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

interface NoDateMetadataProps {
  type: "none";
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

type MetadataProps = SingleDateMetadataProps | DateRangeMetadataProps | NoDateMetadataProps;

const PostDetail = ({ className, children }: PostDetailProps) => {
  return <div className={cn("flex flex-col gap-5", className)}>{children}</div>;
};

const Content = ({ title, description, imageUrl, imageAlt, author }: ContentProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image src={imageUrl} alt={imageAlt || title} fill className="object-cover" />
      </div>

      <div className="flex justify-between px-4">
        <div className="flex items-center gap-3">
          {author.avatar ? (
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src={author.avatar} alt={`${author.name}의 프로필 이미지`} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-600 text-sm">{author.name.charAt(0)}</span>
            </div>
          )}
          <Heading.H3 className="text-slate-800" weight="medium">
            @{author.name}
          </Heading.H3>
        </div>

        <MoreHorizontal size={24} className="text-slate-800" />
      </div>

      <div className="flex flex-col gap-2 px-4">
        <Heading.H1 weight="medium" className="text-slate-800">
          {title}
        </Heading.H1>

        <Body.B1 className="text-slate-600">{description}</Body.B1>
      </div>
    </div>
  );
};

const Metadata = (props: MetadataProps) => {
  return (
    <div className="flex flex-col gap-5 py-4 px-4">
      {props.type !== "none" && (
        <div className="flex flex-col gap-3">
          {props.type === "range" && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Calendar size={24} className="text-slate-500" />
                <Body.B1 className="text-slate-600">
                  {formatDateToYYMMDD(props.startDate)} ~ {formatDateToYYMMDD(props.endDate)}
                </Body.B1>
              </div>
              {props.daysOfWeek && props.daysOfWeek.length > 0 && (
                <div className="flex items-center gap-2 ml-8">
                  <Body.B1 className="text-slate-600">
                    {props.daysOfWeek.join(", ")} {formatTimeToKorean(props.startDate)}
                  </Body.B1>
                </div>
              )}
            </div>
          )}

          {props.type === "single" && (
            <div className="flex items-center gap-2">
              <CalendarClock size={24} className="text-slate-500" />
              <Body.B1 className="text-slate-600">
                {formatDateToYYMMDD(props.date)} {formatTimeToKorean(props.date)}
              </Body.B1>
            </div>
          )}

          {(props.type === "single" || props.type === "range") && props.location && (
            <div className="flex items-center gap-2">
              <MapPin size={24} className="text-slate-500" />
              <Body.B1 className="text-slate-600">{props.location}</Body.B1>
            </div>
          )}
        </div>
      )}

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-1">
          <button
            onClick={props.onLikeClick}
            className="flex items-center gap-1 focus:outline-none"
            aria-label="좋아요"
          >
            <Heart
              size={24}
              className={cn(
                "transition-colors",
                props.isLiked ? "text-red-500 fill-red-500" : "text-slate-500 hover:text-red-300"
              )}
            />
            <Body.B1 className={cn(props.isLiked ? "text-red-500" : "text-slate-600")}>{props.likeCount || 0}</Body.B1>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MessageCircle size={16} className="text-slate-500" />
            <Body.B2 className="text-slate-500">{props.commentCount || 0}</Body.B2>
          </div>

          <div className="flex items-center gap-1">
            <Eye size={16} className="text-slate-500" />
            <Body.B2 className="text-slate-500">{props.viewCount || 0}</Body.B2>
          </div>
        </div>
      </div>
    </div>
  );
};

PostDetail.Content = Content;
PostDetail.Metadata = Metadata;

export default PostDetail;
