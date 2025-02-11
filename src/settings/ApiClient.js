import axios from 'axios';
import { BASE_URL } from './configs';

class ApiClient {
    static get(endPoint, params, header, useToken=true, useLoader=true, showError=true) {
        const url = BASE_URL + endPoint;
        // axios.get(url).
    }
}