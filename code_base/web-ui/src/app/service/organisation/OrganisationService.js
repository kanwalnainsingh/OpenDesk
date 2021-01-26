import axios from 'axios';

import { config } from '../../../congif'

//const rootUrl = window.location.protocol+ '//' + window.location.hostname
let rootUrl = config.API_URL
const serviceBase = '/api/organisation-service' 

class OrganisationService {
    saveOrganisation(data) {
        return axios.post(rootUrl+serviceBase+'/organisation', data)
    }
    saveSite(data) {
            return axios.post(rootUrl+serviceBase+'/site', data)
    }
}

export default new OrganisationService();