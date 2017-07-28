import { 
    FETCH_VIDEOES, 
    FETCH_VIDEOES_ERROR, 
    FETCH_VIDEOES_SUCCESS,
} from '../actions/videoes';

const initState = {
    data: [],
    error: null,
    isFetch: false
}
export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_VIDEOES:
            return state;
        case FETCH_VIDEOES_SUCCESS:
            return {
                data: action.data,
                error: null
            }
        case FETCH_VIDEOES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}