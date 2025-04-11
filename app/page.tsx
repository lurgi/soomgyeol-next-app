import { Body, Heading, Title } from "@/app/components/font";
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center gap-5">
      <Image src="/logo.svg" alt="숨결 로고" width={60} height={81} />

      <Title.T1 weight="medium">숨결</Title.T1>
      <Body.B1 className="text-lg text-slate-600 max-w-md">
        요가와 숨결이 연결되는 공간, 숨결. 함께 호흡하며 배우고, 나누고, 성장하는 요가 커뮤니티 플랫폼입니다.
      </Body.B1>

      <Link href={"/home"}>
        <button className="flex items-center gap-1 bg-blue-100 rounded-full px-4 py-2 active:bg-blue-200 hover:bg-blue-200 hover:cursor-pointer">
          <Heading.H2 weight="medium">바로가기</Heading.H2>
          <ChevronRight className="w-4 h-4 font-medium" />
        </button>
      </Link>
    </main>
  );
}
