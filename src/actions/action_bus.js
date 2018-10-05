import database from '../firebase'
/*import axios from "axios";*/

import { FETCH_BUSES, FETCH_BUS, DELETE_BUS ,CREATE_BUS ,UPDATE_BUS} from "../types";


const Bus=database.ref(`/bus`);


export function fetchBuses() {

    return dispatch => {

        Bus.on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({

                type: FETCH_BUSES,
                payload: snapshot.val()
            });

        })

    };
}


export function createBus(values, callback) {
    console.log(values)
    return dispatch=> {
        values["busId"]=Bus.push().getKey();
        Bus.child(values.busId).set(values).then(() => callback());
        dispatch({
            type: CREATE_BUS,
            payload: values
        })
    };
}

export function fetchBus(id) {


    return dispatch => {

        database.ref(`/bus/${id}`).on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({

                type: FETCH_BUS,
                payload: snapshot.val()
            });

        })

    };
}
export function updateBus(value) {


    return dispatch => {

        database.ref(`/bus/${value.busId}`).update(value, snapshot => {
            console.log(snapshot);
            dispatch({

                type: UPDATE_BUS,
                payload: value
            });

        })

    };
}

export function deleteBus(id) {

    return dispatch=> {
        Bus.child(id).remove();
        dispatch({
            type: DELETE_BUS,
            payload: id
        })
    };
}
