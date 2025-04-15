import { Fragment } from "react";
import PostPreview from "@/app/components/PostPreview";
import Divider from "@/app/components/Divider";
import { LocationType, useWorkshopsQuery } from "@/app/hooks/useWorkshopsQuery";
import { Body } from "@/app/components/font";

interface WorkshopsListProps {
  selectedLocation: LocationType;
  userCoordinates?: GeolocationCoordinates;
}

export default function WorkshopsList({ selectedLocation, userCoordinates }: WorkshopsListProps) {
  const { data: workshops } = useWorkshopsQuery(selectedLocation, userCoordinates);

  if (workshops.length === 0) {
    return (
      <div className="px-6 py-8 text-center">
        <Body.B1>해당 위치의 워크샵이 없습니다.</Body.B1>
      </div>
    );
  }

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
                  location={workshop.locationtext || undefined}
                  place={workshop.place || undefined}
                />
              </PostPreview>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
