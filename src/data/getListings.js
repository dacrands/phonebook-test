export default  function getListings() {
    try {
        const listings = JSON.parse(localStorage.getItem("listings"));               
        return listings
    } catch (error) {
        alert("There was an error retrieving your listings.");
        console.error(error);
    }
}