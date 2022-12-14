import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5000/api',
});

export const allPosts = () => api.get('/posts/all')

export const createPosts = payload => api.post('/posts/create-posts', payload)

export const getPostById = id => api.get(`/posts/${id}`)

const apis = {
    allPosts,
    createPosts,
    getPostById
}

export default apis;


