"use client";

import { useState } from "react";

const models = [
  {
    name: "Stable Diffusion XL",
    value: "stabilityai/stable-diffusion-xl-base-1.0",
  },
  {
    name: "FLUX Schnell",
    value: "black-forest-labs/FLUX.1-schnell",
  },
  {
    name: "DreamShaper",
    value: "Lykon/dreamshaper-8",
  },
  {
    name: "RealVis XL",
    value: "SG161222/RealVisXL_V4.0",
  },
];

const categories = [
  "Realistic",
  "Anime",
  "Product",
  "Logo",
  "Fashion",
  "Cars",
  "Food",
  "Interior",
];

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0].value);
  const [category, setCategory] = useState("Realistic");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please write a prompt first.");
      return;
    }

    setLoading(true);
    setError("");
    setGeneratedImage("");

    try {
      const finalPrompt = `${category} style, ${prompt}. ${negativePrompt ? "Avoid: " + negativePrompt : ""}`;

      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: finalPrompt,
          model: selectedModel,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Image generation failed.");
        return;
      }

      if (!data.image) {
        setError("No image returned from API.");
        return;
      }

      setGeneratedImage(data.image);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check API route or token.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "dreamforge-ai-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-blue-300 tracking-[0.4em] text-sm mb-3">
            DREAMFORGE AI
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            AI Image Generator
          </h1>
          <p className="text-gray-400 mt-4">
            Write your prompt and generate AI images instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold mb-6">Create Image</h2>

            <label className="block text-blue-200 mb-3">Choose Category</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-xl border px-4 py-3 ${
                    category === item
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-zinc-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="block text-blue-200 mb-3">Provider</label>
            <select
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-4 mb-6 outline-none"
              value="Hugging Face"
              disabled
            >
              <option>Hugging Face</option>
            </select>

            <label className="block text-blue-200 mb-3">Model</label>
            <select
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-4 mb-6 outline-none"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              {models.map((model) => (
                <option key={model.value} value={model.value}>
                  {model.name}
                </option>
              ))}
            </select>

            <label className="block text-blue-200 mb-3">Prompt</label>
            <textarea
              className="w-full min-h-40 rounded-xl bg-black border border-zinc-700 p-4 mb-6 outline-none"
              placeholder="Example: a red apple on a wooden table, cinematic lighting, ultra realistic"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <label className="block text-blue-200 mb-3">Negative Prompt</label>
            <textarea
              className="w-full min-h-24 rounded-xl bg-black border border-zinc-700 p-4 mb-6 outline-none"
              placeholder="Things you don't want in the image..."
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
            />

            {error && (
              <div className="mb-4 rounded-xl border border-red-800 bg-red-950 p-4 text-red-200">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleGenerate}
              disabled={loading}
              className="w-full rounded-full bg-white text-black py-4 font-bold disabled:bg-zinc-600 disabled:text-white"
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold mb-6">Preview</h2>

            <div className="min-h-[520px] rounded-3xl border border-dashed border-zinc-700 bg-black flex items-center justify-center overflow-hidden">
              {loading ? (
                <p className="text-blue-200">Generating image...</p>
              ) : generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated AI image"
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-blue-200">Generated image preview</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!generatedImage}
                className="rounded-xl border border-zinc-700 py-4 disabled:text-zinc-600"
              >
                Download
              </button>

              <button
                type="button"
                disabled={!generatedImage}
                className="rounded-xl border border-zinc-700 py-4 disabled:text-zinc-600"
              >
                Save
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
