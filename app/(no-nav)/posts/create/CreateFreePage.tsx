"use client";

import { useFunnel } from "@/app/hooks/useFunnel";

export default function CreateFreePage() {
  const { step, setStep } = useFunnel(["INPUT_CONTENT", "CONFIRMATION", "COMPLETE"], "INPUT_CONTENT");

  return (
    <>
      {step === "INPUT_CONTENT" && (
        <>
          {/* 자유 게시글 작성 폼 컴포넌트 (제목 및 내용 입력) */}
          <button onClick={() => setStep("CONFIRMATION")}>다음</button>
        </>
      )}

      {step === "CONFIRMATION" && (
        <>
          {/* 작성된 게시글 내용 확인 컴포넌트 */}
          <button onClick={() => setStep("COMPLETE")}>완료하기</button>
          <button onClick={() => setStep("INPUT_CONTENT")}>수정하기</button>
        </>
      )}

      {step === "COMPLETE" && (
        <>
          {/* 게시글 작성 완료 안내 컴포넌트 */}
          <p>게시글이 성공적으로 작성되었습니다.</p>
        </>
      )}
    </>
  );
}
