import axios from 'axios';

class PhrasesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/projects
  createOne = (requestBody) => {
    return this.api.post('/api/phrases', requestBody);
  }

  // GET /api/phrases
  getAll = () => {
    return this.api.get('/api/phrases');
  }

  // GET /api/phrases/:id
  getOne = (id) => {
    return this.api.get(`/api/phrases/${id}`);
  }

  // PUT /api/phrases/:id
  updateOne = (id, requestBody) => {
    return this.api.put(`/api/phrases/${id}`, requestBody);
  }

  // DELETE /api/phrases/:id
  deletePhrase = (id) => {
    return this.api.delete(`/api/phrases/${id}`);
  } 
}

// Create one instance (object) of the service
const phrasesService = new PhrasesService();

export default phrasesService;