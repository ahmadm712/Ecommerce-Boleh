import React from "react";
import { Link } from "react-router-dom";

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
                  Platform yang mengakomodasi mitra UMKM untuk memperkenalkan
                  sekaligus menjual produk UMKM berbasis digital dengan
                  kemudahan akses dan jangkauan yang luas tiap daerahnya.
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 ">
              <div className="grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 flex justify-between">
                
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Kontak
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +62 8455 156645
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    boleh@gmail.com
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
