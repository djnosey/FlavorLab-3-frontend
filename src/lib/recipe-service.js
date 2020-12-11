import axios from "axios";

class RecipeService {
  constructor() {
    this.recipe = axios.create({
      baseURL: "https://api.spoonacular.com",
    });
  }
  getrecipes(search, api) {
    const pr = this.recipe
      .get(`/recipes/findByIngredients${search}${api}`)
      .then(({ data }) => data);
    return pr;
  }

  getWine(ingredient, api) {
    const pr = this.recipe
      .get(`food/wine/pairing?food=${ingredient}${api}`)
      .then(({ data }) => data);
    return pr;
  }
}

const recipeService = new RecipeService();

export default recipeService;
