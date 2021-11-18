import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/404Page";
import LoginPage from "./pages/Login_page";
import RegisterPage from "./pages/Register_page";
import TopupPage from "./pages/Topup_page";
import ProfilePage from "./pages/Profile_page";
import CartPage from "./pages/Cart_page";
import SearchPage from "./pages/Search_page";
import WishlistPage from "./pages/Wishlist_Page";
import DetailProductPage from "./pages/DetailProductPage";
import CheckOutPage from "./pages/Checkout_Page";
import HistoryTransactionPage from "./pages/HistoryTransaction_Page";
import React from "react";
import { useContext } from "react";
import { CartContext } from "./components/cart";
import { SearchBar } from "./components/searchBar";
import { WishlistContext } from "./components/wishlist";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  const { product, cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const history = useHistory();

  const handleCart = () => {
    history.push("/checkout");
  };
  const handleWishlist = () => {
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
            <Navbar />
            <div className="container mx-auto p-10">
              {product.map((e) => {
                return <CartPage key={e.product_id} product={e} />;
              })}
              {/* {cart.map((e) => {
                return <CartPage key={e.product_id} product={e} />;
              })} */}
            </div>
            <Footer />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/topup">
            <TopupPage />
          </Route>
          <Route path="/wishlist">
            <Navbar />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {wishlist.map((e) => {
                return <WishlistPage key={e.product_id} wishlist={e} />;
              })}
            </div>
            <div className="grid justify-items-center">
              <button
                className="bg-green-500  text-white font-bold py-2 px-4 rounded"
                onClick={handleWishlist}
              >
                Keranjang
              </button>
            </div>
            <Footer />
          </Route>
          <Route
            path="/detail_produk/:id"
            component={DetailProductPage}
          ></Route>
          <Route path="/history_transaction">
            <HistoryTransactionPage />
          </Route>
          <Route path="/checkout">
            <CheckOutPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/topup">
            <TopupPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
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
