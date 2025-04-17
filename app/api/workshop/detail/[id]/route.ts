import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "워크샵 ID가 필요합니다." }, { status: 400 });
    }

    const workshop = await prisma.workshop.findUnique({
      where: {
        id: id,
      },
    });

    if (!workshop) {
      return NextResponse.json({ error: "해당 워크샵을 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json(workshop);
  } catch (error) {
    console.error("워크샵 상세 조회 중 오류 발생:", error);
    return NextResponse.json({ error: "워크샵 상세 정보를 불러오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
