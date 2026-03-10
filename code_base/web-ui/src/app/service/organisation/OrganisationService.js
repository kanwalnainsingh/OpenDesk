import axios from 'axios';

import { config } from '../../../congif'

const mockData = require('../../../Asset/mockData/onboardmock.json');

let rootUrl = config.API_URL
const serviceBase = '/api/organisation-service'

class OrganisationService {
    saveOrganisation(data) {
        if (process.env.REACT_APP_STAGE === 'prod') {
            return Promise.resolve({ data: mockData });
        }
        return axios.post(rootUrl+serviceBase+'/organisation', data)
    }
    saveSite(data) {
        if (process.env.REACT_APP_STAGE === 'prod') {
            return Promise.resolve({ data: mockData });
        }
        return axios.post(rootUrl+serviceBase+'/site', data)
    }
}

export default new OrganisationService();