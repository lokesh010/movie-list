import axios from 'axios';

export const fetchMoviesReq = async () => {
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=735142392e42d69d113eede3ce7586fe&language=en-US&language=en-US&page=1')
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}