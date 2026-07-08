"use client";

import { useState } from "react";

const categories = ["Realistic", "Anime", "Product", "Logo", "Fashion", "Cars", "Food", "Interior"];
const ratios = ["1:1", "9:16", "16:9", "3:4", "4:3"];

export default function ImageGeneratorPage() {
  const [generated, setGenerated] = useState(false);

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/dashboard" className="text-sm text-gray-400">← Back to Dashboard</a>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">AI Image Generator</h1>
            <p className="mt-2 text-gray-400">Select a style, write your prompt, and create images.</p>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm">15 Credits</div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm text-gray-400">Category</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {categories.map((item) => (
                <button key={item} className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm hover:bg-white hover:text-black">
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="text-sm text-gray-400">Model</label>
              <select className="mt-2 w-full rounded-xl border border-white/10 bg-black p-4">
                <option>GPT Image</option>
                <option>FLUX Dev</option>
                <option>Stable Diffusion XL</option>
                <option>Juggernaut XL</option>
                <option>Animagine XL</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="text-sm text-gray-400">Prompt</label>
              <textarea className="mt-2 h-40 w-full rounded-xl border border-white/10 bg-black p-4 outline-none" placeholder="Describe what you want to create..." />
            </div>

            <div className="mt-6">
              <label className="text-sm text-gray-400">Negative Prompt</label>
              <textarea className="mt-2 h-24 w-full rounded-xl border border-white/10 bg-black p-4 outline-none" placeholder="Things you don't want in the image..." />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {ratios.map((ratio) => (
                <button key={ratio} className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white hover:text-black">
                  {ratio}
                </button>
              ))}
            </div>

            <button onClick={() => setGenerated(true)} className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-black">
              Generate Image
            </button>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Result</h2>

            <div className="mt-6 flex h-[520px] items-center justify-center rounded-3xl border border-dashed border-white/20 bg-black">
              {generated ? (
                <div className="text-center">
                  <div className="mx-auto h-72 w-72 rounded-3xl bg-gradient-to-br from-white/30 to-white/5" />
                  <p className="mt-4 text-green-400">Demo image generated successfully.</p>
                </div>
              ) : (
                <p className="text-gray-500">Generated image preview</p>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="rounded-xl border border-white/10 py-3 text-sm">Download</button>
              <button className="rounded-xl border border-white/10 py-3 text-sm">Save</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}