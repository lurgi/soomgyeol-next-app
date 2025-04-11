"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPin, MessageCircle, Heart, Eye } from "lucide-react";
import { Body, Caption, Heading } from "../font";
import Link from "next/link";
import { formatDateToMMDD, formatTimeToKorean, formatDateRange } from "@/app/utils/dateFormat";

interface PostPreviewProps {
  id?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

interface ContentProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt?: string;
}

// Single date event metadata props
interface SingleDateMetadataProps {
  type: 'single';
  date: Date;
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location: string;
}

// Date range event metadata props
interface DateRangeMetadataProps {
  type: 'range';
  startDate: Date;
  endDate: Date;
  daysOfWeek?: string[];
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location: string;
}

// Union type for metadata props
type MetadataProps = SingleDateMetadataProps | DateRangeMetadataProps;

const PostPreview = ({ id, href = "", className, children }: PostPreviewProps) => {
  const linkHref = id ? `/posts/${id}` : href;

  return (
    <Link href={linkHref} className={cn("block", className)}>
      <div className="flex flex-col gap-3">{children}</div>
    </Link>
  );
};

const Content = ({ title, subtitle, imageUrl, imageAlt }: ContentProps) => {
  return (
    <div className="flex gap-3">
      <div className="relative aspect-square rounded-lg overflow-hidden w-[94px] h-[94px]">
        <Image src={imageUrl} alt={imageAlt || title} fill sizes="94px" className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <Heading.H3 weight="medium" className="text-slate-800 line-clamp-2">
          {title}
        </Heading.H3>
        <Body.B2 className="text-slate-600 line-clamp-3">{subtitle}</Body.B2>
      </div>
    </div>
  );
};

const Metadata = (props: MetadataProps) => {
  // Format date string based on the type of date (single or range)
  const getFormattedDateString = () => {
    if (props.type === 'single') {
      const dateStr = formatDateToMMDD(props.date);
      const timeStr = formatTimeToKorean(props.date);
      return `${dateStr} ${timeStr}`;
    } else {
      return formatDateRange(props.startDate, props.endDate, props.daysOfWeek);
    }
  };

  return (
    <div className="flex justify-between items-end text-slate-500">
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5">
          <MapPin size={16} className="flex-shrink-0" />
          <Caption.C1 className="truncate">{props.location}</Caption.C1>
        </div>
        <div className="flex items-center gap-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M8 4.66667V8L10 10M13.3333 8C13.3333 10.9455 10.9455 13.3333 8 13.3333C5.05448 13.3333 2.66667 10.9455 2.66667 8C2.66667 5.05448 5.05448 2.66667 8 2.66667C10.9455 2.66667 13.3333 5.05448 13.3333 8Z"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Caption.C1>{getFormattedDateString()}</Caption.C1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {props.commentCount !== undefined && props.commentCount > 0 && (
          <div className="flex items-center gap-0.5">
            <MessageCircle size={16} />
            <Caption.C1>{props.commentCount}</Caption.C1>
          </div>
        )}
        {props.likeCount !== undefined && props.likeCount > 0 && (
          <div className="flex items-center gap-0.5">
            <Heart size={16} />
            <Caption.C1>{props.likeCount}</Caption.C1>
          </div>
        )}
        <div className="flex items-center gap-0.5">
          <Eye size={16} />
          <Caption.C1>{props.viewCount}</Caption.C1>
        </div>
      </div>
    </div>
  );
};

PostPreview.Content = Content;
PostPreview.Metadata = Metadata;

export default PostPreview;
