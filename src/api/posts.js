import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_URL || "http://localhost:3000/api/v1"

const axiosCLient = axios.create({
  baseURL
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

export async function fetchPostEdit(id) {
  try {
    const { data } = await axiosCLient(`/posts/${id}/edit`);
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

export async function deletePost(id) {
  try {
    const { data } = await axiosCLient.delete(`/posts/${id}`)
    return data
  } catch (error) {
    return error
  } finally {}
}