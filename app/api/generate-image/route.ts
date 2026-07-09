import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MODEL = "black-forest-labs/FLUX.1-schnell";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const token = process.env.HUGGINGFACE_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "HUGGINGFACE_API_TOKEN not found" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${MODEL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          options: {
            wait_for_model: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error },
        { status: response.status }
      );
    }

    const buffer = await response.arrayBuffer();

    const base64 = Buffer.from(buffer).toString("base64");

    return NextResponse.json({
      image: `data:image/png;base64,${base64}`,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}