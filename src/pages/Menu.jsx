import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

// REAL Old Town Cafe menu — transcribed from official menu photos
const menuData = {
  "OT Soups": {
    type: "simple",
    items: [
      { name: "Manchow (Veg / Non Veg)", price: "160 / 180" },
      { name: "Hot & Sour (Veg / Non Veg)", price: "160 / 180" },
      { name: "Tomato Soup", price: "160" },
      { name: "Tom-Yum Chicken Soup", price: "200", tag: "OT SPECIAL" },
    ],
  },
  "Old Town Munchies": {
    type: "detailed",
    items: [
      { name: "Classic French Fries / Masala Fries", price: "160" },
      { name: "Peri Peri Fries (With Cheese)", price: "180 / 240" },
      { name: "Loaded Mexican Fries", price: "260", tag: "OT SPECIAL", desc: "French fries topped with beans, jalapeños, and molten cheese." },
      { name: "Mexican Tacos (Veg / Paneer / Chicken)", price: "250 / 290 / 320", tag: "OT SPECIAL" },
      { name: "Mexican Hot Pot", price: "340", tag: "OT SPECIAL", desc: "Served with fillings like spiced rajma, paneer tikka/chicken, spicy veg mix." },
      { name: "Mexican Rice Pot", price: "180", desc: "Baked rice dish with beans, corn, cheese, spicy sauce — very fusion style." },
      { name: "Cheese Garlic Bread", price: "320" },
      { name: "Hummus & Pita Bread", price: "340" },
      { name: "Amritsari Pindi Chole Hummus & Pita Bread", price: "260" },
      { name: "Nachos Loaded With Cheese", price: "240" },
      { name: "Onion Rings", price: "190" },
      { name: "Garlic Fry", price: "220" },
      { name: "Chana Chat / Peanut Chat", price: "250" },
      { name: "Chana Roast", price: "30 / 35" },
      { name: "Papad Dry / Fry", price: "30 / 35" },
      { name: "Masala Papad Dry / Fry", price: "150 / 170" },
      { name: "Classic Veg Sandwich / Chicken Sandwich", price: "170 / 200" },
      { name: "Grilled Sandwich (Veg / Non Veg)", price: "250 / 270", tag: "OT SPECIAL" },
      { name: "Mafia Sandwich (Veg / Non Veg)", price: "160" },
      { name: "Veg Kathi Roll", price: "190 / 220" },
      { name: "Paneer Kathi Roll / Chicken Kathi Roll", price: "190 / 220" },
    ],
  },
  "From The Tandoor Pit": {
    type: "detailed",
    items: [
      { name: "Paneer Tikka / Chicken Tikka", price: "390 / 430", tag: "BEST SELLER" },
      { name: "Paneer Malai Tikka / Chicken Malai Tikka", price: "430 / 470" },
      { name: "Paneer Haryali Tikka / Chicken Haryali Tikka", price: "430 / 470" },
      { name: "Paneer Banjara / Chicken Banjara", price: "430 / 470", tag: "BEST SELLER" },
      { name: "Paneer Pahadi / Chicken Pahadi", price: "430 / 470" },
      { name: "Paneer Afgani", price: "430" },
      { name: "Chicken Tikka Reshmi", price: "490", tag: "OT SPECIAL" },
      { name: "Chicken Kali Mirch Tikka", price: "470" },
      { name: "Hara Bhara Kabab", price: "280" },
      { name: "Veg Seekh Kabab / Chicken Seekh Kabab", price: "320 / 440" },
      { name: "Corn Seekh Kabab", price: "320" },
      { name: "Veg Bullet Kabab", price: "320", tag: "OT SPECIAL" },
      { name: "Cheese Corn Kabab", price: "380" },
      { name: "Dahi Ke Kabab", price: "380" },
      { name: "Chicken Amritsari Tikka / Paneer Amritsari Tikka", price: "450 / 380 / 470" },
      { name: "Chicken Wings", price: "390" },
      { name: "Smokey Grilled Chicken", price: "490", tag: "BEST SELLER" },
      { name: "Fish Fry (With Bone / Boneless)", price: "440 / 480" },
      { name: "Fish Finger", price: "480" },
      { name: "Fish Tikka", price: "410" },
    ],
  },
  "Coffee": {
    type: "hotIce",
    items: [
      { name: "Espresso", hot: "110", ice: "120" },
      { name: "Americano", hot: "130", ice: "140" },
      { name: "Mocha", hot: "170", ice: "180" },
      { name: "Latte", hot: "170", ice: "180" },
      { name: "Cappuccino", hot: "150", ice: "160" },
      { name: "Triple Chocolate Mocha", hot: "-", ice: "220" },
      { name: "Choco Chip Latte", hot: "-", ice: "190" },
      { name: "Cortado", hot: "150", ice: "-" },
      { name: "Affogato", hot: "-", ice: "180" },
      { name: "Classic Frappe", hot: "-", ice: "190" },
      { name: "Mocha Frappe", hot: "-", ice: "210" },
      { name: "Nutella Frappe", hot: "-", ice: "230" },
      { name: "Devil Dark Frappe", hot: "-", ice: "250" },
    ],
    note: "Add-on flavours — Hazelnut, Caramel, Irish, Vanilla, Honey: +₹50",
  },
  "Shakes": {
    type: "simple",
    items: [
      { name: "Nutella Shake", price: "200" },
      { name: "Devil Dark Shake", price: "220" },
      { name: "Ferrero Rocher Shake", price: "280" },
      { name: "Milk Shake", price: "180" },
      { name: "Strawberry Shake", price: "190" },
      { name: "Oreo Shake", price: "190" },
      { name: "Kit-Kat Shake", price: "190" },
      { name: "Mango Mastani (Seasonal)", price: "250" },
    ],
  },
  "Mocktails & Smoothies": {
    type: "simple",
    items: [
      { name: "Fresh Lime", price: "110" },
      { name: "Virgin Mojito", price: "140" },
      { name: "Blue Ocean", price: "150" },
      { name: "Kiwi / Strawberry / Mango / Green Apple / Peach / Lemon", price: "150" },
      { name: "Green Apple Ice Tea", price: "170" },
      { name: "Lychee Orange Mojito", price: "160" },
      { name: "Tropical Fruit Punch", price: "180" },
      { name: "Mango Strawberry Smoothie (Greek Yogurt)", price: "280" },
      { name: "Banana Mango Smoothie", price: "280" },
      { name: "Banana Strawberry Smoothie", price: "280" },
      { name: "Strawberry Smoothie", price: "240" },
      { name: "Banana Smoothie", price: "240" },
    ],
  },
  "OT Special Drinks": {
    type: "simple",
    items: [
      { name: "Red Rose Refresher", price: "170" },
      { name: "Matcha Frappe", price: "250" },
      { name: "Charcoal Frappe", price: "250" },
      { name: "Matcha Latte", price: "200" },
    ],
  },
};

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const current = menuData[activeCategory];

  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-(--color-wood-dark) wood-texture py-20 px-6 text-center">
        <p className="text-(--color-mustard-light) uppercase tracking-[0.3em] text-sm mb-3">
          Bites &amp; Brews
        </p>
        <h1 className="font-(family-name:--font-display) text-(--color-cream) text-4xl sm:text-5xl">
          Our Menu
        </h1>
        <p className="text-(--color-parchment)/70 mt-4 text-sm">
          Open Daily · 4 PM – 12 AM
        </p>
      </section>

      <section className="bg-(--color-cream) py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-(--color-mustard) text-(--color-wood-dark) shadow-md"
                    : "bg-(--color-parchment) text-(--color-wood) hover:bg-(--color-mustard-light)/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <SectionHeading title={activeCategory} />

          {/* Hot/Ice dual pricing layout (Coffee) */}
          {current.type === "hotIce" && (
            <>
              <div className="bg-(--color-parchment) rounded-xl overflow-hidden border border-(--color-mustard)/30">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 bg-(--color-saddle) text-(--color-cream) font-semibold text-sm uppercase tracking-wide">
                  <span>Item</span>
                  <span className="text-right w-16">Hot</span>
                  <span className="text-right w-16">Ice</span>
                </div>
                {current.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3.5 items-center ${
                      idx % 2 === 0 ? "bg-(--color-cream)" : "bg-(--color-parchment)"
                    }`}
                  >
                    <span className="text-(--color-wood-dark) font-medium">{item.name}</span>
                    <span className="text-right w-16 text-(--color-saddle) font-semibold">
                      {item.hot === "-" ? "—" : `₹${item.hot}`}
                    </span>
                    <span className="text-right w-16 text-(--color-saddle) font-semibold">
                      {item.ice === "-" ? "—" : `₹${item.ice}`}
                    </span>
                  </div>
                ))}
              </div>
              {current.note && (
                <p className="text-center text-(--color-wood)/60 text-sm mt-6 italic">
                  {current.note}
                </p>
              )}
            </>
          )}

          {/* Simple list layout (Soups, Shakes, Mocktails, OT Specials) */}
          {current.type === "simple" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center gap-4 bg-(--color-parchment) rounded-lg px-5 py-4 border border-(--color-mustard)/20 hover:border-(--color-mustard) transition-colors duration-200"
                >
                  <span className="text-(--color-wood-dark) font-medium">
                    {item.name}
                    {item.tag && (
                      <span className="ml-2 text-[10px] font-bold uppercase bg-(--color-mustard) text-(--color-wood-dark) px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </span>
                  <span className="font-semibold text-(--color-saddle) whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed layout with descriptions (Munchies, Tandoor) */}
          {current.type === "detailed" && (
            <div className="grid sm:grid-cols-2 gap-5">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start gap-4 bg-(--color-parchment) rounded-xl p-5 border border-(--color-mustard)/20 hover:border-(--color-mustard) transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-medium text-(--color-wood-dark) leading-snug">
                      {item.name}
                      {item.tag && (
                        <span className="ml-2 text-[10px] font-bold uppercase bg-(--color-mustard) text-(--color-wood-dark) px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.tag}
                        </span>
                      )}
                    </h3>
                    {item.desc && (
                      <p className="text-(--color-wood)/65 text-xs mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span className="font-semibold text-(--color-saddle) whitespace-nowrap text-sm">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
