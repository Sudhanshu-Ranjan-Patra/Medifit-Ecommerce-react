
import React from "react";

// Replace these with actual image imports/links from your Figma exports
const PRODUCT_IMAGE = "/assets/b12-medicine.jpg";
const CAPSULES_IMAGE = "/assets/b12-capsules.jpg";
const PRODUCT_LIST = [
  {
    image: "../images/MedicalStore/lhp-1.png",
    name: "Microscope",
    price: 45,
    oldPrice: null,
    tag: "New"
  },
  {
    image: "../images/MedicalStore/lhp-2.png",
    name: "Pulse oximeter",
    price: 19,
    oldPrice: 25,
    tag: "Save 10%"
  },
  {
    image: "../images/MedicalStore/lhp-3.png",
    name: "Vitamin serum",
    price: 20,
    oldPrice: 30,
    tag: null
  },
  {
    image: "../images/MedicalStore/lhp-4.png",
    name: "High protein",
    price: 50,
    oldPrice: null,
    tag: "New"
  }
];

const Shop = () => (
  <div className="bg-[#f5f4ef] min-h-screen px-4 py-8 font-sans">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Product Images and Price */}
      <div className="col-span-1 flex flex-col items-center md:items-start">
        <img src="../images/shop-home-1.png" alt="B12 Medicine" className="rounded-xl w-60 h-44 object-cover"/>
        <img src="../images/shop-home-2.png" alt="Capsules" className="rounded-xl w-60 h-44 object-cover mt-6"/>
      </div>
      <div className="col-span-2 flex flex-col">
        <h1 className="text-3xl font-semibold text-[#48341d] mb-2">B12 Medicine</h1>
        <div className="flex items-center gap-5 mb-3">
          <span className="text-2xl text-[#48341d] font-semibold">$19.00 USD</span>
          <span className="line-through text-[#bbb] text-xl">$25.00 USD</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <input type="number" min="1" defaultValue={1} className="bg-[#f3eee5] border border-gray-200 rounded px-3 py-1 w-16" />
          <button className="bg-[#48341d] text-white px-6 py-2 rounded shadow hover:bg-[#624d2f]">Add to cart</button>
        </div>
        <div>
          <h2 className="font-medium text-[#48341d] mb-1">Product Description</h2>
          <p className="text-gray-700 text-[15px] mb-3 max-w-xl">
            B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.
          </p>
          <strong className="text-[#48341d]">Key Benefits:</strong>
          <ul className="list-disc ml-6 mt-1 text-[15px] text-gray-800">
            <li>Boosts energy levels.</li>
            <li>Supports healthy brain function.</li>
            <li>Promotes red blood cell production.</li>
            <li>Aids in maintaining nerve health.</li>
          </ul>
        </div>
        {/* Features */}
        <div className="flex gap-10 mt-8 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🚚</span>
            <span className="text-[15px] text-[#48341d]">Free shipping</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💸</span>
            <span className="text-[15px] text-[#48341d]">Easy refund</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💬</span>
            <span className="text-[15px] text-[#48341d]">Online support</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💳</span>
            <span className="text-[15px] text-[#48341d]">Flexible payment</span>
          </div>
        </div>
        {/* Customer Reviews */}
        <h2 className="mt-5 mb-2 text-xl font-semibold text-[#48341d]">Customers review</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-sm text-[#48341d] shadow">
            <p>B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!</p>
            <span className="block mt-3 font-medium text-sm">Olivia Garcia</span>
          </div>
          <div className="bg-white rounded-xl p-4 text-sm text-[#48341d] shadow">
            <p>I’ve regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!</p>
            <span className="block mt-3 font-medium text-sm">Sophia Brown</span>
          </div>
          <div className="bg-white rounded-xl p-4 text-sm text-[#48341d] shadow">
            <p>As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!</p>
            <span className="block mt-3 font-medium text-sm">Ethan Harris</span>
          </div>
        </div>
      </div>
    </div>
    {/* Recent Products */}
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-xl font-semibold text-[#48341d] mb-3">Recent Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {PRODUCT_LIST.map((prod, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            {prod.tag && (
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs mb-2">{prod.tag}</span>
            )}
            <img src={prod.image} className="w-20 h-30  mb-2" alt={prod.name} />
            <h3 className="font-semibold text-[#48341d] mb-1 text-sm">{prod.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-[#48341d]">${prod.price}.00 USD</span>
              {prod.oldPrice && (
                <span className="line-through text-[#bbb]">${prod.oldPrice}.00 USD</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Community Banner */}
    <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6 items-center bg-white p-7 rounded-2xl shadow">
      <div>
        <h3 className="text-2xl font-semibold text-[#48341d] mb-2">Join our trustable Medift product community</h3>
        <p className="text-gray-600 text-[15px] mb-3">
          Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
        </p>
        <button className="bg-[#48341d] text-white px-6 py-2 rounded shadow hover:bg-[#624d2f]">Get started</button>
      </div>
      {/* Add preview product images here as grid */}
      <div className="grid grid-cols-2 gap-3">
        <img src="/assets/capsule-bottle.jpg" className="rounded w-full h-24 object-cover" alt="" />
        <img src="/assets/pill-strip.jpg" className="rounded w-full h-24 object-cover" alt="" />
        <img src="/assets/lab-medicines.jpg" className="rounded w-full h-24 object-cover" alt="" />
        <img src="/assets/assorted-pills.jpg" className="rounded w-full h-24 object-cover" alt="" />
      </div>
    </div>
  </div>
);

export default Shop;
