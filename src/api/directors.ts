import axios from 'axios';

export const fetchUserIDReq = async (id: number) => {
    return await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}