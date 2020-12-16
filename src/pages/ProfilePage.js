import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import ProfileRecipes from "../components/ProfileRecipes/ProfileRecipes";
import UpdateProfileForm from "../components/UpdateProfileForm/UpdateProfileForm";
import userService from "./../lib/user-service";
import favoriteService from "./../lib/favorite-service";
import { motion, AnimatePresence } from "framer-motion";
import mollecules from "./../images/file (1).png";

function ProfilePage(props) {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    favorites: [],
    email: "",
    name: "",
  });
  const [showForm, setShowForm] = useState(false);
  const { logout } = props;
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
    logout();
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
      <AnimatePresence>
        <div className="profile__image-container">
          <img className="home__image" src={mollecules} alt="logo" />
        </div>

        {!showForm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            exit={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
            key="details"
            className="profilePage__info"
          >
            <ProfileDetails
              name={userProfile.name}
              email={userProfile.email}
              deleteProfile={deleteProfile}
              toggleForm={toggleForm}
            />
          </motion.div>
        ) : null}

        {showForm ? (
          <motion.div
            initial={{ y: "250vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            exit={{ y: "250vh", transition: { duration: 0.6, delay: 0 } }}
            key="form"
            className="profilePage__edit"
          >
            <UpdateProfileForm
              name={userProfile.name}
              email={userProfile.email}
              update={handleUpdate}
              toggle={toggleForm}
            />
          </motion.div>
        ) : null}

        {!showForm ? (
          <motion.div
            initial={{ x: "250vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            exit={{ x: "250vw", transition: { duration: 0.8 } }}
            key="recipe_box"
            className="ProfilePage__recipies"
          >
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default withAuth(ProfilePage);
