import { ADD_LAUNCH_FAIL, ADD_LAUNCH_REQUEST, ADD_LAUNCH_SUCCESS, DELETE_LAUNCH_FAIL, DELETE_LAUNCH_REQUEST, DELETE_LAUNCH_SUCCESS, EDIT_LAUNCH_FAIL, EDIT_LAUNCH_REQUEST, EDIT_LAUNCH_SUCCESS, GET_LAUNCHES_FAIL, GET_LAUNCHES_REQUEST, GET_LAUNCHES_SUCCESS, GET_LAUNCH_FAIL, GET_LAUNCH_REQUEST, GET_LAUNCH_SUCCESS } from "../constants/launchConstants"

export const launchReducer = (state = { data: [] }, action) => {
    switch(action.type) {

        // ADD LAUNCH

        case ADD_LAUNCH_REQUEST: 
            return { ...state }
        case ADD_LAUNCH_SUCCESS: 
            return { data: [...state.data, action.payload] }
        case ADD_LAUNCH_FAIL:
            return { error: action.payload }

        // GET LAUNCH

        case GET_LAUNCH_REQUEST:
            return { loading: true }
        case GET_LAUNCH_SUCCESS:
            return { loading: false, data: action.payload }
        case GET_LAUNCH_FAIL:
            return { loading: false, error: action.payload }

        // EDIT LAUNCH

        case EDIT_LAUNCH_REQUEST:
            return { ...state }
        case EDIT_LAUNCH_SUCCESS: {

            const editLaunch = action.payload

            const newArray = state.data.map(launch => {
                if(launch === editLaunch) {
                    return editLaunch
                }
                return launch
            })

            return { data: newArray }
        }
        case EDIT_LAUNCH_FAIL: {
            return { error: action.payload }
        }

        // DELETE LAUNCH

        case DELETE_LAUNCH_REQUEST:
            return { ...state }
        case DELETE_LAUNCH_SUCCESS: {

            const deleteLaunch = action.payload

            const newArray = state.data.filter(launch => launch._id !== deleteLaunch._id)

            return { data: newArray }

        }
        case DELETE_LAUNCH_FAIL: 
            return { error: action.payload }

        // GET LAUNCHES

        case GET_LAUNCHES_REQUEST: 
            return { loading: true }
        case GET_LAUNCHES_SUCCESS:
            return { loading: false, data: action.payload }
        case GET_LAUNCHES_FAIL: 
            return { loading: false, error: action.payload }

        default: {
            return state
        }

    }
}