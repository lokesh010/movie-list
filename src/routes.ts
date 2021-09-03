import Home from 'pages/Home'
import Favourite from 'pages/Favourite'
import Error404 from 'pages/Error404'

export default [
    {
        path: '/',
        page: Home,
    },
    {
        path: '/favourite',
        page: Favourite,
    },
    // always put at last
    {
        path: '/*',
        page: Error404,
    }
]