import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { withAuth } from "./../context/auth-context";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import ProfileRecipes from "../components/ProfileRecipes/ProfileRecipes";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import userService from "./../lib/user-service";

function ProfilePage(props) {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    favorites: [],
    email: "",
    name: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    userService.getUser(id).then((user) => {
      setUserProfile(user);
    });
  }, [id]);

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
    userService.deleteUser(id).then(() => {
      history.push("/");
    });
  };

  const handleUpdate = (e, name, email) => {
    e.preventDefault();
    userService.updateUser(id, name, email).then((user) => {
      setUserProfile(user);
    });
  };

  return (
    <div>
      <ProfileDetails
        name={userProfile.name}
        email={userProfile.email}
        deleteProfile={deleteProfile}
      />

      <UpdateProfileForm
        name={userProfile.name}
        email={userProfile.email}
        update={handleUpdate}
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
