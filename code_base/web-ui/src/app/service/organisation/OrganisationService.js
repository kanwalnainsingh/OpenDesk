import axios from 'axios';

const rootUrl = window.location.protocol+ '//' + window.location.hostname
const serviceBase = '/api/organisation-service' 

class OrganisationService {
    saveOrganisation(data) {
        return axios.post(rootUrl+serviceBase+'/organisation', data)
    }
}

export default new OrganisationService();