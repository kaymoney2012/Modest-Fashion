
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Scissors,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";

const featuredWorks = [
  {
    name: "The Executive Suit",
    category: "FORMAL WEAR",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Modern Native Wear",
    category: "AFRICAN ELEGANCE",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "The Classic Collection",
    category: "TIMELESS STYLE",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85",
  },
];

const testimonials = [
  {
    name: "David O.",
    text: "The attention to detail was excellent. My outfit fitted perfectly, and the finishing was even better than I expected.",
    role: "CUSTOMER",
  },
  {
    name: "Michael A.",
    text: "Professional service, quality fabric, and a very clean design. I will definitely be returning for another outfit.",
    role: "CUSTOMER",
  },
  {
    name: "Samuel T.",
    text: "I wanted something elegant but comfortable, and MODEST FASHION delivered exactly that.",
    role: "CUSTOMER",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative flex min-h-155 items-center overflow-hidden bg-[#171614] sm:min-h-175">
        <img
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=2000&q=90"
          alt="Elegant modern menswear"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-[#d4ad70]">
            THE ART OF DRESSING WELL
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-8xl">
            Elegance in
            <br />
            Every <span className="italic text-[#d4ad70]">Stitch.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-stone-200 sm:text-base">
            Discover refined menswear crafted for the modern gentleman.
            From timeless suits to distinguished African styles, express
            your confidence through what you wear.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-3 bg-[#c49a55] px-7 py-4 text-xs font-semibold tracking-[0.15em] text-black transition hover:bg-[#e0bd82]"
            >
              EXPLORE OUR WORKS
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-xs font-semibold tracking-[0.15em] text-white transition hover:border-[#c49a55] hover:text-[#d4ad70]"
            >
              CONTACT US
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-[10px] tracking-[0.3em] text-white/70 md:flex">
          <span className="h-px w-12 bg-[#c49a55]" />
          MADE WITH PURPOSE
        </div>
      </section>

      {/* Brand introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs tracking-[0.35em] text-amber-800">
            WELCOME TO MODEST FASHION
          </p>

          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Style is personal.
            <br />
            <span className="italic text-amber-800">Make it exceptional.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-stone-600">
            At MODEST FASHION, we believe clothing should reflect who you
            are. Our approach combines thoughtful design, careful
            craftsmanship, and a passion for menswear to create styles
            that feel distinctive and timeless.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 border-b border-amber-800 pb-2 text-xs font-semibold tracking-[0.2em] text-amber-900 hover:text-black"
          >
            DISCOVER OUR STORY
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1000&q=85"
            alt="Classic tailored menswear"
            className="aspect-4/5 w-full object-cover"
            loading="lazy"
          />

          <div className="absolute -bottom-5 -left-3 bg-[#111111] px-6 py-5 text-white sm:-left-6">
            <p className="font-serif text-xl italic text-[#d4ad70]">
              Crafted with care
            </p>
            <p className="mt-1 text-[9px] tracking-[0.25em] text-stone-300">
              MADE FOR YOUR STYLE
            </p>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="bg-[#111111] px-6 py-16 text-white sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          <div className="text-center">
            <Scissors className="mx-auto text-[#c49a55]" size={30} />
            <h3 className="mt-5 font-serif text-xl">Thoughtful Design</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-stone-400">
              Designs created with attention to detail and a distinctive
              sense of style.
            </p>
          </div>

          <div className="text-center">
            <Ruler className="mx-auto text-[#c49a55]" size={30} />
            <h3 className="mt-5 font-serif text-xl">Personal Fit</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-stone-400">
              Styles tailored around your preferences, comfort, and
              individual needs.
            </p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto text-[#c49a55]" size={30} />
            <h3 className="mt-5 font-serif text-xl">Quality Finishing</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-stone-400">
              A commitment to neat finishing and a polished final look.
            </p>
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs tracking-[0.35em] text-amber-800">
              A SELECTION OF OUR CRAFT
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Featured Works
            </h2>
          </div>

          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm text-amber-900 hover:text-black"
          >
            View all works <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((work) => (
            <Link
              to="/works"
              key={work.name}
              className="group block"
            >
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={work.image}
                  alt={work.name}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between pt-5">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-amber-800">
                    {work.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl">
                    {work.name}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-amber-800 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f0ece3] px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-amber-800">
              WORDS FROM OUR CUSTOMERS
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              The Experience Matters
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
              Every outfit tells a story. Here is what our customers say
              about their experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="border border-stone-300/70 bg-[#faf8f3] p-7 sm:p-8"
              >
                <div className="flex gap-1 text-[#c49a55]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-6 font-serif text-lg leading-8 text-stone-800">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 border-t border-stone-200 pt-5">
                  <p className="text-sm font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-amber-800">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-[#111111] px-6 py-20 text-center text-white sm:px-10 md:py-24">
        <p className="text-xs tracking-[0.35em] text-[#d4ad70]">
          YOUR STYLE, YOUR STORY
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          Let's Create Something
          <span className="block italic text-[#d4ad70]">
            Exceptional.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-stone-400">
          Tell us what you have in mind. We'd love to discuss your next
          outfit and help bring your vision to life.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-3 bg-[#c49a55] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-black transition hover:bg-[#e0bd82]"
        >
          LET'S TALK
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
