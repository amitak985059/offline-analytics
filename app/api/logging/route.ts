import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Log } from "@/models/log";

export async function GET() {
  return NextResponse.json({
    message: "Working",
  });
}

export async function POST(req: NextRequest) {
  try {
    const logs = await req.json();

    await connectToDatabase();

    if (Array.isArray(logs)) {
      await Log.insertMany(logs);
    } else {
      await Log.create(logs);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
