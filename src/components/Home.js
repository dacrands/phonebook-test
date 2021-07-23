import React, { useEffect } from "react";
import initListings from "../data/initListings";
import Listings from "./Listings";

export default function Home() {
  useEffect(() => {
    initListings();
  }, []);
  return (
    <div>
      <header>
        <h1>Phonebook App</h1>
      </header>
      <Listings />
    </div>
  );
}
