import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import ProfileRecipes from "../components/ProfileRecipes/ProfileRecipes";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import userService from "./../lib/user-service";
import favoriteService from "./../lib/favorite-service";
import { motion } from "framer-motion";
import mollecules from "./../images/file (1).png";

function ProfilePage(props) {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    favorites: [],
    email: "",
    name: "",
  });
  const [showForm, setShowForm] = useState(false);

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
          setShowForm(false);
        });
      })
      .catch((err) => console.log(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="ProfilePage__container">
      <div className="profile__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>

      {!showForm ? (
        <div className="profilePage__info">
          <ProfileDetails
            name={userProfile.name}
            email={userProfile.email}
            deleteProfile={deleteProfile}
            editProfile={toggleForm}
          />
        </div>
      ) : null}

      <motion.div className="profilePage__edit">
        {showForm ? (
          <UpdateProfileForm
            name={userProfile.name}
            email={userProfile.email}
            update={handleUpdate}
            toggle={toggleForm}
          />
        ) : null}
      </motion.div>

      {!showForm ? (
        <div className="ProfilePage__recipies">
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
      ) : null}
    </div>
  );
}

export default withAuth(ProfilePage);
