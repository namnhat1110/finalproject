import { Route, Switch } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ProfilePage, CartPage, FourOhFourPage, WishlistPage } from "./pages";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import AuthPage from "./pages/AuthPage";
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/auth`} component={AuthPage} />
        <Route exact path={`/games/:id`} component={GameDetailPage} />
        <PrivateRoute exact path={`/auth/:id`} component={ProfilePage} />
        <Route exact path={`/cart`} component={CartPage} />
        <Route exact path={`/wishlist`} component={WishlistPage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
