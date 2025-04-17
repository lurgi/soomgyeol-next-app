"use client";
import { useCallback, useState } from "react";
import useKakaoMapsScript from "@/app/components/FindPlace/useKakaoMapScript";
// import ScrollObserver from "../ScrollObserver";
import useKakaoCafeSearch from "./useKakaoSerach";
import Loader from "../Loader";

interface CafeSearchProps {
  onSearch: (data: kakao.maps.services.PlacesSearchResultItem) => void;
}

export default function FindPlace({ onSearch }: CafeSearchProps) {
  const { isLoading: isScriptLoading, kakaoPlace } = useKakaoMapsScript();
  console.log(isScriptLoading, kakaoPlace);
  const [searchValue, setSearchValue] = useState("");
  // const rootRef = useRef<HTMLDivElement>(null);

  const { searchData, isSearchLoading, hasNextPage, fetchFirstSearchData } = useKakaoCafeSearch();
  const isFirstSearchLoading = !hasNextPage && isSearchLoading;

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isScriptLoading || !kakaoPlace) return;
      const newSearchValue = e.target.value;
      setSearchValue(newSearchValue);
      fetchFirstSearchData(kakaoPlace, newSearchValue);
    },
    [isScriptLoading, kakaoPlace, fetchFirstSearchData]
  );

  // const observeSearchNextPageCallback = (entries: IntersectionObserverEntry[]) => {
  //   const isValidIntersecting = entries[0].isIntersecting && hasNextPage && kakaoPlace;
  //   if (!isValidIntersecting) return;
  //   fetchNextSearchData(kakaoPlace, searchValue);
  // };

  return (
    <div>
      <div className="px-4 pt-6 pb-3">
        <input value={searchValue} onChange={handleSearch} placeholder="검색할 카페를 입력하세요." />
      </div>

      <div className="flex flex-col gap-2 px-4 pb-6">
        {isScriptLoading || isFirstSearchLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        ) : searchData?.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <div className="text-base font-semibold text-slate-800">검색 결과가 없습니다.</div>
          </div>
        ) : (
          searchData?.map((item) => (
            <button
              key={`${item.id}-${searchValue}`}
              className="rounded-lg px-4 py-3 bg-white shadow-sm text-left"
              onClick={() => onSearch(item)}
            >
              <div className="text-base font-semibold text-slate-900">{item.place_name}</div>
              <div className="text-sm text-slate-500">{item.address_name}</div>
            </button>
          ))
        )}

        {/* {hasNextPage && (
          <div className="flex justify-center items-center py-10">
            {isSearchLoading ? (
              <Loader />
            ) : (
              // <ScrollObserver
              //   callback={() => observeSearchNextPageCallback()}
                options={{ root: rootRef.current, rootMargin: "200px", threshold: 0 }}
              />
            )}
          </div> */}
        {/* )} */}
      </div>
    </div>
  );
}
