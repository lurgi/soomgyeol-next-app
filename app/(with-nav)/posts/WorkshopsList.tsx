import { Fragment } from "react";
import PostPreview from "@/app/components/PostPreview";
import Divider from "@/app/components/Divider";
import { LocationType, useWorkshopsQuery } from "@/app/hooks/useWorkshopsQuery";

interface WorkshopsListProps {
  selectedLocation: LocationType;
  userCoordinates?: GeolocationCoordinates;
}

export default function WorkshopsList({ selectedLocation, userCoordinates }: WorkshopsListProps) {
  const { data: workshops } = useWorkshopsQuery(selectedLocation, userCoordinates);

  return (
    <>
      {workshops?.map((workshop, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && <Divider />}
            <div className="px-6">
              <PostPreview key={workshop.id} id={workshop.id}>
                <PostPreview.Content
                  title={workshop.title}
                  subtitle={workshop.overview || ""}
                  imageUrl={workshop.image_url || "/yoga2.png"}
                  imageAlt={workshop.title}
                />
                <PostPreview.Metadata
                  type="single"
                  commentCount={0}
                  likeCount={0}
                  viewCount={workshop.view || 0}
                  location={workshop.locationtext || "위치 정보 없음"}
                />
              </PostPreview>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
