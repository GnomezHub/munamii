
// --- Product Card Component ---
// Reusable component to display a single product.
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover object-center"
        // Fallback for image loading errors
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x300/cccccc/333333?text=Image+Not+Found";
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-lg">{product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
