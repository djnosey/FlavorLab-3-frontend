import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { withAuth } from "./../context/auth-context";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import ProfileRecipes from "../components/ProfileRecipes/ProfileRecipes";

function ProfilePage(props) {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    favorites: [],
    email: "",
    name: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${props.match.params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data);
      });
  }, [props.match.params]);

  const deleteRecipeFromProfile = (id) => {
    axios
      .delete(`http://localhost:5000/api/favorite/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        history.push(`/profile/${props.match.params.id}`);
      });
  };

  const deleteProfile = () => {
    props.logout();
    axios
      .delete(`http://localhost:5000/api/user/${props.match.params.id}`, {
        withCredentials: true,
      })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div>
      <ProfileDetails
        name={userProfile.name}
        email={userProfile.email}
        deleteProfile={deleteProfile}
      />

      <div>
        {userProfile.favorites.map((item) => {
          return (
            <ProfileRecipes
              recipe={item.recipe}
              combination={item.combination}
              image={item.image}
              deleteRecipe={deleteRecipeFromProfile}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default withAuth(ProfilePage);
