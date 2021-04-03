import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { updateReducer } from './reducers/updateReducer'
import { combineReducers } from 'redux'
import { vehicleReducer } from './reducers/vehicleReducer'

const reducers = combineReducers({
    updates: updateReducer,
    vehicles: vehicleReducer
})

const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export { store }