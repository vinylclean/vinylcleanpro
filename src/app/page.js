export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900 p-8">

      <h1 className="text-4xl font-bold mb-4">Vinyl Clean Pro</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Upload your vinyl recording (WAV / FLAC) and let our AI clean noise,
        clicks and pops with studio-level quality.
      </p>

      <label
        htmlFor="file"
        className="px-6 py-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800 transition"
      >
        Upload Audio File
      </label>

      <input id="file" type="file" className="hidden" />

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Vinyl Clean Pro. All rights reserved.
      </footer>

    </main>
  );
}
