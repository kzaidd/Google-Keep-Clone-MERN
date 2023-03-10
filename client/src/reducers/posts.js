import { FETCH_ALL, UPDATE, CREATE, DELETE, LIKE } from '../constants/actionTypes';

//REDUCERS
export default (posts = [], action) => {
    switch (action.type) {
        case UPDATE: 
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : posts)    //THIS MAP RETURNS AN ARRAY 
        case FETCH_ALL:
            return action.payload
        case CREATE :
            return [...posts, action.payload]
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        default:
            return posts
    }
}