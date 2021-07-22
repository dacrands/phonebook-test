import { uniqueId } from 'lodash'

export default function initListings() {
    if (!localStorage.getItem("listings")) {
      localStorage.setItem("listings", JSON.stringify([{
        id: uniqueId(),
        firstName: "first",
        lastName: "last",
        phone: "999-999-9999",
        email: "test@test.com"
      }]))
    }    
}