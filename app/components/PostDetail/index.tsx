"use client";

import { cn } from "@/lib/utils";
import { Eye, LucideProps } from "lucide-react";
import { Body, Heading, Title } from "../font";
import Avatar from "../Avatar";

interface DropdownItemProps {
  label: string;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  onClick: () => void;
}

interface PostDetailProps {
  className?: string;
  children: React.ReactNode;
}

interface ContentProps {
  title: string;
  description: string;
}

interface BaseMetadataProps {
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  location?: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

interface SingleDateMetadataProps extends BaseMetadataProps {
  type: "single";
  date: Date;
  location?: string;
}

interface DateRangeMetadataProps extends BaseMetadataProps {
  type: "range";
  startDate: Date;
  endDate: Date;
  daysOfWeek?: string[];
  location?: string;
}

interface NoDateMetadataProps extends BaseMetadataProps {
  type: "none";
}

type MetadataProps = SingleDateMetadataProps | DateRangeMetadataProps | NoDateMetadataProps;

const PostDetail = ({ className, children }: PostDetailProps) => {
  return <div className={cn("flex flex-col md:gap-5", className)}>{children}</div>;
};

const HeaderRow = ({ author }: { author: { name: string; avatar?: string }; dropdownItems?: DropdownItemProps[] }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between px-6">
      <div className="flex items-center gap-3">
        <Avatar name={author.name} avatar={author.avatar} size={36} />
        <Heading.H3 className="text-slate-800" weight="medium">
          @{author.name}
        </Heading.H3>
      </div>

      {/* <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex items-center justify-center rounded-full w-8 h-8 focus:outline-none",
              isDropdownOpen && "bg-slate-100"
            )}
          >
            <MoreHorizontal size={24} className="text-slate-800" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="text-slate-800">
          {dropdownItems.map((item, index) => (
            <DropdownMenuItem key={index} onClick={item.onClick}>
              <item.Icon size={16} />
              <Body.B1>{item.label}</Body.B1>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

const Image = ({ imageUrl, imageAlt, title }: { imageUrl: string; imageAlt?: string; title: string }) => {
  return (
    <div className="relative w-full overflow-hidden sm:rounded-xl max-w-[640px] mx-auto">
      <img src={imageUrl} alt={imageAlt || title} className="w-full h-full object-fit" />
    </div>
  );
};

const Content = ({ title, description }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4 px-6">
      <Title.T1 weight="medium" className="text-slate-800">
        {title}
      </Title.T1>

      <Body.B1 className="text-slate-800 whitespace-pre-line">{description}</Body.B1>
    </div>
  );
};

const Metadata = (props: MetadataProps) => {
  return (
    <div className="flex flex-col gap-5 py-4 px-6">
      {/* {props.type !== "none" && (
        <div className="flex flex-col gap-3">
          {props.type === "range" && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Calendar size={22} className="text-slate-500" />
                <Body.B2 className="text-slate-600">
                  {formatDateToYYMMDD(props.startDate)} ~ {formatDateToYYMMDD(props.endDate)}
                </Body.B2>
              </div>
              {props.daysOfWeek && props.daysOfWeek.length > 0 && (
                <div className="flex items-center gap-2 ml-8">
                  <Body.B2 className="text-slate-600">
                    {props.daysOfWeek.join(", ")} {formatTimeToKorean(props.startDate)}
                  </Body.B2>
                </div>
              )}
            </div>
          )}

          {props.type === "single" && (
            <div className="flex items-center gap-2">
              <CalendarClock size={22} className="text-slate-500" />
              <Body.B2 className="text-slate-600">
                {formatDateToYYMMDD(props.date)} {formatTimeToKorean(props.date)}
              </Body.B2>
            </div>
          )}

          {(props.type === "single" || props.type === "range") && props.location && (
            <div className="flex items-center gap-2">
              <MapPin size={24} className="text-slate-500" />
              <Body.B2 className="text-slate-600">{props.location}</Body.B2>
            </div>
          )}
        </div>
      )} */}

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-1">
          {/* <button
            onClick={props.onLikeClick}
            className="flex items-center gap-1 focus:outline-none"
            aria-label="좋아요"
          >
            <Heart
              size={24}
              className={cn(
                "transition-colors",
                props.isLiked ? "text-red-400 fill-red-400" : "text-slate-500 hover:text-red-300"
              )}
            />
            <Body.B1 className="text-slate-600">{props.likeCount || 0}</Body.B1>
          </button> */}
        </div>

        <div className="flex items-center gap-2">
          {/* <div className="flex items-center gap-1">
            <MessageCircle size={16} className="text-slate-500" />
            <Body.B2 className="text-slate-500">{props.commentCount || 0}</Body.B2>
          </div> */}

          <div className="flex items-center gap-1">
            <Eye size={16} className="text-slate-500" />
            <Body.B2 className="text-slate-500">{props.viewCount || 0}</Body.B2>
          </div>
        </div>
      </div>
    </div>
  );
};

PostDetail.HeaderRow = HeaderRow;
PostDetail.Content = Content;
PostDetail.Metadata = Metadata;
PostDetail.Image = Image;

export default PostDetail;
