import axios from "axios";

export default class PostService {
  static async getCards() {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return responce.data;
  }
}
