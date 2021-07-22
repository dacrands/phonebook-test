export default function addListing(newListing) {
    try {
        let currListings = JSON.parse(localStorage.getItem("listings"));    
        currListings.push(newListing);
        localStorage.setItem("listings", JSON.stringify(currListings));
    } catch (error) {
        alert(`Error adding new listing for ${newListing.firstName} ${newListing.lastName}`);
    }
}