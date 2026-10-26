import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { appointments } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(appointments).orderBy(desc(appointments.createdAt)).limit(200);
    return NextResponse.json({ appointments: rows });
  } catch {
    return NextResponse.json({ appointments: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

    const fullName = str(body.fullName);
    const phone = str(body.phone);
    const service = str(body.service);

    if (!fullName || !phone || !service) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const [row] = await db
      .insert(appointments)
      .values({
        fullName: fullName.slice(0, 160),
        phone: phone.slice(0, 40),
        city: str(body.city).slice(0, 80) || null,
        service: service.slice(0, 120),
        preferredDate: str(body.preferredDate) || null,
        preferredTime: str(body.preferredTime) || null,
        notes: str(body.notes) || null,
        language: str(body.language) || "en",
      })
      .returning();

    return NextResponse.json({ appointment: row }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
