import React, { useState, useEffect } from "react";
import getListings from "../data/getListings";
import Listing from "./Listing";

export default function Listings() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const currListings = getListings();
      setListings(currListings);
    });
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Action</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listings &&
            listings.map((listing) => (
              <Listing
                key={listing.id}
                listing={listing}
                setListings={setListings}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
