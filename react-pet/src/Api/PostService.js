import axios from "axios";

export default class PostService {
  static async getCards(limit = 5, page = 1) {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return responce;
  }
}
