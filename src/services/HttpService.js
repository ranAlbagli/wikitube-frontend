
import Axios from 'axios';
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3001/api/'

const axios = Axios.create({
    withCredentials: true
});

async function ajax(endpoint, method = 'get', data = null) {
    console.log('httpservice',data);
    
    if (data) var { params } = data
    if(params) data = null
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params
        })        
        return res.data;
    }
    catch (err) {
        if (err.response.status === 401)  console.log('router.push(/)');
        
        else throw err
    }
}

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', { params: data })
    },
    post(endpoint, data) {

        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    },


}