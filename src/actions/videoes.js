import AvgelApi from '../utils/api/AvgelApi';


export const FETCH_VIDEOES = 'FETCH_VIDEOES';
export const FETCH_VIDEOES_SUCCESS = 'FETCH_VIDEOES_SUCCESS';
export const FETCH_VIDEOES_ERROR = 'FETCH_VIDEOES_ERROR';



export const fetchVideoes = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_VIDEOES });
        try {
            const data = await AvgelApi.fetchVidoes();
            return dispatch({
                type: FETCH_VIDEOES_SUCCESS,
                data: data
            });
        } catch(error) {
            return dispatch({
                type: FETCH_VIDEOES_ERROR,
                error
            });
        }
    }
}
