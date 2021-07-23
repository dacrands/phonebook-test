import React from "react";
import { Link } from "react-router-dom";
import deleteListingById from "../data/deleteListingById";
import getListings from "../data/getListings";

export default function Listing(props) {
  const deleteListing = (listing) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the listing for ${listing.firstName} ${listing.lastName}?`
    );
    if (!confirmDelete) {
      return;
    }
    deleteListingById(listing.id);
    const currListings = getListings();
    props.setListings([...currListings]);
  };

  return (
    <tr>
      <td>
        (
        <button className="btn" onClick={() => deleteListing(props.listing)}>
          Del
        </button>
        ) (
        <Link
          className="btn"
          to={{
            pathname: "/listing",
            state: { listingToUpdate: props.listing },
          }}
        >
          Edit
        </Link>
        )
      </td>
      <td>{props.listing.firstName}</td>
      <td>{props.listing.lastName}</td>
      <td>{props.listing.phone}</td>
      <td>{props.listing.email}</td>
    </tr>
  );
}
