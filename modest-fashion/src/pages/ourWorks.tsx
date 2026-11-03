import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Formal from "../../public/Formal.jpg";
import Formal2 from "../../public/Formal2.jpg";
import Formal3 from "../../public/Formal3.jpg";
import Native from "../../public/Native.jpg";
import Native2 from "../../public/Native2.jpg";
import Native3 from "../../public/Native3.jpg";
import Classic from "../../public/Classic.jpg";
import Shirts from "../../public/Shirts.jpg";
import Shirts2 from "../../public/Shirts2.jpg";

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
    image: Formal,
  },
  {
    id: 2,
    name: "Modern Gentleman",
    category: "Suits",
    image: Formal3,
  },
  {
    id: 3,
    name: "African Elegance",
    category: "Native Wear",
    image: Native,
  },
  {
    id: 4,
    name: "Royal Agbada",
    category: "Agbada",
    image: Native3,
  },
  {
    id: 5,
    name: "The Classic Shirt",
    category: "Shirts",
    image: Shirts,
  },
  {
    id: 6,
    name: "Everyday Sophistication",
    category: "Casual Wear",
    image: Classic,
  },
  {
    id: 7,
    name: "Evening Classic",
    category: "Suits",
    image: Formal2,
  },
  {
    id: 8,
    name: "Contemporary Style",
    category: "Native Wear",
    image: Native2,
  },
    {
    id: 9,
    name: "Elegant Shirt Design",
    category: "Shirts",
    image: Shirts2,
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

        <h1 className="mt-5 font-serif text-5xl sm:text-7xl">Our Works</h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
          Explore our collection of menswear designs, where classic tailoring
          meets contemporary style and African elegance.
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

                  <h2 className="mt-2 font-serif text-xl">{work.name}</h2>
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
          className="mt-8 inline-block border-2 border-black px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-amber-800"
        >
          MAKE AN ENQUIRY
        </a>
      </section>
    </div>
  );
}
