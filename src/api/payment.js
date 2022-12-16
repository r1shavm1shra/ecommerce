import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';

function getPayment() {
  return apiRequest('GET', '/payment', API_BASE);
}

function getPaymentById(id) {
  return apiRequest('GET', '/payment/'+id, API_BASE);
}

function savePayment(data) {
  return apiRequest('POST', '/savePayment', API_BASE, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPaymentById: getPaymentById,
  savePayment: savePayment,
  getPayment: getPayment
};
