import axios from 'axios';

const basePath = '../data/';

const api = axios.create({
    baseURL: basePath
});

function getDirections() {
    return api.get('directions.json') // загружаем данные из файла directions.json
    .then(response => {
        // Предполагаем, что данные возвращаются в формате JSON
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching directions:', error);
        return Promise.reject(error);
    });
}

const IApi = {
    getDirections: getDirections
};

export default IApi;