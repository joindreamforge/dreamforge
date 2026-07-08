const tools = [
  "AI Image Generator",
  "AI Video Generator",
  "AI Voice Generator",
  "AI Music Generator",
  "AI Chat",
  "Logo Generator",
  "Background Remover",
  "Image Upscaler",
  "Prompt Generator",
  "Caption Generator",
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

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-white/10 bg-white/5 p-6 md:block">
          <h1 className="text-2xl font-bold">DreamForge</h1>
          <p className="mt-2 text-sm text-gray-400">AI Creation Studio</p>

          <nav className="mt-10 space-y-3 text-sm">
            {tools.map((tool, index) => (
            <a
  key={tool}
  href={tool === "AI Image Generator" ? "/models" : "#"}
  className={`block rounded-xl px-4 py-3 transition ${
    index === 0
      ? "bg-white text-black"
      : "text-gray-300 hover:bg-white/10"
  }`}
>
  {tool}
</a>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6 md:p-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Create AI Image</h2>
              <p className="mt-2 text-gray-400">
                Choose a style, write your prompt, and generate.
              </p>
            </div>

            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
              15 Credits
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Choose Category</h3>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="rounded-xl border border-white/10 bg-black px-4 py-3 text-left text-sm hover:bg-white hover:text-black"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <label className="text-sm text-gray-400">Model</label>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-black p-4 text-white">
                  <option>DreamForge Realistic</option>
                  <option>DreamForge Anime</option>
                  <option>DreamForge Product</option>
                  <option>DreamForge Logo</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="text-sm text-gray-400">Prompt</label>
                <textarea
                  className="mt-2 h-40 w-full rounded-xl border border-white/10 bg-black p-4 text-white outline-none"
                  placeholder="Describe the image you want to create..."
                />
              </div>

              <a
  href="/generate/image"
  className="mt-6 block w-full rounded-full bg-white px-6 py-4 text-center font-semibold text-black"
>
  Generate Image
</a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Preview</h3>

              <div className="mt-5 flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black">
                <p className="text-center text-gray-500">
                  Your generated image will appear here.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300">
                  Download
                </button>
                <button className="rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300">
                  Save to History
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}