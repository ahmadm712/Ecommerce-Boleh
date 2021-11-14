import { Link } from "react-router-dom";

function CartPage(props) {
  return (
    <>
      <Link to="/detail_produk">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={props.cart.product_image} alt="" />
          <div className="text-green-300 text-lg mb-2">
            {props.cart.product_origin_category}
          </div>
          <div className="font-bold text-xl mb-2">
            {props.cart.product_name}
          </div>
          <div className="text-red-600 text-xl mb-2">
            {props.cart.product_price}
          </div>
        </div>
      </Link>
      {/* {console.log(props)} */}
    </>
  );
}

export default CartPage;
