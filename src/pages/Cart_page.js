import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

function CartPage(props) {
  const history = useHistory();

  const handleRemove = (product_id) => {
    props.removeItem(product_id);
  };
  //to add the quantity
  const handleAddQuantity = (product_id) => {
    props.addQuantity(product_id);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (product_id) => {
    props.subtractQuantity(product_id);
  };

  // console.log(props);

  return (
    <>
      <div className="flex my-4">
        <img
          className="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden  "
          src={props.product.product_image}
          alt=""
        />
        <div className="w-4/5  border-gray-400 border lg:border-gray-400 grid grid-cols-2">
          <div className="bg-white p-4  leading-normal flex flex-col justify-between">
            <div className="font-bold text-4xl mb-2">
              {props.product.product_name}
            </div>
            <div className="font-normal text-yellow-800 text-xl">
              Rp {props.product.product_price}
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 relative">
            <div className="flex flex-row absolute bottom-0 pb-4">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </Link>

              <div className="flex px-4">
                <Link to="/cart">
                  <i
                    onClick={() => {
                      handleSubtractQuantity(props.product.product_id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </i>
                </Link>
                <div className="mx-4 py-1">
                  <p className="text-lg">{props.product.product_stock}</p>
                  {/* {console.log(props.product.cart_amount)}; */}
                </div>
                <Link to="/cart">
                  <i
                    onClick={() => {
                      handleAddQuantity(props.product.product_id);
                    }}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
