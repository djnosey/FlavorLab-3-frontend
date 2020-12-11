import axios from "axios";

class FavoriteService {
  constructor() {
    this.favorite = axios.create({
      baseURL: "http://localhost:5000/api/favorite",
      withCredentials: true,
    });
  }
  deleteFavorite(id) {
    const pr = this.favorite.delete(`/${id}`).then(({ data }) => data);
    return pr;
  }

  addFavorite(combination,recipe,image){
    const pr = this.favorite.post(`/`, {combination, recipe, image}).then(({ data }) => data);
    return pr; 
  }
}

const favoriteService = new FavoriteService();

export default favoriteService;