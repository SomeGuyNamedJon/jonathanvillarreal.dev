import API from './API'

export default{
    getRepo(repoName){
        return API().get(repoName);
    }
}