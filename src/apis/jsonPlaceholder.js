//jsonPlaceholder is the name of the website i take api from

import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})