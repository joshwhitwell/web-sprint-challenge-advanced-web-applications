import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    })
    
}

export const fetchColors = () => {
    return axiosWithAuth()
      .get('/colors')
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
}