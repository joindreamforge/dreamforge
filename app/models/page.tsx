const models = [
  {
    name: "GPT Image",
    desc: "Best for realistic AI images",
    link: "/generate/image",
  },
  {
    name: "FLUX Dev",
    desc: "High quality realistic model",
    link: "/generate/image",
  },
  {
    name: "Ideogram 3",
    desc: "Best for text inside images",
    link: "/generate/image",
  },
  {
    name: "Juggernaut XL",
    desc: "Photorealistic portraits",
    link: "/generate/image",
  },
  {
    name: "SDXL",
    desc: "General purpose model",
    link: "/generate/image",
  },
  {
    name: "Animagine",
    desc: "Anime generation",
    link: "/generate/image",
  },
];

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold">Choose AI Model</h1>

        <p className="mt-4 text-gray-400">
          Select the AI model that best fits your project.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <a
              key={model.name}
              href={model.link}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
            >
              <h2 className="text-2xl font-bold">{model.name}</h2>

              <p className="mt-3 text-gray-400">{model.desc}</p>

              <div className="mt-6 inline-block rounded-full bg-white px-5 py-2 font-semibold text-black">
                Select Model →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}