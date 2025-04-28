import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../components/AuthContext";
const baseUrl = import.meta.env.VITE_API_BASE_URL;


const Profile = () => {
    const [error, setError] = useState(null); // State to handle errors
    const { user, setUser, getUserAccount, logoutUser } = useContext(AuthContext);


    useEffect(() => {
        getUserAccount();
    }, []);

    if (error) {
        return <div className="alert alert-danger">{error}</div>; // Show error if there's any
    }

    return (
        <section className="vh-100 container">
            <Link className="btn btn-danger my-4" to="/userProducts">My products for sale</Link>
            <div className="info shadow mt-3">
                {user ? (
                    <div className="p-4 fs-1">
                        <h3 className="text-danger fw-bold mb-3 fs-1">User Details</h3>
                        <p className="mb-1"><strong>Name:</strong> {user.name}</p>
                        <p className="mb-1"><strong>Surname:</strong> {user.surname}</p>
                        <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                        <p className="mb-1"><strong>Username:</strong> {user.username}</p>
                    </div>
                ) : (
                    <div>Loading...</div> // Show loading while user data is being fetched
                )}
            </div>
        </section>
    );
};

export default Profile;
