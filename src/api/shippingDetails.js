import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';

function getShipping() {
  return apiRequest('GET', '/shipping', API_BASE);
}

function getShippingById(id) {
  return apiRequest('GET', '/shipping/'+id, API_BASE);
}

function saveShipping(data) {
  return apiRequest('POST', '/saveShipping', API_BASE, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getShipping: getShipping,
  saveShipping: saveShipping,
  getShippingById: getShippingById
};
