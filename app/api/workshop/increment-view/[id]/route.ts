import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "워크샵 ID가 필요합니다." }, { status: 400 });
    }

    // 조회수 증가
    const updatedWorkshop = await prisma.workshop.update({
      where: { id },
      data: { view: { increment: 1 } },
    });

    return NextResponse.json({ success: true, view: updatedWorkshop.view });
  } catch (error) {
    console.error("조회수 업데이트 중 오류 발생:", error);
    return NextResponse.json({ error: "조회수 업데이트 중 오류가 발생했습니다." }, { status: 500 });
  }
}
