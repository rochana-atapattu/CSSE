import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import BusesReducer from "./reducer_buses";
import RouteReducer from "./reducer_route";
import AuthReducer from "./reducer_authorization";


const rootReducer = combineReducers({
    buses: BusesReducer,
    routes:RouteReducer,
    auth:AuthReducer,
    form: formReducer
});

export default rootReducer;
