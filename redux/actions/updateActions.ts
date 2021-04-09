import axios from "axios"
import { DELETE_UPDATE_FAIL, DELETE_UPDATE_REQUEST, DELETE_UPDATE_SUCCESS, EDIT_UPDATE_FAIL, EDIT_UPDATE_REQUEST, EDIT_UPDATE_SUCCESS, GET_UPDATES_FAIL, GET_UPDATES_REQUEST, GET_UPDATES_SUCCESS, NEW_UPDATE_FAIL, NEW_UPDATE_REQUEST, NEW_UPDATE_SUCCESS } from "../constants/updateConstants"

export const newUpdate = (body) => async (dispatch) => {

    try {

        dispatch({ type: NEW_UPDATE_REQUEST })

        const { data: { update } } = await axios.post('/api/v1/starship/update', body) 

        dispatch({
            type: NEW_UPDATE_SUCCESS,
            payload: update
        })

    } catch(e) {
        dispatch({
            type: NEW_UPDATE_FAIL,
            payload: e.response && e.response.data.message 
                ? e.reponse.data.message 
                : e.message 
        })
    }

}

export const getUpdates = () => async (dispatch) => {

    try {

        dispatch({ type: GET_UPDATES_REQUEST })

        const { data: { updates }} = await axios.get('/api/v1/starship/update')

        dispatch({
            type: GET_UPDATES_SUCCESS,
            payload: updates
        })

    } catch(e) {
        dispatch({ 
            type: GET_UPDATES_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.message
        })
    }

}

export const editUpdate = (body, id) => async (dispatch) => {
    
    try {

        dispatch({ type: EDIT_UPDATE_REQUEST })

        const { data: { update } } = await axios.post(`/api/v1/starship/update/${id}/edit`, body)

        dispatch({
            type: EDIT_UPDATE_SUCCESS,
            payload: update
        })

    } catch(e) {
        dispatch({
            type: EDIT_UPDATE_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.message
        })
    }

}

export const deleteUpdate = (id) => async (dispatch) => {

    try {

        dispatch({ type: DELETE_UPDATE_REQUEST })

        const { data: { update }} = await axios.post(`/api/v1/starship/update/${id}/delete`)

        dispatch({
            type: DELETE_UPDATE_SUCCESS,
            payload: update
        })

    } catch(e) {
        dispatch({
            type: DELETE_UPDATE_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.message
        })
    }

}