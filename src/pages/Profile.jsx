import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Shared/Navbar";

const Profile = () => {

    const { user } = useContext(AuthContext);

    const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    
    if (user) {
      setUserProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      });
    }
  }, [user]);


    return (
        <div>
        <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mt-36 lg:mt-10 h-screen">
            <img className="rounded-full mr-3 my-5" src={userProfile?.photoURL} />
            <h1 className="text-xl font-bold mr-3">{userProfile?.displayName}</h1>
            <p className="text-xl font-medium mr-3">{userProfile?.email}</p>
        </div>
        </div>
    );
};

export default Profile;