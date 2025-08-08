import React, { useState } from "react";
import { Cake, Dessert } from "lucide-react"; // Removed Sparkles icon
import ProductCard from "../components/ProductCard";
import {
  CUPCAKE_PRODUCTS,
  WEDDING_CAKE_PRODUCTS,
} from "../components/data.jsx"; // Adjusted import to match the new data structure

// --- Products Page Component ---
// This component manages the display of cupcakes or wedding cakes.
const Products = () => {
  const [productType, setProductType] = useState("cupcakes"); // 'cupcakes' or 'weddingCakes'

  return (
    <main className="flex-grow text-gray-800 my-6 mx-2 md:mx-6">
      <div className="container max-w-6xl mx-auto p-2 md:p-6 my-4 bg-teal-50 diagonal-stripes rounded-3xl shadow-xl">
        <h2 className="text-amber-900 font-cakery text-4xl text-center mb-6">
          Our Products
        </h2>
        {/* Product Type Selection Buttons */}
        <div className="flex justify-center mb-8 gap-6">
          <button
            onClick={() => setProductType("cupcakes")}
            className={`flex items-center px-3 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer
            ${
              productType === "cupcakes"
                ? "bg-pink-400 text-white shadow-lg scale-110"
                : "bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600 ring-2 hover:ring-4  hover:ring-amber-900"
            }
            `}
           // focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50`}
          >
            <Dessert className="mr-2" size={26} /> Cupcakes
          </button>
          <button
            onClick={() => setProductType("weddingCakes")}
            className={`flex items-center px-3 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer
            ${
              productType === "weddingCakes"
                ? "bg-blue-400 text-white shadow-lg scale-110"
                : "bg-white text-gray-700 hover:bg-teal-100 hover:text-teal-600 ring-2 hover:ring-4 hover:ring-amber-900"
            }
           `}
            // focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50`}
          >
            <Cake className="mr-2" size={28} /> Wedding Cakes
          </button>
        </div>

        {/* Display Products based on selected type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productType === "cupcakes"
            ? CUPCAKE_PRODUCTS.map((cupcake) => (
                <ProductCard key={cupcake.id} product={cupcake} />
              ))
            : WEDDING_CAKE_PRODUCTS.map((cake) => (
                <ProductCard key={cake.id} product={cake} />
              ))}
        </div>
      </div>
    </main>
  );
};
export default Products;
