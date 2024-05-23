import axios from 'axios';

const basePath = 'http://localhost:3000/';

const api = axios.create({
    baseURL: basePath
});

async function getDirections() {
    return await api.get('directions')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching directions:', error);
        return Promise.reject(error);
    });
}

async function getPricing() {
    return await api.get('pricing')
    .then(response =>{
        return response.data;
    } )
    .catch(error => {
        console.error('Error fetching pricing:', error);
        return Promise.reject(error);
    });
}
async function getDays() {
    return await api.get('days')
    .then(response =>{
        return response.data;
    } )
    .catch(error => {
        console.error('Error fetching pricing:', error);
        return Promise.reject(error);
    });
}

const IApi = {
    getDirections: getDirections,
    getPricing: getPricing,
    getDays: getDays
};
export default IApi;