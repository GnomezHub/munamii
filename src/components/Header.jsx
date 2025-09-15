import { Link } from "react-router";
import logo from "../assets/munamii.png"; // Adjust path if needed
import { useCart } from "./CartContext";
import { useState, useRef, useEffect } from "react";

// --- Header Component ---
// This component displays the navigation links and the brand name.
// It uses `setCurrentPage` to update the parent's state,
// controlling which page content is displayed.
const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Products", page: "products" },
    { name: "Contact", page: "contact" },
  ];

  const { cart, dispatch } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef();

  // Close cart dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }
    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  // Helper: parse price string (e.g. '49 kr' or '49,00 kr') to number
  function parsePrice(priceStr) {
    if (!priceStr) return 0;
    // Remove currency and spaces, replace comma with dot
    return parseFloat(priceStr.replace(/[^\d,.]/g, "").replace(",", ".")) || 0;
  }

  // Calculate total price
  const totalCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <header className="md:sticky top-0 md:py-2 lg:mx-6 z-40 bg-gradient-to-r from-teal-100 to-sky-300 text-white p-4 shadow-xl rounded-b-3xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-0 relative">
        {/* Brand Name/Logo */}
        <Link
          to="/"
          onClick={() => setCurrentPage("home")}
          className="mb-4 md:mb-0 md:ml-16 cursor-default"
        >
          <img
            src={logo}
            className="md:relative md:mb-[-40px] z-50 h-24 w-24 logo-img rounded-full outline-3 outline-teal-500 shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            alt="logo"
          />
        </Link>
        {/* Navigation Links + Cart */}
        <nav className="flex items-center gap-4">
          <ul className="flex md:mr-2 justify-center gap-2 font-bold font-munamii md:gap-4 md:text-lg">
            {navItems.map((item) => (
              <li key={item.page}>
                <Link
                  to={`/${item.page}`}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-2 md:px-4 py-2 rounded-full ring-1 transition-all duration-300 ease-in-out
                    ${
                      currentPage === item.page
                        ? "bg-white text-pink-500 shadow-md ring-white"
                        : "text-amber-900 hover:bg-teal-100 hover:text-teal-600 hover:shadow-lg hover:scale-105"
                    }
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Cart Icon */}
          <div className="relative ml-2" ref={cartRef}>
            <button
              onClick={() => setCartOpen((open) => !open)}
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-teal-100 transition-all"
              aria-label="Visa kundvagn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-amber-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.66 18h7.59a2.25 2.25 0 002.16-1.59l2.1-7.36a1.125 1.125 0 00-1.08-1.41H6.634m-1.488-3.528L6.634 6.75"
                />
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalCount}
                </span>
              )}
            </button>
            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-amber-900 rounded-xl shadow-xl border border-gray-200 z-50 p-4 min-h-[60px]">
                <h4 className="font-bold text-lg mb-2">Cart</h4>
                {cart.items.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  <>
                    <ul className="divide-y divide-gray-200">
                      {cart.items.map((item) => {
                        const priceNum = parsePrice(item.price);
                        return (
                          <li
                            key={item.id}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <div>
                                <span className="font-semibold">
                                  {item.name}
                                </span>
                                <div className="flex items-center gap-1 mt-1">
                                  <button
                                    onClick={() =>
                                      dispatch({
                                        type: "DECREMENT",
                                        payload: item.id,
                                      })
                                    }
                                    className="bg-teal-100 text-teal-700 rounded-full w-7 h-7 flex items-center justify-center font-bold text-base shadow hover:bg-teal-200 transition"
                                    aria-label={`Decrease quantity of ${item.name}`}
                                  >
                                    -
                                  </button>
                                  <span className="font-bold text-base w-7 text-center select-none">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      dispatch({
                                        type: "INCREMENT",
                                        payload: item.id,
                                      })
                                    }
                                    className="bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-base shadow hover:bg-teal-600 transition"
                                    aria-label={`Increase quantity of ${item.name}`}
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="text-xs text-gray-500">
                                  {priceNum.toLocaleString("sv-SE", {
                                    style: "currency",
                                    currency: "SEK",
                                    minimumFractionDigits: 2,
                                  })}{" "}
                                  each
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item.id,
                                })
                              }
                              className="text-pink-500 hover:text-pink-700 font-bold px-2"
                              aria-label={`Remove ${item.name}`}
                            >
                              &times;
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-4 flex justify-between items-center font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>
                        {totalPrice.toLocaleString("sv-SE", {
                          style: "currency",
                          currency: "SEK",
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                    <button
                      className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
                      onClick={() => alert("Checkout is not implemented yet.")}
                    >
                      Checkout
                    </button>
                  </>
                )}
                {cart.items.length > 0 && (
                  <button
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                    className="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
                  >
                    Clear cart
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
