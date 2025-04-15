import { AlertTriangle } from "lucide-react";
import { Body } from "@/app/components/font";

export default function CarouselError() {
  return (
    <div className="w-full">
      <div className="h-[280px] overflow-hidden flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <AlertTriangle className="w-10 h-10 text-red-500 mb-2" />
          <Body.B2 weight="medium" className="text-red-500">
            데이터를 불러오는데 실패했습니다
          </Body.B2>
          <Body.B2 className="text-gray-500 mt-1">잠시 후 다시 시도해주세요</Body.B2>
        </div>
      </div>
    </div>
  );
}
