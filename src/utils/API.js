import axios from 'axios';
const baseUrl = 'https://randomuser.me/api/';

export default {
    userGen: function(){
        return axios.get(baseUrl);
    }
};