import React, { useState } from "react";
import { Cake, Dessert } from "lucide-react"; // Removed Sparkles icon
import ProductCard from "../components/ProductCard";
import { CUPCAKE_PRODUCTS, WEDDING_CAKE_PRODUCTS } from "../components/data.jsx"; // Adjusted import to match the new data structure


// --- Products Page Component ---
// This component manages the display of cupcakes or wedding cakes.
const Products = () => {
  const [productType, setProductType] = useState("cupcakes"); // 'cupcakes' or 'weddingCakes'

  return (

    <div>
        <h2 className="text-teal-500 font-cakery text-4xl text-center mb-6">
        Our Products
      </h2>
      {/* Product Type Selection Buttons */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setProductType("cupcakes")}
          className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
            ${
              productType === "cupcakes"
                ? "bg-pink-400 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-pink-100 hover:text-pink-600 hover:ring-2 hover:ring-amber-900"
            }
            focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50`}
        >
          <Dessert className="mr-2" size={24} /> Cupcakes
        </button>
        <button
          onClick={() => setProductType("weddingCakes")}
          className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
            ${
              productType === "weddingCakes"
                ? "bg-blue-400 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-teal-100 hover:text-teal-600 hover:ring-2 hover:ring-amber-900"
            }
            focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50`}
        >
          <Cake className="mr-2" size={24} /> Wedding Cakes
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
  );
};
export default Products;
