import axios from 'axios';
import { BASE_API_URL } from './configs';
import { loader } from './utils';

class ApiClient {
    static get(endPoint, params, addToken = false, hideError = false, useLoader = true) {
        let url = BASE_API_URL + endPoint;
        if (useLoader) { loader(true) }
        return new Promise(function (fulfill, reject) {

            axios.get(url, params).then(function (response) {
                if (useLoader) { loader(false) }
                fulfill({ ...response, success: true });
            }).catch(function (error) {
                if (useLoader) { loader(false) }
                if (error && error.response) {
                    // handleError(error.response.statusText, error.response?.data, hideError, error.response?.status)
                    fulfill({ ...error.response, success: false });
                } else {
                    console.log('Network error occurred:', error.message);
                    fulfill({ data: null, success: false, message: 'Network Error' });
                }
            });
        });
    }
}

export default ApiClient;