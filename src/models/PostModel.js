import axios from 'axios'

const endPoint = `https://localhost:3001/posts`

class PostModel {
    static all(){
        let request = axios.get(endPoint)
        return request
    }

    // static create(todo) {
    //     let request = axios.post(endPoint, todo)
    //     return request
    // }

    // static delete(todo){
    //     let request = axios.delete(`${endPoint}/${todo._id}`)
    //     return request
    // }
}

export default PostModel