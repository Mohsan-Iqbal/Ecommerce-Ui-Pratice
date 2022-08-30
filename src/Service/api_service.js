import axios from "axios";
import React from "react";
axios.defaults.baseURL = "http://localhost:3005";
let token = localStorage.getItem('token')
if(token){
  axios.defaults.headers['authorization'] = token
}
axios.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      if(error?.response?.data?.message === 'Invalid Token'){
        return window.location.href = window.location.origin+'/login'
      }
      if( error?.response?.data?.message === "A token is required for authentication" ){
        if(token){
          axios.defaults.headers['authorization'] = token
        }else{
          window.location.href = window.location.origin+'/login'
        }
        return Promise.reject(error);  
      }
      return Promise.reject(error);
    }
    if (
      error?.response?.status === 401 ||
      error?.response?.status === 400 ||
      error?.response?.status === 404 ||
      error?.response?.status === 422 ||
      error?.response?.status === 500 ||
      error?.response?.status === 409
    ) {
      console.log(error);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
)

export const _service = {
  createUser: (data) => axios.post(`/auth/signup`, data),
  postLogin:(data) => axios.post(`/auth/signin`, data),
  getCategories:()=>axios.get('/product/categories'),
  getAllProducts:(categoryId)=>axios.get(`/product/getProductsByCategory/${categoryId}`),
  getProductById:(productId)=>axios.get(`/product/getProductById/${productId}`)
};
