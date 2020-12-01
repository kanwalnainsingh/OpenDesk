import axios from 'axios';

import { config } from '../../../congif'

let rootUrl = config.API_URL
const serviceBase = '/api/organisation-service'

class SiteService {
    getSite(id) {
        return axios.get(rootUrl+serviceBase+'/organisation/'+id)
    }
}

export default new SiteService();