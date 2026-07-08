export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 pt-24 text-white">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          DreamForge AI Platform
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          One platform, many AI tools..
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Generate images, videos, prompts, captions, and more with DreamForge. 
          Start free and create anything with AI.
        </p>

        <div className="mt-10 flex justify-center gap-4">
         <a
  href="/dashboard"
  className="rounded-full bg-white px-7 py-3 font-semibold text-black"
>
  Start Creating
</a>

          <button className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white">
            View Models
          </button>
        </div>
      </div>
    </section>
  );
}