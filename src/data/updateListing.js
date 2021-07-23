import getListings from "./getListings";

export default function updateListing(listing) {
  try {
    let currListings = getListings();
    const listingIndex = currListings.findIndex(
      (oldListing) => oldListing.id === listing.id
    );
    currListings[listingIndex] = listing;
    localStorage.setItem("listings", JSON.stringify(currListings));
  } catch (error) {
    alert(
      `Unable to update listing for ${listing.firstName} ${listing.lastName}.`
    );
    console.error(error);
  }
}
