"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-gray-400">Sign in to continue to DreamForge.</p>

        <button
          onClick={signInWithGoogle}
          className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-black"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-400">
          New to DreamForge?{" "}
          <a href="/signup" className="text-white">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}