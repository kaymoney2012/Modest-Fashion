
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Works", path: "/works" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  // Replace with your WhatsApp number, including country code.
  // Example format for Nigeria: 2348012345678
  const whatsappNumber = "";

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "/contact";

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <h2 className="font-serif text-2xl tracking-[0.2em]">
              MODEST
            </h2>
            <p className="mt-1 text-xs tracking-[0.4em] text-[#c49a55]">
              FASHION
            </p>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-stone-400">
            Refined menswear, thoughtful design, and exceptional
            craftsmanship. We create styles that express confidence,
            elegance, and individuality.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a55]">
            Quick Links
          </h3>

          <nav className="flex flex-col items-start gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-stone-400 transition-colors hover:text-[#c49a55]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social media */}
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#c49a55]">
            Let's Connect
          </h3>

          <p className="mb-6 text-sm leading-7 text-stone-400">
            Have an idea for your next outfit? Contact us to discuss
            your style and custom tailoring needs.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#c49a55] transition hover:border-[#c49a55] hover:bg-[#c49a55] hover:text-black"
            >
              <FaWhatsapp size={21} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#c49a55] transition hover:border-[#c49a55] hover:bg-[#c49a55] hover:text-black"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#c49a55] transition hover:border-[#c49a55] hover:bg-[#c49a55] hover:text-black"
            >
              <FaFacebookF size={19} />
            </a>

            <Link
              to="/contact"
              aria-label="Contact us"
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-[#c49a55] transition hover:border-[#c49a55] hover:bg-[#c49a55] hover:text-black"
            >
              <FiArrowUpRight size={21} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-stone-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} MODEST FASHION. All rights reserved.
          </p>

          <p className="tracking-wider">
            STYLE. CLASS. CONFIDENCE.
          </p>
        </div>
      </div>
    </footer>
  );
}
