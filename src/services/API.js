import axios from 'axios'

export default(url='https://api.github.com/repos/SomeGuyNamedJon') => {
    return axios.create({
        baseURL: url
    })
}