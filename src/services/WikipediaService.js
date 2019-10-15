import axios from 'axios'


export default {
    getWikipediaTerm
}


 async function getWikipediaTerm(term){

    const res =await axios.get(`https://en.wikipedia.org/w/api.php?&format=json&action=opensearch&origin=*&search=${term}`)
    console.log(res.data);
    
    console.log(res.data[2][1]);
    
    return res.data[2][1]
}