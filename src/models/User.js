import axios from 'axios'

class UserModel{
    static getInfo (username) {
        let url = `http://localhost:3001/users/${username}`;
        let req = axios.get(url);
        return req;
      }
}

export default UserModel