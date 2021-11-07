import React from 'react'
import {useHistory} from 'react-router-dom'

function CartPage() {
    const history = useHistory()
  const handleNext = () => {
    history.push("/checkout");
  };
    return (
        <div>
            <h1>ini Halaman Keranjang</h1>
            <button
          className="bg-green-500  text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Checkout
        </button>
        </div>
    )
}

export default CartPage
