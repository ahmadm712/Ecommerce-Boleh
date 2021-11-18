<<<<<<< HEAD
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
=======
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import axios from "axios";

>>>>>>> origin/ikhwan2

function HistoryTransactionPage() {
  let url = `https://6191168c41928b001768ff36.mockapi.io/api/boleh/transaction_history`;
  //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get(url);
        //get response data
        const data = await response.data;
        console.log(response.data)
        //assign response data to state "posts"
        setPosts(response.data);
    }
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-lg">Kode Transaksi (01)</h1>
=======
      { posts.map((post, index) => (
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-between">
          <div>
          
                        
                                    
            <h1 className="font-semibold text-lg">Kode Transaksi { post.transaction_id }</h1>
>>>>>>> origin/ikhwan2
            <div className="flex justify-between w-80 p-2 ">
              <button className="button-big bg-green-500 :hover:bg-green-600 text-white rounded-lg text-center w-1/4">
                {" "}
                Detail
              </button>
<<<<<<< HEAD
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
=======
              <h1 className="font-semibold text-lg">Total : Rp { post.total_price }</h1>
            </div>
          </div>
          <div>
          { post.transaction_confirm == 1 &&
            <button className="button-big bg-green-500 :hover:bg-green-600 text-white rounded-lg text-center w-full p-2"> 
                Sudah Konfirmasi 
            </button>
          }
          { post.transaction_confirm == 0 &&
            <button className="button-big bg-red-500 :hover:bg-green-600 text-white rounded-lg text-center w-full p-2"> 
                Belum Konfirmasi 
            </button>
          }
          </div>
        </div>
      </div>
      )) }
      
>>>>>>> origin/ikhwan2
      <Footer />
    </div>
  );
}

export default HistoryTransactionPage;
