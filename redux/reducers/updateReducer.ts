import { 
    DELETE_UPDATE_FAIL,
    DELETE_UPDATE_REQUEST,
    DELETE_UPDATE_SUCCESS,
    EDIT_UPDATE_FAIL,
    EDIT_UPDATE_REQUEST,
    EDIT_UPDATE_SUCCESS,
    GET_UPDATES_FAIL, 
    GET_UPDATES_REQUEST, 
    GET_UPDATES_SUCCESS, 
    NEW_UPDATE_FAIL, 
    NEW_UPDATE_REQUEST, 
    NEW_UPDATE_SUCCESS 
} from "../constants/updateConstants"

export const updateReducer = (state = { data: [] }, action) => {
    switch (action.type) {

        // NEW UPDATE

        case NEW_UPDATE_REQUEST:
            return { ...state }
        case NEW_UPDATE_SUCCESS:
            return { 
                ...state,
                data: [...state.data, action.payload]
            }
        case NEW_UPDATE_FAIL:
            return { ...state, error: action.payload }

        // GET UPDATES

        case GET_UPDATES_REQUEST:
            return { ...state, loading: true }
        case GET_UPDATES_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case GET_UPDATES_FAIL:
            return { ...state, loading: false, error: action.payload }

        // EDIT UPDATE

        case EDIT_UPDATE_REQUEST:
            return { ...state }
        case EDIT_UPDATE_SUCCESS: {

            const editUpdate = action.payload
            
            const newArray = state.data.map(update => {
                if(update._id === editUpdate._id) {
                    return editUpdate
                }
                return update
            })

            return {
                ...state,
                data: newArray
            }
        }
        case EDIT_UPDATE_FAIL:
            return { ...state, error: action.payload }

        // REMOVE UPDATE
        
        case DELETE_UPDATE_REQUEST:
            return { ...state }
        case DELETE_UPDATE_SUCCESS: {

            const deleteUpdate = action.payload

            const newArray = state.data.filter(update => update._id !== deleteUpdate._id)

            return {
                ...state,
                data: newArray
            }

        }
        case DELETE_UPDATE_FAIL: 
            return { ...state, error: action.payload }

        default: 
            return state
    }
}