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
import CartPage from "./pages/Cart_page";
import SearchPage from "./pages/Search_page";
import WishlistPage from "./pages/Wishlist_Page";
import DetailProductPage from "./pages/DetailProductPage";
import CheckOutPage from "./pages/Checkout_Page";
import HistoryTransactionPage from "./pages/HistoryTransaction_Page";
import React from "react";
import { useContext } from "react";
import { CartContext } from "./components/cart";
import { WishlistContext } from "./components/wishlist";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const { product } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.product_id === product.product_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.product_id === product.product_id
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.product_id === product.product_id);
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) => x.product_id !== product.product_id)
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.product_id === product.product_id
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
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
            </div>
            <Footer />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/wishlist">
            <Navbar />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {wishlist.map((e) => {
                return <WishlistPage key={e.product_id} wishlist={e} />;
              })}
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
