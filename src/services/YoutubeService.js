import axios from 'axios'


export default {
    getYoutubeVideos
}

// const API_KEY ='AIzaSyDAkaQLNr3aQJZJ7fTzNz3MTz70dp3BXF8'
// const API_KEY ='AIzaSyANRMgfUeBPkBuYxCkZ0d6ZC6AVsoTqKB8'
const API_KEY ='AIzaSyDdhU_u2s6MbMFPU8IErB-dExbYcfwA8mc'

async function getYoutubeVideos( query='queen'){
    console.log('service 12222222222222',query);
    const res =await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${query}`)
    return res.data.items
}