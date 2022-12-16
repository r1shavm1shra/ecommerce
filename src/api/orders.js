import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';

function getOrder() {
  return apiRequest('GET', '/orders', API_BASE);
}

function getOrderById(id) {
  return apiRequest('GET', '/orders/'+id, API_BASE);
}

function saveOrder(data) {
  return apiRequest('POST', '/saveOrder', API_BASE, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getOrderById: getOrderById,
  saveOrder: saveOrder,
  getOrder: getOrder
};
