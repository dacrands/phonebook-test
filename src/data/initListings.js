export default function initListings() {
  if (!localStorage.listings) {
    localStorage.setItem("listings", JSON.stringify([
      {
        id: 1,
        firstName: "first",
        lastName: "last",
        phone: "999-999-9999",
        email: "test@test.com"
      }
    ]))    
  }    
}