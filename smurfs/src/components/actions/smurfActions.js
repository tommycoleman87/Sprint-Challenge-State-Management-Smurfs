import axios from 'axios';
export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILED = 'FETCH_SMURF_DATA_FAILED';
export const POST_SMURF_DATA = 'POST_SMURF_DATA';
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS';
export const POST_SMURF_DATA_FAILED = 'POST_SMURF_DATA_FAILED'
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILED = "UPDATE_SMURF_FAILED";


export const getData = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURF_DATA});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => dispatch({type: FETCH_SMURF_DATA_SUCCESS, payload: res.data}))
            .catch(err => dispatch({type: FETCH_SMURF_DATA_FAILED, payload: err}))
    }
}

export const postData = (smurf) => {
    return dispatch => {
    dispatch({type: POST_SMURF_DATA})
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: POST_SMURF_DATA_FAILED, payload: err}))
    }
}

export const deleteSmurf = (smurf) => {
    return dispatch => {
        dispatch({type: DELETE_SMURF})
        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data}))
            .catch(err => dispatch({type: DELETE_SMURF_FAILED, payload: err}))
    }
}

export const updateSmurf = smurf => {
    return dispatch => {
        dispatch({type: UPDATE_SMURF})
        axios
            .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
            .then(res => dispatch({type: UPDATE_SMURF_SUCCESS, payload: res.data}))
            .catch(err => dispatch({type: UPDATE_SMURF_FAILED, payload: err}))
    }
}