import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold tracking-widest mb-4">WOODS</h1>
      <p className="text-gray-400 mb-10 tracking-wide text-sm uppercase">Restaurant & Café</p>
      <Link
        href="/menu"
        className="border border-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200"
      >
        View Menu
      </Link>
    </main>
  );
}
