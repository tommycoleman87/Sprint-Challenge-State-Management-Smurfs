import {
    FETCH_SMURF_DATA,
    POST_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_FAILED,
    DELETE_SMURF,
    FETCH_SMURF_DATA_FAILED,
    FETCH_SMURF_DATA_SUCCESS,
    DELETE_SMURF_FAILED,
    DELETE_SMURF_SUCCESS,
    UPDATE_SMURF,
    UPDATE_SMURF_FAILED,
    UPDATE_SMURF_SUCCESS,
    POST_SMURF_DATA,
} from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',

}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_DATA: 
        return {
            ...state,
            isLoading: true,
            error: '',
        }
        case FETCH_SMURF_DATA_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                smurfs: [...action.payload],
                error: '',
            }
        case FETCH_SMURF_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_SMURF_DATA: 
            return {
                ...state,
                isLoading: true,
                error: '',
            }
            case POST_SMURF_DATA_SUCCESS: 
            return {
                ...state,
                smurfs: [...action.payload],
                error: '',
                isLoading: false,
            }
        case POST_SMURF_DATA_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case DELETE_SMURF:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case DELETE_SMURF_SUCCESS: 
            return {
                ...state,
                error: '',
                isLoading: false,
                smurfs: [...action.payload]
            }
        case DELETE_SMURF_FAILED: 
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        case UPDATE_SMURF: 
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case UPDATE_SMURF_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...action.payload]
            }
        case UPDATE_SMURF_FAILED: 
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
       
        default: 
        return state;
    }
}