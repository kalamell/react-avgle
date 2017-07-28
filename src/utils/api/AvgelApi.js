import axios from 'axios';

axios.defaults.baseURL = 'https://api.avgle.com/v1/';
class AvgelApi {
    async fetchCategories() {
        try {
            const data = await axios.get('categories');
            return data.data.response.categories;
        } catch(e) {
            throw e;
        }
    }

    async fetchVidoes(page=1) {
        try {
            const data = await axios.get(`collections/${page}`);
            //console.log(data);
            return data.data.response.collections;
        } catch(e) {
            throw e;
        }
    }
}

export default new AvgelApi();