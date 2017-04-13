import { normalize } from 'normalizr';
import { http, querystring } from 'lib';
import { asteroidListSchema } from './scheme';

const { API_URI, API_KEY } = process.env;

const DEFAULT_PAGE = 0;
const DEFAULT_SIZE = 10;

export default {
  async fetchAsteroids({ page = DEFAULT_PAGE, size = DEFAULT_SIZE }) {
    const query = querystring({ page, size, api_key: API_KEY });
    let url = `${API_URI}/browse`;

    if (query) {
      url = `${url}?${query}`;
    }

    const {
      links: pagination,
      page: {
        number: currentPage,
        total_pages: totalPages
      },
      near_earth_objects
    } = await http.get(url);

    const { 
      entities: { asteroids: asteroidsById },
      result: asteroidsIds
    } = normalize(near_earth_objects, asteroidListSchema);

    return {
      pagination,
      currentPage,
      totalPages,
      asteroidsById,
      asteroidsIds
    };
  },
  async fetchAsteroidById(id) {
    const query = querystring({ api_key: API_KEY });
    const url = `${API_URI}/${id}?${query}`;

    return http.get(url);
  }
};