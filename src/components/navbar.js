import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import SearchBar from "./searchBar";
import CartContext from "../data/context/cart/cart_context";
import { useHistory } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const { cartItems, showHideCart } = useContext(CartContext);
  let user_login = JSON.parse(localStorage.getItem("user-info"));
  // const history = useHistory();
  // const handleClick = () => {
  //   history.push("/search");
  // };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const history = useHistory();
  function submit(e) {
    localStorage.removeItem("user-info");
    history.push("/login");
  }

  return (
    <>
      <nav class="bg-primary-200 shadow-lg mb-2 h-16 ">
        <div class="max-w-9xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <Link
                  to="/"
                  class="flex items-center py-4 px-2 text-2xl font-bold font-heading"
                >
                  <img src={Logo} alt="Logo" class="h-8 w-h-8" />
                  <span class="font-semibold text-white text-lg">OLEH</span>
                </Link>
              </div>
            </div>
            <div className="sm:invisible md:visible lg:visible pt-4 relative z-10 justify-self-center ">
              <SearchBar />
            </div>
            <div class="hidden md:flex items-center space-x-3 h-12">
              {localStorage.getItem("user-info") !== null && (
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
              )}
              {localStorage.getItem("user-info") !== null && (
                <Link
                  to="/cart"
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
              )}

              {localStorage.getItem("user-info") === null && (
                <Link
                  to="/login"
                  class="py-2 px-2 font-medium text-white bg-primary-100 rounded hover:bg-primary-100 transition duration-300"
                >
                  Login
                </Link>
              )}

              {localStorage.getItem("user-info") !== null && (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-primary-200 text-sm font-medium text-white hover:bg-primary-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-500">
                      {user_login.name}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-primary-200 text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <img
                                class="rounded"
                                src={user_login.image}
                                alt="img"
                                width="50"
                              />
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/profile"
                              className={classNames(
                                active
                                
                                  ? "bg-primary-200 text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/history_transaction"
                              className={classNames(
                                active
                                  ? "bg-primary-200 text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              History Transaksi
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/topup"
                              className={classNames(
                                active
                                  ? "bg-primary-200 text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Topup
                            </a>
                          )}
                        </Menu.Item>
                        <form onSubmit={(e) => submit(e)} className="space-y-6">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                  ? "bg-primary-200 text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
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
