import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8080';

function getProductsList() {
  return apiRequest('GET', '/products', API_BASE);
}

function getProduct(id) {
  return apiRequest('GET', 'products/' + id, API_BASE);

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: getProductsList,
  getProduct: getProduct
};
