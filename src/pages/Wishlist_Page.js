import { Link } from "react-router-dom";

function WishlistPage(props) {
  return (
    <>
      <Link to="/detail_produk/2">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={props.whislist.product_image} alt="" />
          <div className="text-green-300 text-lg mb-2">
            {props.whislist.product_origin_category}
          </div>
          <div className="font-bold text-xl mb-2">
            {props.whislist.product_name}
          </div>
          <div className="text-red-600 text-xl mb-2">
            {props.whislist.product_price}
          </div>
        </div>
      </Link>
    </>
  );
}

export default WishlistPage;
