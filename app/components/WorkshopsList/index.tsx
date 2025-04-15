import { Fragment } from "react";
import PostPreview from "@/app/components/PostPreview";
import Divider from "@/app/components/Divider";
import { Workshop as WorkshopType } from "@/types/workshop";
import { format } from "date-fns";

interface WorkshopsListProps {
  workshops: WorkshopType[] | undefined;
}

export default function WorkshopsList({ workshops }: WorkshopsListProps) {
  if (!workshops || workshops.length === 0) {
    return (
      <div className="px-6 py-8 text-center">
        <p>해당 지역에 워크샵이 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      {workshops.map((workshop, index) => {
        const formattedDate = workshop.created_at
          ? format(new Date(workshop.created_at), "yyyy-MM-dd")
          : "날짜 정보 없음";

        return (
          <Fragment key={index}>
            {index !== 0 && <Divider />}
            <div className="px-6">
              <PostPreview key={workshop.id} id={workshop.id}>
                <PostPreview.Content
                  title={workshop.title}
                  subtitle={workshop.description || ""}
                  imageUrl={workshop.image_url || "/placeholder-image.jpg"}
                  imageAlt={workshop.title}
                />
                <PostPreview.Metadata
                  type="single"
                  date={new Date(formattedDate)}
                  commentCount={0}
                  likeCount={0}
                  viewCount={workshop.view || 0}
                  location={
                    workshop.location
                      ? `위도: ${workshop.location.lat.toFixed(2)}, 경도: ${workshop.location.lng.toFixed(2)}`
                      : "위치 정보 없음"
                  }
                />
              </PostPreview>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
