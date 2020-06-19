import axios from "axios";
const API_URL = "http://192.168.86.12:8000"; //"http://localhost:8000"; << uncomment this to run it on lcoal server

export default class CustomersService {
  constructor() {}

  getCustomers() {
    const url = `${API_URL}/api/customers/`;
    return axios.get(url).then((response) => response.data);
  }

  getCustomersByURL(link) {
    const url = `${API_URL}${link}`;
    return axios.get(url).then((response) => response.data);
  }

  getCustomer(pk) {
    const url = `${API_URL}/api/customers/${pk}`;
    return axios.get(url).then((response) => response.data);
  }

  deleteCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    return axios.delete(url);
  }

  createCustomer(customer) {
    const url = `${API_URL}/api/customers/`;
    return axios.post(url, customer);
  }

  updateCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    return axios.put(url, customer);
  }
}
