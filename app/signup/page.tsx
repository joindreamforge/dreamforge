export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="mt-2 text-gray-400">Start creating with DreamForge.</p>

        <button className="mt-8 w-full rounded-full border border-white/10 py-4 font-semibold">
          Continue with Google
        </button>

        <div className="my-6 text-center text-sm text-gray-500">or</div>

        <input className="w-full rounded-xl border border-white/10 bg-black p-4 outline-none" placeholder="Email address" />
        <input className="mt-4 w-full rounded-xl border border-white/10 bg-black p-4 outline-none" placeholder="Password" type="password" />

        <a href="/dashboard" className="mt-6 block w-full rounded-full bg-white py-4 text-center font-semibold text-black">
          Create Account
        </a>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-white">Sign in</a>
        </p>
      </div>
    </main>
  );
}