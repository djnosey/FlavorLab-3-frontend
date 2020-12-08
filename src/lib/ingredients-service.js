import axios from "axios";

class IngredientService {
  constructor() {
    this.ingredient = axios.create({
      baseURL: "http://localhost:5000/api/ingredient",
      withCredentials: true,
    });
  }

  getAll() {
    const pr = this.ingredient.get("/").then(({ data }) => data);
    return pr;
  }
}

const ingredientService = new IngredientService();

export default ingredientService;
