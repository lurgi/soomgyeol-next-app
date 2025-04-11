"use client";

import { Body, Heading } from "@/app/components/font";
import { useFunnel } from "@/app/hooks/useFunnel";
import { ChevronRight } from "lucide-react";
import PeriodFormPage from "./PeriodFormPage";

export default function CreateWorkshopPage() {
  const { step, setStep } = useFunnel(["SELECT_DATE_TYPE", "PERIOD_FORM", "SPECIFIC_DATE_FORM"], "SELECT_DATE_TYPE");

  const moveStepToPeriodForm = () => setStep("PERIOD_FORM");
  const moveStepToComplete = () => setStep("SPECIFIC_DATE_FORM");

  return (
    <>
      {step === "SELECT_DATE_TYPE" && (
        <div className="mt-24">
          <Heading.H1 className="px-6 mb-2" weight="medium">
            글쓰기 유형을 선택해주세요.
          </Heading.H1>
          <button
            onClick={moveStepToPeriodForm}
            className="w-full pl-10 pr-6 py-4 flex justify-between items-center gap-1 active:bg-slate-100"
          >
            <Body.B1 className="text-left break-keep whitespace-pre-line">
              정해진 기간 동안 매주 반복되는 수업이에요.
            </Body.B1>
            <div className="flex items-center">
              <ChevronRight size={24} />
            </div>
          </button>
          <button
            onClick={moveStepToComplete}
            className="w-full pl-10 pr-6 py-4 flex justify-between items-center gap-1 active:bg-slate-100"
          >
            <Body.B1 className="text-left break-keep whitespace-pre-line">특정 날짜에만 열리는 수업이에요.</Body.B1>
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {step === "PERIOD_FORM" && <PeriodFormPage />}

      {step === "SPECIFIC_DATE_FORM" && <>{/* TODO: 작성완료 컴포넌트 */}</>}
    </>
  );
}
