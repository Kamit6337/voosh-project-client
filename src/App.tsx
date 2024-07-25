import "./App.css";
import Router from "./router/Router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
