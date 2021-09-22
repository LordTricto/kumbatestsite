import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./pages/profile/profile";
import OrderSummary from "./pages/orderSummary/orderSummary";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const location = useLocation();
  const [active, setActive] = useState(true);
  useEffect(() => {
    location.pathname === "/" ? setActive(true) : setActive(false);
  }, [location]);

  return (
    <div className="App">
      <Navbar active={active} />
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/ordersummary" exact component={OrderSummary} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
