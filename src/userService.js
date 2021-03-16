import axios from 'axios'
const url = "http://localhost:3000"

class UserService {
    // List Users
    static getAllUsers = () => {
        console.log('called')
        return axios.get(`${url}/users`)
        .catch(err => {
            console.log(err)
        })
    }
}

export default UserService