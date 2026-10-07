import { useState, useEffect } from "react";
import SectionHeading from "../components/SectionHeading";

// Owner Credentials
const OWNER_EMAIL = "officialhariomgupta16@gmail.com";
const OWNER_PASSWORD = "HariomGupta";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);

  // Cafe Status Settings
  const [cafeOpen, setCafeOpen] = useState(true);
  const [cafeNotice, setCafeNotice] = useState("");

  // Load state on mount
  useEffect(() => {
    const loginState = localStorage.getItem("otc_admin_logged_in") === "true";
    setIsLoggedIn(loginState);

    // Load messages
    const storedMessages = JSON.parse(localStorage.getItem("otc_messages") || "[]");
    setMessages(storedMessages);

    // Load Cafe Settings
    const storedStatus = localStorage.getItem("otc_cafe_open");
    if (storedStatus !== null) {
      setCafeOpen(storedStatus === "true");
    }
    const storedNotice = localStorage.getItem("otc_cafe_notice") || "";
    setCafeNotice(storedNotice);
  }, []);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
      setIsLoggedIn(true);
      setError("");
      localStorage.setItem("otc_admin_logged_in", "true");
    } else {
      setError("Imposter! Only the true Saloon Sheriff can enter here. 🤠");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("otc_admin_logged_in");
  };

  // Delete message
  const handleDeleteMessage = (id) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("otc_messages", JSON.stringify(updated));
  };

  // Clear all messages
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to burn all telegrams, partner? This cannot be undone.")) {
      setMessages([]);
      localStorage.setItem("otc_messages", "[]");
    }
  };

  // Toggle Cafe Status
  const handleToggleCafe = () => {
    const nextState = !cafeOpen;
    setCafeOpen(nextState);
    localStorage.setItem("otc_cafe_open", nextState ? "true" : "false");

    // Dispatch storage event to notify other components instantly
    window.dispatchEvent(new Event("storage"));
  };

  // Save custom notice
  const handleSaveNotice = (e) => {
    e.preventDefault();
    localStorage.setItem("otc_cafe_notice", cafeNotice);
    alert("Saloon bulletin updated! 📜");
    window.dispatchEvent(new Event("storage"));
  };

  // Format Date Helper
  const formatDate = (isoString) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "Unknown Date";
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-(--color-cream) px-4">
        <div className="max-w-md w-full bg-(--color-wood-dark) wood-texture text-(--color-cream) rounded-2xl shadow-2xl border-4 border-(--color-mustard) overflow-hidden animate-fade-slide">
          {/* Header */}
          <div className="bg-(--color-saddle) py-6 px-8 text-center border-b-2 border-(--color-mustard)/40">
            <span className="text-4xl">🤠</span>
            <h2 className="font-(family-name:--font-display) text-2xl text-(--color-mustard-light) mt-2 uppercase tracking-wider">
              Sheriff's Office
            </h2>
            <p className="text-xs text-(--color-parchment)/60 mt-1 uppercase tracking-[0.2em]">
              Old Town Cafe Admin Sign-In
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 text-sm px-4 py-3 rounded-lg text-center font-medium">
                {error}
              </div>
            )}
            <div>
              <label className="block text-xs uppercase tracking-wider text-(--color-mustard-light) mb-2 font-semibold">
                Owner Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="temp@example.com"
                className="w-full px-4 py-3 rounded-lg border border-(--color-mustard)/35 bg-(--color-wood)/50 text-white focus:outline-none focus:ring-2 focus:ring-(--color-mustard)"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-(--color-mustard-light) mb-2 font-semibold">
                Sheriff Secret Key (Password)
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-(--color-mustard)/35 bg-(--color-wood)/50 text-white focus:outline-none focus:ring-2 focus:ring-(--color-mustard)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-(--color-mustard) hover:bg-(--color-mustard-light) text-(--color-wood-dark) font-bold uppercase tracking-wider py-3.5 rounded-lg transition-colors shadow-lg cursor-pointer"
            >
              Enter Sheriff's Office
            </button>

            <p className="text-[10px] text-center text-(--color-parchment)/40 uppercase tracking-widest mt-4">
              Authorized Personnel Only
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-(--color-cream) pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-(--color-wood-dark) wood-texture text-(--color-cream) rounded-xl p-6 border-2 border-(--color-mustard)/40 shadow-lg mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <h1 className="font-(family-name:--font-display) text-2xl md:text-3xl text-(--color-cream) uppercase tracking-wide">
                Sheriff's Dashboard
              </h1>
            </div>
            <p className="text-xs text-(--color-parchment)/75 mt-1">
              Logged in as owner: <span className="text-(--color-mustard-light) font-semibold">{OWNER_EMAIL}</span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-(--color-mustard) hover:bg-(--color-mustard-light) text-(--color-wood-dark) font-bold uppercase text-xs tracking-wider px-5 py-2.5 rounded-full transition-colors shadow"
          >
            Logout / Saddle Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN: Cafe Settings & Info */}
          <div className="space-y-8 lg:col-span-1">
            {/* Quick Stats Card */}
            <div className="bg-(--color-parchment) rounded-xl border border-(--color-mustard)/30 p-6 shadow-sm">
              <h3 className="font-(family-name:--font-display) text-lg text-(--color-wood-dark) uppercase tracking-wide border-b border-(--color-saddle)/20 pb-3 mb-4">
                Saloon Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-(--color-cream) p-4 rounded-lg text-center border border-(--color-mustard)/15">
                  <p className="text-2xl font-bold text-(--color-saddle)">{messages.length}</p>
                  <p className="text-[10px] text-(--color-wood)/60 uppercase font-semibold mt-1">Telegrams</p>
                </div>
                <div className={`p-4 rounded-lg text-center border border-(--color-mustard)/15 ${cafeOpen ? "bg-green-100/60" : "bg-red-100/60"}`}>
                  <p className={`text-sm font-bold uppercase ${cafeOpen ? "text-green-800" : "text-red-800"}`}>
                    {cafeOpen ? "Open" : "Closed"}
                  </p>
                  <p className="text-[10px] text-(--color-wood)/60 uppercase font-semibold mt-1.5">Saloon Status</p>
                </div>
              </div>
            </div>

            {/* Cafe Live Status Settings */}
            <div className="bg-(--color-parchment) rounded-xl border border-(--color-mustard)/30 p-6 shadow-sm">
              <h3 className="font-(family-name:--font-display) text-lg text-(--color-wood-dark) uppercase tracking-wide border-b border-(--color-saddle)/20 pb-3 mb-4">
                Operational Status
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-(--color-wood) mb-3">
                    Toggle the status to update the header notice or business banner live for visitors.
                  </p>
                  <button
                    onClick={handleToggleCafe}
                    className={`w-full py-3 rounded-lg font-bold uppercase tracking-wider transition-colors shadow ${cafeOpen
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                  >
                    Set Cafe Status: {cafeOpen ? "CLOSE SALOON" : "OPEN SALOON"}
                  </button>
                </div>

                <div className="rope-divider my-2 opacity-30" />

                <form onSubmit={handleSaveNotice} className="space-y-3">
                  <label className="block text-xs uppercase tracking-wider text-(--color-wood) font-semibold">
                    Bulletin / Custom Notice
                  </label>
                  <textarea
                    rows={3}
                    value={cafeNotice}
                    onChange={(e) => setCafeNotice(e.target.value)}
                    placeholder="e.g. Closing early tonight for private booking! Or Special discounts on Peri Peri fries today!"
                    className="w-full px-3 py-2 rounded-lg border border-(--color-saddle)/30 bg-(--color-cream) text-(--color-wood-dark) text-sm focus:outline-none focus:ring-2 focus:ring-(--color-mustard) resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-(--color-saddle) hover:bg-(--color-wood) text-(--color-cream) font-semibold uppercase tracking-wider text-xs py-2.5 rounded-lg transition-colors"
                  >
                    Post Bulletin Notice
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Submissions / Telegrams */}
          <div className="lg:col-span-2">
            <div className="bg-(--color-parchment) rounded-xl border border-(--color-mustard)/30 p-6 shadow-sm h-full flex flex-col">

              {/* Inbox Header */}
              <div className="flex justify-between items-center border-b border-(--color-saddle)/20 pb-4 mb-6">
                <div>
                  <h3 className="font-(family-name:--font-display) text-xl text-(--color-wood-dark) uppercase tracking-wide">
                    Telegrams Mailbox
                  </h3>
                  <p className="text-xs text-(--color-wood)/60">
                    Form inquiries sent from the website contact form
                  </p>
                </div>
                {messages.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-red-700 hover:text-red-900 hover:underline font-semibold uppercase tracking-wider"
                  >
                    Burn All Telegrams
                  </button>
                )}
              </div>

              {/* Message List */}
              <div className="space-y-4 flex-grow overflow-y-auto max-h-[600px] pr-2">
                {messages.length === 0 ? (
                  <div className="text-center py-16 px-4 bg-(--color-cream)/50 border border-dashed border-(--color-mustard)/30 rounded-xl">
                    <span className="text-4xl">✉️</span>
                    <p className="text-(--color-wood)/70 font-semibold mt-3">
                      No telegrams in the mailbox, partner!
                    </p>
                    <p className="text-xs text-(--color-wood)/50 mt-1">
                      Customer messages submitted via the Contact page will show up here.
                    </p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-(--color-cream) p-5 rounded-xl border border-(--color-mustard)/20 hover:border-(--color-mustard)/60 shadow-sm relative group transition-all"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-(--color-wood-dark) text-base">
                            {msg.name}
                          </h4>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-xs text-(--color-mustard) hover:text-(--color-amber) font-semibold break-all"
                          >
                            {msg.email}
                          </a>
                        </div>
                        <span className="text-[10px] text-(--color-wood)/55 font-medium bg-(--color-parchment) px-2.5 py-1 rounded-full border border-(--color-mustard)/10">
                          {formatDate(msg.date)}
                        </span>
                      </div>

                      <p className="text-sm text-(--color-wood) leading-relaxed whitespace-pre-wrap bg-(--color-parchment)/40 p-3.5 rounded-lg border border-(--color-mustard)/5">
                        {msg.message}
                      </p>

                      <div className="mt-3 flex justify-end">
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                        >
                          🗑️ Discard Telegram
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
