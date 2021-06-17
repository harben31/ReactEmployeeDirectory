import axios from 'axios';
const baseUrl = 'https://randomuser.me/api/?results=50&nat=us';

export default {
    userGen: function(){
        return axios.get(baseUrl);
    }
};