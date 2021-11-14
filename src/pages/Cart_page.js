import { useHistory } from "react-router";

function CartPage(props) {
  const history = useHistory();
  return (
    <>
      <div className="w-4/6 h-55">
        <img
          className="w-full rounded-md h-full"
          src={props.cart.product_image}
          alt=""
        />
        <div className="font-light text-green-800">
          {props.cart.product_origin_category}
        </div>
        <div className="font-bold text-xl mb-2">{props.cart.product_name}</div>
        <div className="font-normal text-yellow-800">
          {props.cart.product_price}
        </div>
        <button
          className="w-full button bg-gray-400 text-white hover:bg-gray-800"
          onClick={() => {
            history.push(`detail_produk/${props.product_id}`);
          }}
        >
          Detail
        </button>
      </div>
    </>
  );
}

export default CartPage;
