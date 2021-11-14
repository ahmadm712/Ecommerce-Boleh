import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/wishlist">
          <WishlistPage />
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
        <Route path="/topup">
          <TopupPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
