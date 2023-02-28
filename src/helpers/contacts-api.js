import axios from 'axios';

axios.defaults.baseURL = 'https://63fcb9478ef914c5559deff4.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async contact => {
  const { data } = axios.delete(`/contacts${contact.id}`, contact);
  return data;
};
