import axios from 'axios'

export const fetchColors = () => {
    return axios
      .get('http://localhost:5000/api/colors', { headers: {authorization: 'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98'}})
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
}
