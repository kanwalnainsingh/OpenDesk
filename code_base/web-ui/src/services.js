import axios from 'axios';

import { config } from './congif'

let API_URL = config.API_URL

class Services {
    saveOnboardData(data) {
        console.log(data)
        return axios.get('./data.json')
    }
}

export default new Services();