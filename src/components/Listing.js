import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
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
        <button 
          ariaLabel="Delete"
          title="Delete"
          className="btn" 
          style={{color: "#d85858", marginRight: "1.5rem"}}
          onClick={() => deleteListing(props.listing)}
        >
          <FaTrashAlt />
        </button>        
        <Link
          ariaLabel="Edit"
          title="Edit"
          className="btn"
          style={{color: "#f19017", marginRight: "1.5rem"}}
          to={{
            pathname: "/listing",
            state: { listingToUpdate: props.listing },
          }}
        >
          <FaEdit />
        </Link>        
      </td>
      <td>{props.listing.firstName}</td>
      <td>{props.listing.lastName}</td>
      <td>{props.listing.phone}</td>
      <td>{props.listing.email}</td>
    </tr>
  );
}
