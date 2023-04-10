import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'; // import uuidv4 function from the uuid library

const apiUrl = 'https://rems-sdp.cyclic.app';

const httpClient = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

const dataProvider = {// eslint-disable-next-line no-use-before-define
  getList: (resource, params) => {
    const url = `${resource}`;
    return httpClient
      .get(url)
      .then(response => {
        const data = response.data.map(resource => ({
          ...resource,
          id: resource._id, // add uuid field to each resource object
        }));
        const total = parseInt(data.length);
        return { data, total };
      })
      .catch(error => {
        console.error(error);
      });
  },
  delete: (resource, params) => {
    const url = `${resource}/${params.id}`;
    return httpClient.delete(url).then(({ data }) => {
      return { data: { ...params.data, id: data.id } };
    });
  },
  update: (resource, params) => {
    const { id, data } = params;
    const url = `${apiUrl}/${resource}/${id}`;

    return axios.put(url, data).then(({ data }) => ({ data: { id: data.id, ...data } }));
  },
  getOne: (resource, params) => {
    const { id } = params;
    const url = `${apiUrl}/${resource}/${id}`;

    return axios.get(url).then(({ data }) => ({ data: { id: data.id, ...data } }));
  },
}

export  {dataProvider};