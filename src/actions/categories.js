import AvgelApi from '../utils/api/AvgelApi';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const FETCH_CATEGORIES_FILTER = 'FETCH_CATEGORIES_FILTER';

export const fetchCategories = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CATEGORIES });
        try {
            const data = await AvgelApi.fetchCategories();
            return dispatch({
                type: FETCH_CATEGORIES_SUCCESS,
                data: data
            });
        } catch(error) {
            return dispatch({
                type: FETCH_CATEGORIES_ERROR,
                error
            });
        }
    }
}
