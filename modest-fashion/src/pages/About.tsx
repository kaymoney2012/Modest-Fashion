
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scissors,
  Heart,
  Award,
  Ruler,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "David O.",
    text: "I appreciate the attention to detail and the quality of the finishing. The entire experience was professional.",
  },
  {
    name: "Michael A.",
    text: "The design matched what I had in mind. I was impressed by the care taken with the details.",
  },
];

export default function About() {
  return (
    <div>
      {/* Page hero */}
      <section className="relative flex min-h-105 items-center overflow-hidden bg-[#111111]">
        <img
          src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1800&q=85"
          alt="Elegant menswear in a tailoring studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10">
          <p className="text-xs tracking-[0.4em] text-[#d4ad70]">
            GET TO KNOW US
          </p>

          <h1 className="mt-5 font-serif text-5xl text-white sm:text-7xl">
            Our Story
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-stone-200 sm:text-base">
            More than clothing, we create expressions of confidence,
            individuality, and timeless style.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs tracking-[0.35em] text-amber-800">
            WHO WE ARE
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            The Meaning Behind
            <span className="block italic text-amber-800">
              MODEST FASHION
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-stone-600">
            MODEST FASHION is a men's fashion brand built around
            thoughtful design, personal style, and careful craftsmanship.
            We believe that looking good is not about following every
            trend; it is about finding styles that express your
            personality with confidence.
          </p>

          <p className="mt-4 text-sm leading-8 text-stone-600">
            From classic suits to traditional African attire and modern
            everyday outfits, our goal is to help every customer feel
            comfortable, confident, and well dressed.
          </p>

          <Link
            to="/works"
            className="mt-8 inline-flex items-center gap-3 border-b border-amber-800 pb-2 text-xs font-semibold tracking-[0.2em] text-amber-900 transition hover:text-black"
          >
            EXPLORE OUR WORKS
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
            alt="Fashion design and tailored clothing"
            className="aspect-4/5 w-full object-cover"
            loading="lazy"
          />

          <div className="absolute -bottom-5 -right-3 bg-[#111111] px-6 py-5 text-white sm:-right-5">
            <p className="font-serif text-xl italic text-[#d4ad70]">
              Style with purpose
            </p>
            <p className="mt-1 text-[9px] tracking-[0.25em] text-stone-300">
              THE MODEST STANDARD
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-[#111111] px-6 py-20 text-white sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.35em] text-[#d4ad70]">
              WHAT GUIDES US
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Our Purpose
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="border border-white/15 p-8 sm:p-10">
              <Heart className="text-[#d4ad70]" size={32} />

              <h3 className="mt-6 font-serif text-2xl">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-400">
                To create stylish, well-crafted menswear that reflects
                each customer's individuality while combining comfort,
                quality, and thoughtful design.
              </p>
            </article>

            <article className="border border-white/15 p-8 sm:p-10">
              <Award className="text-[#d4ad70]" size={32} />

              <h3 className="mt-6 font-serif text-2xl">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-400">
                To become a trusted name in men's fashion, known for
                distinctive designs, reliable service, and a commitment
                to helping customers express their best style.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] text-amber-800">
            THE MODEST STANDARD
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            What We Stand For
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <article className="text-center">
            <Scissors className="mx-auto text-amber-800" size={32} />
            <h3 className="mt-5 font-serif text-xl">
              Craftsmanship
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Careful attention to construction, finishing, and detail.
            </p>
          </article>

          <article className="text-center">
            <Ruler className="mx-auto text-amber-800" size={32} />
            <h3 className="mt-5 font-serif text-xl">
              Individuality
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Clothing choices that respect your preferences and personal
              style.
            </p>
          </article>

          <article className="text-center">
            <Star className="mx-auto text-amber-800" size={32} />
            <h3 className="mt-5 font-serif text-xl">
              Quality
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              A focus on thoughtful fabric choices and polished results.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f0ece3] px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-amber-800">
              CUSTOMER EXPERIENCES
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="border border-stone-300/70 bg-[#faf8f3] p-8 sm:p-10"
              >
                <div className="flex gap-1 text-[#c49a55]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="mt-6 font-serif text-xl leading-8 text-stone-800">
                  “{testimonial.text}”
                </p>

                <p className="mt-7 text-sm font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[10px] tracking-[0.2em] text-amber-800">
                  CUSTOMER
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="px-6 py-20 text-center sm:px-10 md:py-24">
        <p className="text-xs tracking-[0.35em] text-amber-800">
          LET'S WORK TOGETHER
        </p>

        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Your Next Favourite Outfit Starts Here.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-600">
          Have a design in mind? Let's discuss your preferences and
          create a look that feels uniquely yours.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 bg-[#111111] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-amber-800"
        >
          CONTACT US
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
