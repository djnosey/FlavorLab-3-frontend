# FlavorLab

### **MOLECULAR MATCHMAKING: TINDER FOR AROMAS**

Cucumber and salmon? Bacon and cheese? Melted butter on fresh asparagus? The fact that we like to eat certain foods together isn’t just a matter of culinary tradition, it’s actually based on chemistry—on the overlap between certain aroma molecules.

As well as serving as an encyclopedia of ingredients FlavorLab uses a proprietory dataset and algorithm to match ingredients based on aroma and taste profiles.

---

### User Stories

As an anonymous user I can browse the 50 primary ingredients, get information on them, see their "top" pairs as well as some surprising pairs.

As a member of FlavorLab, I can have full access to all 223 ingredients, use the flavour matching algorithm again and again to create combinations (around 1.8 million) get recipe and wine pairing ideas based on my chosen combination, and save the ones I love to my profile page.

---

### React Router Routes

| Route    | Component          | Permission | Purpose                                             |
| -------- | ------------------ | ---------- | --------------------------------------------------- |
| /        | homePage           | Public     | display the homepage                                |
| /signup  | SignupPage         | Anon       | display signup form                                 |
| /login   | LoginPage          | Anon       | display login                                       |
| /primary | Primary            | Public     | display ingredient encyclopedia page                |
| /pairing | FlavourPairingPage | Private    | display flavour pairing page                        |
| /result  | Results            | Private    | display results page based on your selected pairing |
| /profile | ProfilePage        | Private    | display user profile with their saved combinations  |

---

### Main Components

- homePage
- LoginPage
- SignupPage
- PrimaryPage
- FlavourPairingPage
- ResultsPage
- ProfilePage

---

### Services

##### Auth service

auth.login(user)

auth.signup(user)

auth.logout()

auth.me()

##### Ingredients service

ingredients.getAll()

ingredients.getOne(id)

ingredients.getRecipe(combination)

ingredients.getWine(combination)

##### User service

user.getProfile(id)

user.deleteProfile(id)

user.editProfile(new user info, id)

user.addFavorite(user ID)

user.deleteFavorite(user id, favorite id)

---

### Database Models

```javascript
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
});
```

```javascript
const favoriteSchema = new Schema({
  combination: String,
  recipe: String,
  image: String,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
```

```javascript
const ingredientSchema = new Schema({
  name: String,
  group: String,
  subGroup: String,
  description: String,
  image: String,
  substitutes: [String],
  bestPairs: [String],
  suprisePairs: [String],
  allPairs: [{ name: String, score: Number, group: String }],
});
```

### API Routes

Authorization

| Verb | Route        | Body                    | Purpose                    | Success | Error |
| ---- | ------------ | ----------------------- | -------------------------- | ------- | ----- |
| POST | /auth/signup | {name, email, password} | Add new user to database   | 201     | 400   |
| POST | /auth/login  | {email, password}       | Log into application       | 200     | 401   |
| GET  | /auth/logout |                         | Destroy Session            | 200     | 400   |
| GET  | /auth/me     |                         | Provide State for frontend | 200     | 400   |

Ingredients

| Verb | Route               | Body | Purpose                                                       | Success | Error |
| ---- | ------------------- | ---- | ------------------------------------------------------------- | ------- | ----- |
| GET  | api/ingredients     |      | display all the ingredients titles for lists and select menus | 200     | 500   |
| GET  | api/ingredients/:id |      | display detailed information on single ingredient             | 200     | 404   |

User

| Verb   | Route        | Body          | Purpose                           | Success | Error   |
| ------ | ------------ | ------------- | --------------------------------- | ------- | ------- |
| GET    | api/user/:id | {id}          | display a user profile            | 200     | 401/404 |
| PUT    | api/user/:id | {name, email} | Update a user profile information | 201     | 401     |
| DELETE | api/user/:id | {id}          | Delete a user profile             | 204     | 401/500 |

Favorite

| Verb   | Route            | Body                             | Purpose                               | Success | Error   |
| ------ | ---------------- | -------------------------------- | ------------------------------------- | ------- | ------- |
| POST   | api/favorite     | {Combination, Recipe, image URL} | Save a user favorite to their profile | 201     | 500     |
| DELETE | api/favorite/:id | {id}                             | Delete a favorite from your profile   | 204     | 401/500 |

---

### External API for recipe and wine pairing

```
https://api.spoonacular.com/recipes/
```

```
https://api.spoonacular.com/food/wine/pairing
```

---

### Links

[WireFrames](https://www.figma.com/file/Y49g1BNJuHyzCHbCZxemT1/flavorLab?node-id=0%3A1)

[Trello](https://trello.com/b/CvpPTGeq/module-3-project)

[Github-Client](https://github.com/djnosey/module-3-frontend)

[Github-server](https://github.com/djnosey/module3-backend)

---

### Backlog

public page showing users created favorite combinations with function to "like"

Images for the secondary ingredients

push notification when someone likes your combination

generate a new random recipe based on saved combination

View that explains the science behind the pairing

FAQ/general info view

responsive
