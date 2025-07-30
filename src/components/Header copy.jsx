import { Link } from "react-router";
import logo from "../assets/munamii.png"; // Adjust path if needed

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

  return (
    // <header className="bg-gradient-to-r from-pink-400 via-blue-400 to-teal-500 text-white p-4 shadow-lg rounded-b-xl">
    // <header className="bg-gradient-to-r from-pink-300 to-sky-300 text-white p-4 shadow-lg rounded-b-xl">
    <header className="bg-gradient-to-r from-teal-100 to-sky-300 text-white p-4 shadow-lg rounded-b-3xl lg:mx-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-0">
        {/* Brand Name/Logo */}

        <Link
          to="/"
          onClick={() => setCurrentPage("home")}
          className="mb-6 md:mb-0"
        >
          <img
            src={logo}
            className="h-24 w-24 logo-img rounded-full outline-3 outline-teal-500 shadow-md  hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            alt="logo"
          />
        </Link>
        {/* Navigation Links */}
        <nav>
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
        </nav>
      </div>
    </header>
  );
};
export default Header;
