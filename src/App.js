import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/404Page";
import LoginPage from "./pages/Login_page";
import RegisterPage from "./pages/Register_page";
import CartPage from "./pages/Cart_page";
import SearchPage from "./pages/Search_page";
import WishlistPage from "./pages/Wishlist_Page";
import DetailProductPage from "./pages/DetailProductPage";
import CheckOutPage from "./pages/Checkout_Page";
import HistoryTransactionPage from "./pages/HistoryTransaction_Page";
import React from "react";
import { useContext } from "react";
import { cartContext } from "./components/cart";
import { useHistory } from "react-router-dom";
import { SearchBar } from "./components/searchBar";
import { WhislistContext } from "./components/whislist";

function App() {
  const { products } = useContext(cartContext);
  const { whislist } = useContext(WhislistContext);
  const history = useHistory();
  const handlCart = () => {
    history.push("/checkout");
  };
  const handleWhislist = () => {
    history.push("/cart");
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/cart">
            {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {products.map((e) => {
                return <CartPage key={e.id} product={e} />;
              })}
            </div>
            <div className="grid justify-items-center">
              <button
                className="bg-green-500  text-white font-bold py-2 px-4 rounded"
                onClick={handleCart}
              >
                Keranjang
              </button>
            </div> */}
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/wishlist">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {whislist.map((e) => {
                return <WishlistPage key={e.product_id} whislist={e} />;
              })}
            </div>
            <div className="grid justify-items-center">
              <button
                className="bg-green-500  text-white font-bold py-2 px-4 rounded"
                onClick={handleWhislist}
              >
                Keranjang
              </button>
            </div>
          </Route>
          <Route path="/detail_produk">
            <DetailProductPage />
          </Route>
          <Route path="/history_transaction">
            <HistoryTransactionPage />
          </Route>
          <Route path="/checkout">
            <CheckOutPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
