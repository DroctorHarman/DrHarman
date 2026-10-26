import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { messages } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(messages).orderBy(desc(messages.createdAt)).limit(200);
    return NextResponse.json({ messages: rows });
  } catch {
    return NextResponse.json({ messages: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
    const name = str(body.name);
    const contact = str(body.contact);
    const text = str(body.body);
    if (!name || !contact || !text) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    const [row] = await db
      .insert(messages)
      .values({ name: name.slice(0, 160), contact: contact.slice(0, 160), body: text.slice(0, 4000) })
      .returning();
    return NextResponse.json({ message: row }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
