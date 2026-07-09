import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MODEL = "black-forest-labs/FLUX.1-schnell";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const token = process.env.HUGGINGFACE_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "HUGGINGFACE_API_TOKEN not found" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://router.huggingface.co/hf-inference/models/${MODEL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "image/png",
        },
        body: JSON.stringify({
  inputs: prompt,
  parameters: {
    num_inference_steps: 4,
  },
  options: {
    wait_for_model: true,
  },
}),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("HF ERROR:", error);
      return NextResponse.json({ error }, { status: response.status });
    }

    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return NextResponse.json({
      image: `data:image/png;base64,${base64}`,
    });
  } catch (err: any) {
    console.error("FULL ERROR:", err);
    return NextResponse.json(
      { error: err?.message || "Image generation failed" },
      { status: 500 }
    );
  }
}