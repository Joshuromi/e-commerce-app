import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up";
import HatsPage from "./pages/hatspage/hatspage";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
);

export default App;
