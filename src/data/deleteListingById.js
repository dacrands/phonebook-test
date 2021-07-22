export default function deleteListingById(id) {
    try {
        let currListings = JSON.parse(localStorage.getItem("listings"));
        const newListings = currListings.filter(listing => listing.id !== id);
        localStorage.setItem("listings", JSON.stringify(newListings));        
    } catch (error) {
        alert("Error deleting listing");
        console.error(error);
    }
}