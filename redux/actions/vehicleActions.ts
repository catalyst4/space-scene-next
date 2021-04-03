import axios from "axios"
import { DELETE_VEHICLE_FAIL, DELETE_VEHICLE_REQUEST, DELETE_VEHICLE_SUCCESS, EDIT_VEHICLE_FAIL, EDIT_VEHICLE_REQUEST, EDIT_VEHICLE_SUCCESS, GET_VEHICLES_FAIL, GET_VEHICLES_REQUEST, GET_VEHICLES_SUCCESS, NEW_VEHICLE_REQUEST, NEW_VEHICLE_SUCCESS } from "../constants/vehicleContants"

export const newVehicle = (body) => async (dispatch) => {

    try {

        dispatch({ type: NEW_VEHICLE_REQUEST })

        const { data: { vehicle } } = await axios.post('http://localhost:5000/api/v1/vehicle', body)
        
        dispatch({
            type: NEW_VEHICLE_SUCCESS,
            payload: vehicle
        })

    } catch(e) {
        dispatch({
            type: NEW_VEHICLE_SUCCESS,
            payload: e.response && e.response.data.message 
                ? e.response.data.message
                : e.message
        })
    }

}

export const getVehicles = () => async (dispatch) => {

    try { 

        dispatch({ type: GET_VEHICLES_REQUEST })

        const { data: { vehicles }} = await axios.get('http://localhost:5000/api/v1/vehicle')

        dispatch({
            type: GET_VEHICLES_SUCCESS,
            payload: vehicles
        })


    } catch(e) {
        dispatch({
            type: GET_VEHICLES_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.message
        })
    }

}

export const editVehicle = (body, id) => async (dispatch) => {

    try { 

        dispatch({ type: EDIT_VEHICLE_REQUEST })

        const { data: { vehicle }} = await axios.post(`http://localhost:5000/api/v1/vehicle/${id}/edit`, body)

        dispatch({
            type: EDIT_VEHICLE_SUCCESS,
            payload: vehicle
        })

    } catch(e) {
        dispatch({
            type: EDIT_VEHICLE_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message
                : e.message
        })
    }

}

export const deleteVehicle = (id) => async (dispatch) => {
    
    try {

        dispatch({ type: DELETE_VEHICLE_REQUEST })

        const { data: { vehicle }} = await axios.post(`http://localhost:5000/api/v1/vehicle/${id}/delete`)

        dispatch({
            type: DELETE_VEHICLE_SUCCESS,
            payload: vehicle
        })


    } catch(e) {
        dispatch({
            type: DELETE_VEHICLE_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message 
                : e.message
        })
    }

}