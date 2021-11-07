import React from 'react'
import { useHistory } from 'react-router-dom'


function WishlistPage() {
    const history = useHistory()
  const handleNext = () => {
    history.push("/cart");
  };
    return (
        <div>
            <h1>ini halaman wishlist</h1>
            <button
          className="bg-green-500  text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Keranjang
        </button>
        </div>
    )
}

export default WishlistPage
