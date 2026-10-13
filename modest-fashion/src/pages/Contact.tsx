
import { useState, type FormEvent } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Replace with your actual WhatsApp number, including country code.
  const whatsappNumber = "";

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello MODEST FASHION,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Enquiry: ${formData.subject}`,
      "",
      formData.message,
    ].join("\n");

    if (!whatsappNumber) {
      alert("Please add your WhatsApp number in Contact.tsx first.");
      return;
    }

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111111] px-6 py-20 text-center text-white sm:px-10 md:py-24">
        <p className="text-xs tracking-[0.4em] text-[#d4ad70]">
          WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
          Get in Touch
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
          Have a design in mind, need a custom outfit, or want to learn
          more about our work? Send us a message.
        </p>
      </section>

      {/* Contact content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        {/* Contact information */}
        <div>
          <p className="text-xs tracking-[0.3em] text-amber-800">
            CONTACT INFORMATION
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Let's Talk About Your Next Outfit
          </h2>

          <p className="mt-5 text-sm leading-8 text-stone-600">
            Every great design starts with a conversation. Tell us about
            your preferred style, occasion, and ideas, and let's explore
            the possibilities together.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#111111] text-[#d4ad70]">
                <FaEnvelope size={19} />
              </span>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-sm text-stone-500">
                  Add your business email address here.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#111111] text-[#d4ad70]">
                <FaPhoneAlt size={18} />
              </span>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-sm text-stone-500">
                  Add your business phone number here.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#111111] text-[#d4ad70]">
                <FaMapMarkerAlt size={19} />
              </span>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="mt-1 text-sm text-stone-500">
                  Add your studio or business address here.
                </p>
              </div>
            </div>
          </div>

          <a
            href={
              whatsappNumber
                ? `https://wa.me/${whatsappNumber}`
                : "#contact-form"
            }
            target={whatsappNumber ? "_blank" : undefined}
            rel={whatsappNumber ? "noreferrer" : undefined}
            className="mt-10 inline-flex items-center gap-3 bg-[#c49a55] px-6 py-4 text-xs font-semibold tracking-wider text-black transition hover:bg-[#e0bd82]"
          >
            <FaWhatsapp size={20} />
            CHAT WITH US ON WHATSAPP
          </a>
        </div>

        {/* Contact form */}
        <div
          id="contact-form"
          className="border border-stone-200 bg-white p-6 sm:p-10"
        >
          <p className="text-xs tracking-[0.3em] text-amber-800">
            SEND AN ENQUIRY
          </p>

          <h2 className="mt-3 font-serif text-3xl">
            How Can We Help?
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-stone-300 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-amber-800"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-stone-300 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-amber-800"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full border border-stone-300 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-amber-800"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Enquiry Type *
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-amber-800"
                >
                  <option value="">Select an option</option>
                  <option value="Custom Suit">Custom Suit</option>
                  <option value="Native Wear">Native Wear</option>
                  <option value="Agbada">Agbada</option>
                  <option value="Shirts and Trousers">
                    Shirts and Trousers
                  </option>
                  <option value="Other Enquiry">Other Enquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about the outfit or design you have in mind..."
                className="w-full resize-y border border-stone-300 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-amber-800"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#111111] px-6 py-4 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-amber-800"
            >
              SEND ENQUIRY
            </button>

            {submitted && (
              <p className="text-sm text-green-700">
                Your enquiry has been opened in WhatsApp. Send the message
                there to complete your enquiry.
              </p>
            )}

            <p className="text-xs leading-6 text-stone-500">
              Submitting this form opens WhatsApp with your message
              prepared. It does not send an email or save the enquiry
              to a database.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
