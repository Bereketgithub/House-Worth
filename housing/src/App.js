import Listing from "./components/Listing";
import classes from "./App.module.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ListingPage from "./components/ListingPage";
import { Hero } from "./componentss/Hero";
import { Explore } from "./componentss/Explore";
import HouseListing from "./componentss/HouseListing";

function App() {
  const [{ listing_result }, dispatch] = useStateValue();

  useEffect(() => { }, [listing_result]);

  return (
    <BrowserRouter>
      <div className={classes.appContainer}>
     
        <div className={classes.App}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <HouseListing />
                  <Explore />
                </>
              }
            />
            <Route path="/test" element={<HouseListing />} />
            <Route path="/listing/:id" element={<ListingPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
