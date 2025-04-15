export default function CarouselSkeleton() {
  const skeletonItems = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div className="w-full">
      <div className="flex overflow-x-hidden pl-4 pr-4">
        <div className="flex gap-2.5 animate-pulse">
          {skeletonItems.map((index) => (
            <div
              key={index}
              className="w-[240px] h-[280px] rounded-lg border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-[120px] bg-gray-200"></div>

              <div className="flex flex-col p-3 flex-grow">
                {/* 제목 스켈레톤 */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-1"></div>

                {/* 내용 스켈레톤 */}
                <div className="space-y-1 mb-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-start gap-1">
                    <div className="w-3.5 h-3.5 bg-gray-200 rounded-full mt-1"></div>
                    <div className="flex flex-col gap-1">
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-6"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-2 pr-4">
        <div className="flex gap-1">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
