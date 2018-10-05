import axios from 'axios'

class UserModel{
    //class function to get information
    static getInfo(username){
        let url = `http://localhost3001/users/${username}`
        let request = axios.get(url)
        console.log(url)
        return request

    }
}

export default UserModel