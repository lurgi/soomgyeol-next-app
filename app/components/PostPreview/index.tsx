"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin, MessageCircle, Heart, Eye, CalendarClock, Building2 } from "lucide-react";
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
  type: "single";
  date?: Date;
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location?: string;
  place?: string;
}

// Date range event metadata props
interface DateRangeMetadataProps {
  type: "range";
  startDate: Date;
  endDate: Date;
  daysOfWeek?: string[];
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location?: string;
  place?: string;
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
        <img src={imageUrl} alt={imageAlt || title} className="w-full h-full object-cover" />
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
  const getFormattedDateString = () => {
    if (props.type === "single" && props.date) {
      const dateStr = formatDateToMMDD(props.date);
      const timeStr = formatTimeToKorean(props.date);
      return `${dateStr} ${timeStr}`;
    } else {
      return props.type === "range" && props.startDate && props.endDate
        ? formatDateRange(props.startDate, props.endDate, props.daysOfWeek)
        : "";
    }
  };

  const formattedDateString = getFormattedDateString();

  return (
    <div className="flex justify-between items-end text-slate-500">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-0.5">
          <MapPin size={16} className="flex-shrink-0" />
          <Body.B2 className="truncate">{props.location || "위치 정보 없음"}</Body.B2>
        </div>
        {props.place && (
          <div className="flex items-center gap-0.5">
            <Building2 size={16} className="flex-shrink-0" />
            <Body.B2 className="truncate">{props.place}</Body.B2>
          </div>
        )}
        {formattedDateString && (
          <div className="flex items-center gap-0.5">
            <CalendarClock size={16} className="flex-shrink-0" />
            <Body.B2>{formattedDateString}</Body.B2>
          </div>
        )}
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
