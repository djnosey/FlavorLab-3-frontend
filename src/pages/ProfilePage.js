import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import ProfileRecipes from "../components/ProfileRecipes/ProfileRecipes";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import userService from "./../lib/user-service";
import favoriteService from "./../lib/favorite-service";
import { motion } from "framer-motion";
function ProfilePage(props) {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    favorites: [],
    email: "",
    name: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    userService
      .getUser(id)
      .then((user) => {
        setUserProfile(user);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteRecipeFromProfile = (id) => {
    favoriteService
      .deleteFavorite(id)
      .then(() => {
        userService.getUser(userProfile._id).then((user) => {
          setUserProfile(user);
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteProfile = () => {
    props.logout();
    userService
      .deleteUser(id)
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (e, name, email) => {
    e.preventDefault();
    userService
      .updateUser(id, name, email)
      .then(() => {
        userService.getUser(id).then((user) => {
          setUserProfile(user);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
    </motion.div>
  );
}

export default withAuth(ProfilePage);
