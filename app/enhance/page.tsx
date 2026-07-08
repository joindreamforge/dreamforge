"use client";

import { useState } from "react";

const resolutions = [
  { name: "720p", badge: "FREE", credits: "2 credit" },
  { name: "1080p", badge: "FREE", credits: "4 credits" },
  { name: "2K", badge: "PREMIUM", credits: "4 credits" },
  { name: "4K", badge: "PREMIUM", credits: "8 credits" },
];

export default function EnhancePage() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-gray-400">← Back Home</a>

        <h1 className="mt-8 text-4xl font-bold">AI Image Enhancer</h1>
        <p className="mt-2 text-gray-400">
          Upload an image and enhance it to 720p, 1080p, 2K or 4K.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Upload Image</h2>

            <label className="mt-6 flex h-72 cursor-pointer items-center justify-center rounded-3xl border border-dashed border-white/20 bg-black">
              {image ? (
                <img src={image} alt="Preview" className="max-h-64 rounded-2xl object-contain" />
              ) : (
                <div className="text-center">
                  <p className="text-gray-400">Click to upload your image</p>
                  <p className="mt-2 text-sm text-gray-600">PNG, JPG, WEBP</p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setImage(URL.createObjectURL(file));
                }}
              />
            </label>

            <h3 className="mt-8 text-lg font-semibold">Select Resolution</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {resolutions.map((item) => (
                <button
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-black p-4 text-left hover:border-blue-500"
                >
                  <div className="flex justify-between">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs text-gray-400">{item.badge}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{item.credits}</p>
                </button>
              ))}
            </div>

            <button className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-black">
              Enhance Image
            </button>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Enhanced Result</h2>
            <div className="mt-6 flex h-[480px] items-center justify-center rounded-3xl border border-dashed border-white/20 bg-black">
              <p className="text-gray-500">Enhanced image will appear here.</p>
            </div>

            <button className="mt-5 w-full rounded-xl border border-white/10 py-3 text-sm">
              Download Enhanced Image
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}