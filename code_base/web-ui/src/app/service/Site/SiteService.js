import axios from 'axios';

import { config } from '../../../congif'

const mockData = require('../../../Asset/mockData/onboardmock.json');

let rootUrl = config.API_URL
const serviceBase = '/api/organisation-service'

class SiteService {
    getSite(id) {
        if (process.env.REACT_APP_STAGE === 'prod') {
            return Promise.resolve({ data: mockData });
        }
        return axios.get(rootUrl+serviceBase+'/organisation/'+id)
    }
}

export default new SiteService();