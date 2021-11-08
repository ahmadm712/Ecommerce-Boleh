import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function HistoryTransactionPage() {
  return (
    <div>
      <Navbar />
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-lg">Kode Transaksi (01)</h1>
            <div className="flex justify-between w-80 p-2 ">
              <button className="button-big bg-green-500 :hover:bg-green-600 text-white rounded-lg text-center w-1/4">
                {" "}
                Detail
              </button>
              <h1 className="font-semibold text-lg">Total :200.000</h1>
            </div>
          </div>
          <div>
            <button className="button-big bg-red-500 :hover:bg-green-600 text-white rounded-lg text-center w-full p-2">
              Tidak Di Konfirmasi
            </button>
          </div>
        </div>
      </div>
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-lg">Kode Transaksi (02)</h1>
            <div className="flex justify-between w-80 p-2 ">
              <button className="button-big bg-green-500 :hover:bg-green-600 text-white rounded-lg text-center w-1/4">
                {" "}
                Detail
              </button>
              <h1 className="font-semibold text-lg">Total :250.000</h1>
            </div>
          </div>
          <div>
            <button className="button-big bg-red-500 :hover:bg-green-600 text-white rounded-lg text-center w-full p-2">
              Tidak Di Konfirmasi
            </button>
          </div>
        </div>
      </div>
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-lg">Kode Transaksi (03)</h1>
            <div className="flex justify-between w-80 p-2 ">
              <button className="button-big bg-green-500 :hover:bg-green-600 text-white rounded-lg text-center w-1/4">
                {" "}
                Detail
              </button>
              <h1 className="font-semibold text-lg">Total :290.000</h1>
            </div>
          </div>
          <div>
            <button className="button-big bg-blue-500 :hover:bg-green-600 text-white rounded-lg text-center w-full p-2">
              Sudah Di Konfirmasi
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HistoryTransactionPage;
