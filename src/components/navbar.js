import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import SearchBar from "./searchBar";
import CartContext from "../context/cart/cart_context";

export default function Navbar() {
  const { cartItems, showHideCart } = useContext(CartContext);
  // const history = useHistory();
  // const handleClick = () => {
  //   history.push("/search");
  // };
  return (
    <>
      <nav class="bg-primary-200 shadow-lg mb-2 h-16 ">
        <div class="max-w-9xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <Link to="/" class="flex items-center py-4 px-2">
                  <img src={Logo} alt="Logo" class="h-8 w-h-8" />
                  <span class="font-semibold text-white text-lg">OLEH</span>
                </Link>
              </div>
            </div>
            <div className="pt-4 relative z-10 justify-self-center ">
              <SearchBar />
            </div>
            <div class="hidden md:flex items-center space-x-3 h-12">
              <Link
                to="/wishlist"
                class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-primary-100 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/history_transaction"
                class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-primary-100 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                to="/login"
                class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-primary-100 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </Link>

              <Link
                to="/cart"
                class="py-2 px-2 font-medium text-white bg-primary-100 rounded hover:bg-primary-100 transition duration-300"
              >
                Keranjang
              </Link>
              <div className="cart__icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              {cartItems.length > 0 && (
                <div className="item__count">
                  <span>{cartItems.length}0</span>
                  <h1></h1>
                </div>
              )}
            </div>
            </div>
            

            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="hidden mobile-menu">
          <ul class="">
            <li class="active">
              <a
                href="index.html"
                class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="block text-sm px-2 py-4 hover:bg-green-400 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block text-sm px-2 py-4 hover:bg-green-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-4 hover:bg-green-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
