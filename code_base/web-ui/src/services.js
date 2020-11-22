import axios from 'axios';

import { config } from './congif'

let API_URL = config.API_URL

class Services {
    saveOnboardData(data) {
        return axios.get('./data.json')
        //return axios.post(API_URL, data) //add actual url here
    }
}

export default new Services();