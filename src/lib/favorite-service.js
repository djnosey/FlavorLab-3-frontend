import axios from "axios";

class FavoriteService {
  constructor() {
    this.favorite = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/favorite`,
      withCredentials: true,
    });
  }
  deleteFavorite(id) {
    const pr = this.favorite.delete(`/${id}`).then(({ data }) => data);
    return pr;
  }

  addFavorite(combination, recipe, image) {
    const pr = this.favorite
      .post(`/`, { combination, recipe, image })
      .then(({ data }) => data);
    return pr;
  }
}

const favoriteService = new FavoriteService();

export default favoriteService;
