import { useCart } from "./CartContext";

// --- Product Card Component ---
// Reusable component to display a single product.
const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const cartItem = cart.items.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: product.id });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: product.id });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
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
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <p className="text-gray-600 text-lg font-bold min-w-[60px] text-right mb-0">
            {product.price}
          </p>
          {cartItem ? (
            <>
              <button
                onClick={handleDecrement}
                className="bg-teal-100 text-teal-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow hover:bg-teal-200 transition"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="font-bold text-lg w-8 text-center select-none">
                {cartItem.quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow hover:bg-teal-600 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
