import axios from 'axios'

export default(url='https://api.github.com') => {
    return axios.create({
        baseURL: url
    })
}