import { Link } from "react-router-dom";

export default function CartPage(props) {
  return (
    <>
      <Link to="/detail_produk">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={props.product.image} alt="" />
          <div className="text-green-300 text-lg mb-2">
            {props.product.location}
          </div>
          <div className="font-bold text-xl mb-2">
            {props.product.productName}
          </div>
          <div className="text-red-600 text-xl mb-2">{props.product.price}</div>
        </div>
      </Link>
    </>
  );
}
