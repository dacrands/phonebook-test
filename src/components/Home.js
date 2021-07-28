import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import initListings from "../data/initListings";
import Listings from "./Listings";

export default function Home() {
  useEffect(() => {
    initListings();
  }, []);
  return (
    <div>
      <header className="header">
        <h1>Phonebook App</h1>
      </header>
      <Listings />
      <div className="navlink">
        <Link
          className="btn"
          to="/listing"
          ariaLabel="Add new entry"
          title="Add new entry"
        >
          <BsPlusCircle />
        </Link>
      </div>
    </div>
  );
}
