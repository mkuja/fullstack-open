
import axios from 'axios';
const baseUrl = 'http://localhost:3000/persons';


const getAllContacts = () => {
    return axios.get(baseUrl)
}

const createContact = newObject => {
    return axios.post(baseUrl, newObject)
}

const updateContact = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { 
    getAllContacts: getAllContacts,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact 
}
