"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Title, Body, Heading } from "@/app/components/font";

export default function SignIn() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <button onClick={() => router.back()} className="px-2 py-2.5">
        <ChevronLeft className="w-10 h-10 text-gray-700" />
      </button>

      <div className="flex flex-col justify-center gap-3 px-6 flex-grow">
        <Image src="/logo.svg" alt="숨결 로고" width={60} height={81} />

        <div>
          <Title.T1 className="text-slate-600" weight="medium">
            요가로 이어지는 사람들,
          </Title.T1>
          <Title.T1 className="text-slate-600" weight="medium">
            <span className="text-slate-800">숨결</span>로 연결되는 우리
          </Title.T1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-6 flex-grow">
        <Body.B1 className="text-slate-600">카카오 간편 로그인으로 서비스를 이용해보세요.</Body.B1>

        <button className="w-full bg-[#FEE500] text-black px-6 py-2.5 rounded-md flex items-center justify-center gap-2">
          <span className="text-black">
            <Image src="/kakao.svg" alt="카카오 로고" width={20} height={20} className="text-black" />
          </span>
          <Heading.H2 className="font-medium flex-1">카카오 간편 로그인</Heading.H2>
        </button>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}
