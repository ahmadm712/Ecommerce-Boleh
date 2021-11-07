import React from "react";
import { Link} from "react-router-dom";


export default function Footer() {
  return (
    <>
      <footer className="bg-primary-100 dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex flex justify-between">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div>
                  <Link
                    to="#"
                    className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    OLEH OLEH
                  </Link>
                </div>

                <p className="max-w-md mt-2 text-black dark:text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 ">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 flex justify-between">
                <div>
                  <h3 className="text-gray-800 uppercase dark:text-white">
                    Fitur Kami
                  </h3>
                  <Link
                    to="#"
                    className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Mega cloud
                  </Link>
                  <Link
                    to="#"
                    className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Aperion UI
                  </Link>
                  <Link
                    to="#"
                    className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Meraki UI
                  </Link>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Kontak
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    example@email.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

          <div>
            <p className="text-center text-gray-800 dark:text-white">
              © OLEH OLEH 2021 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
