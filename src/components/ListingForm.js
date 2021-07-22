import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from "react-router-dom";
import addListing from '../data/addListing';
import updateListing from '../data/updateListing';


export default function ListingForm(props) {    
    const location = useLocation();
    let history = useHistory();
    const [isUpdating, setIsUpdating] = useState(false);
    const [listing, setListing] = useState({
        id: Date.now(),
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    })  
    
    useEffect(() => {
        if (location.state) {
            const listingToUpdate = location.state.listingToUpdate;
            setIsUpdating(true);
            setListing(listingToUpdate);
        }
    }, [])    

    const handleSubmit = e => {
        e.preventDefault();
        if (isUpdating) {
            setListing(prevState => ({
                ...prevState,               
            }))    
            updateListing(listing);
            alert("Listing updated. Returning to home page.");
            history.push("/");
            return;
        }
        setListing(prevState => ({
            ...prevState,
            id: Date.now()
        }))
        addListing(listing);
        alert("Listing added. Returning to home page.");
        history.push("/");
    }
    
    const onChange = e => {        
        const { name, value } = e.target;
        setListing(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    return <>         
        <h2 style={{textAlign: "center"}}>
        {isUpdating 
        ? "Update Listing"
        : "Add Listing"
        }
        </h2>        
        <form onSubmit={handleSubmit} className="form">
            <label for="firstName">
                First Name
            </label>
            <input required type="text" name="firstName" value={listing.firstName} onChange={onChange}/>
            
            <label for="lastName">
                Last Name
            </label>
            <input required type="text" name="lastName" value={listing.lastName} onChange={onChange}/>
            
            <label for="phone">
                Phone
            </label>            
            <input required type="text" name="phone" value={listing.phone} onChange={onChange}/>
            
            <label for="email">
                Email
            </label>
            <input required type="email" name="email" value={listing.email} onChange={onChange}/>  

            <br />
            <button type="submit">Submit</button>      
        </form>
        <div className="navlink">
            <Link className="btn" to="/">Home</Link>
        </div>
    </>
}