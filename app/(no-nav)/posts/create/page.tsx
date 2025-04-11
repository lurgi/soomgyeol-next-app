"use client";

import { useFunnel } from "@/app/hooks/useFunnel";
import CreateWorkshopPage from "./CreateWorkshopPage";
import CreateFreePage from "./CreateFreePage";
import MobileLayout from "@/app/components/MobileLayout";

export default function CreatePostPage() {
  const { step, setStep } = useFunnel(["SELECT_TYPE", "WORKSHOP_CLASS", "FREE_POST"], "WORKSHOP_CLASS");

  const TITLE_TYPE = {
    SELECT_TYPE: "글쓰기",
    WORKSHOP_CLASS: "워크샵/클래스 글쓰기",
    FREE_POST: "자유 글쓰기",
  };

  return (
    <MobileLayout>
      <MobileLayout.Header type="detail" title={TITLE_TYPE[step]} hasIcons={false} />

      <MobileLayout.Main>
        {step === "SELECT_TYPE" && (
          <>
            <h2>글쓰기 유형을 선택해주세요</h2>
            <button onClick={() => setStep("WORKSHOP_CLASS")}>워크샵/클래스 작성하기</button>
            <button onClick={() => setStep("FREE_POST")}>자유 게시글 작성하기</button>
          </>
        )}

        {step === "WORKSHOP_CLASS" && <CreateWorkshopPage />}
        {step === "FREE_POST" && <CreateFreePage />}
      </MobileLayout.Main>
    </MobileLayout>
  );
}
