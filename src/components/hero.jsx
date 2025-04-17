// src/components/Hero.jsx
export default function Hero() {
    return (
      <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center py-32 px-4 text-white font-sans">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-4">
          Hi, I'm Natasha!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          A passionate AI enthusiast and creative problem solver.
        </p>
        <div className="flex gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-2xl shadow-md transition">
            View Projects
          </button>
          <button className="border border-pink-500 hover:bg-pink-600 text-pink-300 hover:text-white px-6 py-2 rounded-2xl transition">
            Contact Me
          </button>
        </div>
      </section>
    );
  }
  