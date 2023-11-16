import axios from "axios";

const BASE_URL = "https://650d285da8b42265ec2bc044.mockapi.io/contacts";

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = (resource) => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: (id) => api.get(`/${resource}/${id}`),
    create: (newContact) => api.post(`/${resource}`, newContact),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: (id) => api.delete(`/${resource}/${id}`),
  };
};

const phoneApi = resourceApi("contacts");

export { phoneApi };
