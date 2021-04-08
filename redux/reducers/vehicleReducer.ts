import { DELETE_VEHICLE_FAIL, DELETE_VEHICLE_REQUEST, DELETE_VEHICLE_SUCCESS, EDIT_VEHICLE_FAIL, EDIT_VEHICLE_REQUEST, EDIT_VEHICLE_SUCCESS, GET_VEHICLES_FAIL, GET_VEHICLES_REQUEST, GET_VEHICLES_SUCCESS, NEW_VEHICLE_FAIL, NEW_VEHICLE_REQUEST, NEW_VEHICLE_SUCCESS } from "../constants/vehicleContants";

export const vehicleReducer = (state = { data: [] }, action) => {
    switch(action.type) {

        // NEW VEHICLE

        case NEW_VEHICLE_REQUEST: 
            return { ...state }
        case NEW_VEHICLE_SUCCESS: 
            return { ...state, data: [...state.data, action.payload] }
        case NEW_VEHICLE_FAIL:
            return { ...state, error: action.payload }
        
        // GET VEHICLES

        case GET_VEHICLES_REQUEST:
            return { ...state, loading: true }
        case GET_VEHICLES_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case GET_VEHICLES_FAIL: 
            return { ...state, loading: false, error: action.payload }

        // EDIT VEHICLES

        case EDIT_VEHICLE_REQUEST:
            return { ...state }
        case EDIT_VEHICLE_SUCCESS: {

            const editVehicle = action.payload 

            const newArray = state.data.map(vehicle => {
                if(vehicle._id === editVehicle._id) {
                    return editVehicle
                }
                return vehicle
            })

            return { ...state, data: newArray }
        }
        case EDIT_VEHICLE_FAIL:
            return { ...state, error: action.payload }

        // DELETE VEHICLE

        case DELETE_VEHICLE_REQUEST:
            return { ...state }
        case DELETE_VEHICLE_SUCCESS: {

            const deleteVehicle = action.payload

            const newArray = state.data.filter(vehicle => vehicle._id !== deleteVehicle._id)

            return { ...state, data: newArray }
        }
        case DELETE_VEHICLE_FAIL: 
            return { ...state, error: action.payload }   
        default:
            return state
    }
}