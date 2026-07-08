const tools = [
  "🖼️ AI Image Enhancer",
  "🎨 AI Image Generator",
  "🎥 AI Video Generator",
  "🧹 Background Remover",
  "🔍 Image Upscaler",
  "✂️ Object Remover",
];

export default function PopularTools() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold md:text-5xl">Popular AI Tools</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{tool}</h3>
              <p className="mt-3 text-sm text-gray-400">
                Coming soon on DreamForge.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}