
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "All",
  "Suits",
  "Native Wear",
  "Agbada",
  "Shirts",
  "Casual Wear",
];

const works = [
  {
    id: 1,
    name: "The Executive Suit",
    category: "Suits",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Modern Gentleman",
    category: "Suits",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "African Elegance",
    category: "Native Wear",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9d4c8c2d5b5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Royal Agbada",
    category: "Agbada",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "The Classic Shirt",
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Everyday Sophistication",
    category: "Casual Wear",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Evening Classic",
    category: "Suits",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Contemporary Style",
    category: "Native Wear",
    image:
      "https://images.unsplash.com/photo-1520975958225-9e0c9d3b2f21?auto=format&fit=crop&w=900&q=85",
  },
];

export default function OurWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111111] px-6 py-20 text-center text-white sm:px-10 md:py-28">
        <p className="text-xs tracking-[0.4em] text-[#d4ad70]">
          OUR CREATIVE COLLECTION
        </p>

        <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
          Our Works
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
          Explore our collection of menswear designs, where classic
          tailoring meets contemporary style and African elegance.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 md:py-24">
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-5 py-3 text-xs tracking-wider transition ${
                activeCategory === category
                  ? "border-[#111111] bg-[#111111] text-white"
                  : "border-stone-300 text-stone-600 hover:border-[#c49a55] hover:text-amber-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work cards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <article key={work.id} className="group">
              <div className="relative overflow-hidden bg-stone-200">
                <img
                  src={work.image}
                  alt={work.name}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-black/65 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-xs tracking-[0.2em] text-white">
                    VIEW DESIGN
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c49a55] text-black">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-amber-800">
                    {work.category.toUpperCase()}
                  </p>

                  <h2 className="mt-2 font-serif text-xl">
                    {work.name}
                  </h2>
                </div>

                <span className="mt-1 text-xs text-stone-400">
                  {String(work.id).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="py-16 text-center text-stone-500">
            No designs found in this category.
          </p>
        )}
      </section>

      {/* Enquiry banner */}
      <section className="bg-[#f0ece3] px-6 py-16 text-center sm:px-10 md:py-20">
        <p className="text-xs tracking-[0.3em] text-amber-800">
          HAVE SOMETHING IN MIND?
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
          Let's Bring Your Design to Life
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-600">
          Contact us to discuss a custom outfit inspired by your taste,
          occasion, and personal style.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block bg-[#111111] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-amber-800"
        >
          MAKE AN ENQUIRY
        </a>
      </section>
    </div>
  );
}
