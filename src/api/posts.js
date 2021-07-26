import axios from 'axios'

const axiosCLient = axios.create({
  baseURL: "http://localhost:3000/api/v1"
})

export async function fetchPosts() {
  try {
    const { data } = await axiosCLient('/posts')
    return data
  } catch (error) {
    return error
  } finally {}
}

export async function createPost(payload) {
  try {
    const { data } = await axiosCLient.post('/posts', payload)
    return data
  } catch (error) {
    return error
  } finally {}
}

export async function fetchPost(id) {
  try {
    const { data } = await axiosCLient(`/posts/${id}`);
    return data
  } catch (error) {
    return error
  } finally {}
}

export async function updatePost(payload) {
  try {
    const { data } = await axiosCLient.put(`/posts/${payload.id}`, payload)
    return data
  } catch (error) {
    return error
  } finally {}
}