import _ from "lodash";
import { FETCH_BUSES, FETCH_BUS, DELETE_BUS, UPDATE_BUS } from "../types";

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_BUS:
            return _.omit(state, action.payload);
        case FETCH_BUSES:
            return action.payload
        case FETCH_BUS:
            return { ...state, [action.payload.busId]: action.payload};
        case UPDATE_BUS:
            return { ...state, [action.payload.busId]: action.payload};
        default:
            return state;
    }
}