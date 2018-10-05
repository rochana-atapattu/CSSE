import _ from "lodash";
import { FETCH_ROUTES, FETCH_ROUTE, DELETE_ROUTE, UPDATE_ROUTE } from "../types";

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_ROUTE:
            return _.omit(state, action.payload);
        case FETCH_ROUTES:
            return action.payload
        case FETCH_ROUTE:
            return { ...state, [action.payload.routeId]: action.payload};
        case UPDATE_ROUTE:
            return { ...state, [action.payload.routeId]: action.payload};
        default:
            return state;
    }
}