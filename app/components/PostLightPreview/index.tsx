import React from "react";
import { Clock, MessageCircle, Heart, Eye } from "lucide-react";
import { Caption, Body, Heading } from "../font";
import { formatRelativeTime } from "../../utils/formatTime";
import Image from "next/image";

interface PostLightPreviewProps {
  children: React.ReactNode;
  className?: string;
}

interface ContentProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

interface MetadataProps {
  timestamp: Date | string;
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
}

const PostContent: React.FC<ContentProps> = ({ title, subtitle, imageSrc, imageAlt }) => {
  return (
    <div className={`flex gap-3`}>
      <div className="flex-1">
        <Heading.H3 weight="medium" className="line-clamp-1">
          {title}
        </Heading.H3>
        {subtitle && (
          <Body.B2 weight="regular" className="text-gray-600 line-clamp-2 mt-1">
            {subtitle}
          </Body.B2>
        )}
      </div>
      {imageSrc && (
        <div className="flex-shrink-0 w-[75px] h-[75px] rounded-lg overflow-hidden ml-2">
          <Image src={imageSrc} alt={imageAlt || ""} width={75} height={75} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

const PostMetadata: React.FC<MetadataProps> = ({ timestamp, commentCount, likeCount, viewCount }) => {
  const formattedTime = formatRelativeTime(timestamp);

  return (
    <div className={`flex justify-end items-center gap-2 text-gray-500`}>
      <div className="flex items-center gap-1">
        <Clock size={14} className="text-gray-500" />
        <Caption.C1 weight="regular" className="text-gray-500">
          {formattedTime}
        </Caption.C1>
      </div>

      {commentCount !== undefined && commentCount > 0 && (
        <div className="flex items-center gap-1">
          <MessageCircle size={14} className="text-gray-500" />
          <Caption.C1 weight="regular" className="text-gray-500">
            {commentCount}
          </Caption.C1>
        </div>
      )}

      {likeCount !== undefined && likeCount > 0 && (
        <div className="flex items-center gap-1">
          <Heart size={14} className="text-gray-500" />
          <Caption.C1 weight="regular" className="text-gray-500">
            {likeCount}
          </Caption.C1>
        </div>
      )}

      <div className="flex items-center gap-1">
        <Eye size={14} className="text-gray-500" />
        <Caption.C1 weight="regular" className="text-gray-500">
          {viewCount}
        </Caption.C1>
      </div>
    </div>
  );
};

const PostLightPreview: React.FC<PostLightPreviewProps> & {
  Content: typeof PostContent;
  Metadata: typeof PostMetadata;
} = ({ children, className = "" }) => {
  return <div className={`flex flex-col w-full ${className} gap-3`}>{children}</div>;
};

PostLightPreview.Content = PostContent;
PostLightPreview.Metadata = PostMetadata;

export default PostLightPreview;
