export default function WorkshopsLoadingSkeleton() {
  // Create an array of 3 items to render skeleton placeholders
  const skeletonItems = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div className="space-y-4 px-6 animate-pulse">
      {skeletonItems.map((index) => (
        <div key={index} className="flex flex-col gap-3 py-4">
          <div className="flex gap-4">
            {/* Image placeholder */}
            <div className="w-24 h-24 bg-gray-200 rounded-md"></div>

            <div className="flex-1 space-y-2">
              {/* Title placeholder */}
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>

              {/* Subtitle placeholder */}
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>

          {/* Metadata placeholder */}
          <div className="flex justify-between mt-2">
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>

          {/* Divider */}
          {index < skeletonItems.length - 1 && <div className="h-px bg-gray-200 w-full mt-4"></div>}
        </div>
      ))}
    </div>
  );
}
