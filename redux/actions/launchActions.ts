import axios from "axios"
import { ADD_LAUNCH_FAIL, ADD_LAUNCH_REQUEST, ADD_LAUNCH_SUCCESS, DELETE_LAUNCH_FAIL, DELETE_LAUNCH_REQUEST, DELETE_LAUNCH_SUCCESS, EDIT_LAUNCH_FAIL, EDIT_LAUNCH_REQUEST, EDIT_LAUNCH_SUCCESS, GET_LAUNCHES_FAIL, GET_LAUNCHES_REQUEST, GET_LAUNCHES_SUCCESS, GET_LAUNCH_FAIL, GET_LAUNCH_REQUEST, GET_LAUNCH_SUCCESS } from "../constants/launchConstants"

export const newLaunch = (body) => async (dispatch) => {

    try {

        dispatch({ type: ADD_LAUNCH_REQUEST })

        const { data: { launch }} = await axios.post('/api/v1/launch', body)

        console.log(launch)

        dispatch({
            type: ADD_LAUNCH_SUCCESS,
            payload: launch
        })

    } catch(e) {
        dispatch({
            type: ADD_LAUNCH_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message 
                : e.message
        })
    }

}

export const getLaunch = (id) => async (dispatch) => {

    try {

        dispatch({ type: GET_LAUNCH_REQUEST })

        const { data: { launch }} = await axios.get(`/api/v1/launch/${id}`) 

        dispatch({
            type: GET_LAUNCH_SUCCESS,
            payload: launch
        })
        
    } catch(e) {
        dispatch({
            type: GET_LAUNCH_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.response
        })
    }

}

export const editLaunch = (body, id) => async (dispatch) => {

    try {

        dispatch({ type: EDIT_LAUNCH_REQUEST })

        const { data: { launch }} = await axios.post(`/api/v1/launch/${id}/edit`, body)

        dispatch({
            type: EDIT_LAUNCH_SUCCESS,
            payload: launch
        })

    } catch(e) {
        dispatch({
            type: EDIT_LAUNCH_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.message
        })
    }

}

export const deleteLaunch = (id) => async (dispatch) => {

    try {

        dispatch({ type: DELETE_LAUNCH_REQUEST })

        const { data: { launch }} = await axios.post(`/api/v1/launch/${id}`)

        dispatch({
            type: DELETE_LAUNCH_SUCCESS,
            payload: launch
        })

    } catch(e) {
        dispatch({
            type: DELETE_LAUNCH_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.response
        })
    }

}

export const getLaunches = () => async (dispatch) => {

    try {

        dispatch({ type: GET_LAUNCHES_REQUEST })

        const { data: { launches }} = await axios.get('/api/v1/launch')

        dispatch({
            type: GET_LAUNCHES_SUCCESS,
            payload: launches
        })


    } catch(e) {
        dispatch({
            type: GET_LAUNCHES_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message
                : e.response
        })
    }

}