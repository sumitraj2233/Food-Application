import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import OrderPage from "./components/OrderPage";
import AdminHome from "./components/Admin/AdminHome";
import CreateResturant from "./components/Admin/CreateResturant";
import ViewResturant from "./components/Admin/ViewResturant";
import AddDishes from "./components/Admin/AddDishes";
import Logout from "./components/Logout";
import ViewDishes from "./components/Admin/ViewDishes";
import ViewOrder from "./components/Admin/ViewOrder";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/order">
            <OrderPage />
          </Route>
          <Route exact path="/adminHome">
            <AdminHome />
          </Route>
          <Route exact path="/createResturan">
            <CreateResturant />
          </Route>
          <Route exact path="/viewResturant">
            <ViewResturant />
          </Route>
          <Route exact path="/addDishes">
            <AddDishes />
          </Route>
          <Route exact path="/viewDishes">
            <ViewDishes />
          </Route>
          <Route exact path="/viewOrder">
            <ViewOrder />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
