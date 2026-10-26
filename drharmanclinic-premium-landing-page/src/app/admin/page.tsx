import { desc } from "drizzle-orm";
import { db } from "@/db";
import { appointments, messages } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let appts: (typeof appointments.$inferSelect)[] = [];
  let msgs: (typeof messages.$inferSelect)[] = [];
  try {
    appts = await db.select().from(appointments).orderBy(desc(appointments.createdAt)).limit(100);
    msgs = await db.select().from(messages).orderBy(desc(messages.createdAt)).limit(50);
  } catch {
    // tables not yet created
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Clinic dashboard</h1>
      <p className="mt-2 text-slate-600">Appointment requests and messages from the website.</p>

      <h2 className="mt-10 text-xl font-semibold">Appointments ({appts.length})</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              {["Name", "Phone", "City", "Service", "Preferred", "Notes", "Received"].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appts.map((a) => (
              <tr key={a.id} className="border-t border-slate-100 align-top">
                <td className="px-4 py-3 font-medium text-slate-900">{a.fullName}</td>
                <td className="px-4 py-3" dir="ltr">{a.phone}</td>
                <td className="px-4 py-3">{a.city ?? "—"}</td>
                <td className="px-4 py-3">{a.service}</td>
                <td className="px-4 py-3">{[a.preferredDate, a.preferredTime].filter(Boolean).join(" ") || "—"}</td>
                <td className="max-w-xs px-4 py-3 text-slate-600">{a.notes ?? "—"}</td>
                <td className="px-4 py-3 text-slate-500">{new Date(a.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {appts.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-500">No requests yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Messages ({msgs.length})</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {msgs.map((m) => (
          <div key={m.id} className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">{m.name}</p>
            <p className="text-sm text-teal-700" dir="ltr">{m.contact}</p>
            <p className="mt-2 text-sm text-slate-600">{m.body}</p>
            <p className="mt-3 text-xs text-slate-400">{new Date(m.createdAt).toLocaleString()}</p>
          </div>
        ))}
        {msgs.length === 0 && <p className="text-slate-500">No messages yet.</p>}
      </div>
    </main>
  );
}
