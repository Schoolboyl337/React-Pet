import axios from "axios";

export default class PostService {
  // Получение списка карточек
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

  // Получение карточки
  static async getCardById(id) {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return responce;
  }

  // Получение коментариев для  карточки
  static async getCardCommentById(id) {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return responce;
  }
}
