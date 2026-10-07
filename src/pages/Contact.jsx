import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { sendContactEmail } from "../services/emailService";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const result = await sendContactEmail(form);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message || "Failed to send your telegram. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-(--color-wood-dark) wood-texture py-20 px-6 text-center">
        <p className="text-(--color-mustard-light) uppercase tracking-[0.3em] text-sm mb-3">
          Get In Touch
        </p>
        <h1 className="font-(family-name:--font-display) text-(--color-cream) text-4xl sm:text-5xl">
          Find Old Town Cafe
        </h1>
      </section>

      <section className="bg-(--color-cream) py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div>
            <SectionHeading eyebrow="Visit The Saloon" title="Location & Hours" />
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-(--color-mustard) text-xl">📍</span>
                <p className="text-(--color-wood)/90">
                  Old Town Cafe By The Nagendra, Labour Chowk, Jabalpur, Madhya Pradesh
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-(--color-mustard) text-xl">🕒</span>
                <p className="text-(--color-wood)/90">Open Daily: 4:00 PM – 12:00 AM</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-(--color-mustard) text-xl">📞</span>
                <a href="tel:+919109007796" className="text-(--color-wood)/90 hover:text-(--color-saddle)">
                  +91 91090 07796
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-(--color-mustard) text-xl">📷</span>
                <a
                  href="https://www.instagram.com/oldtowncafe.jbp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-wood)/90 hover:text-(--color-saddle)"
                >
                  @oldtowncafe.jbp
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-(--color-mustard)/30 h-[300px]">
              <iframe
                title="Old Town Cafe Location Map"
                src="https://www.google.com/maps?q=Old+Town+Cafe+By+The+Nagendra+Labour+Chowk+Jabalpur&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <SectionHeading eyebrow="Drop A Line" title="Send A Message" />
            {submitted ? (
              <div className="bg-(--color-parchment) border-l-4 border-(--color-mustard) rounded-lg p-6 text-(--color-wood)">
                Howdy! Your message has been noted. We'll get back to you soon. 🤠
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-(--color-wood) mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-(--color-saddle)/30 bg-(--color-parchment) focus:outline-none focus:ring-2 focus:ring-(--color-mustard) text-(--color-wood-dark)"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-wood) mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-(--color-saddle)/30 bg-(--color-parchment) focus:outline-none focus:ring-2 focus:ring-(--color-mustard) text-(--color-wood-dark)"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-wood) mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-(--color-saddle)/30 bg-(--color-parchment) focus:outline-none focus:ring-2 focus:ring-(--color-mustard) text-(--color-wood-dark) resize-none"
                    placeholder="How can we help, partner?"
                  />
                </div>
                {error && (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2.5 rounded-lg text-sm font-medium">
                    ⚠️ {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full bg-(--color-mustard) hover:bg-(--color-amber) text-(--color-wood-dark) font-semibold uppercase tracking-wide px-6 py-3.5 rounded-lg shadow-md transition-all ${
                    sending ? "opacity-60 cursor-not-allowed text-opacity-50" : "cursor-pointer"
                  }`}
                >
                  {sending ? "Sending Telegram..." : "Send Message"}
                </button>
                <p className="text-xs text-(--color-wood)/50">
                  * Submission is processed via `emailService.js`. Update the owner email in that file to customize recipient.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
