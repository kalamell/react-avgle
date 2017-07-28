import { 
    FETCH_CATEGORIES, 
    FETCH_CATEGORIES_ERROR, 
    FETCH_CATEGORIES_SUCCESS
} from '../actions/categories';

const initState = {
    data: [],
    error: null,
    isFetch: false
}
export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return state;
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null
            }
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}