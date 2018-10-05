import database from '../firebase'
/*import axios from "axios";*/

import { FETCH_ROUTES, FETCH_ROUTE, DELETE_ROUTE ,CREATE_ROUTE ,UPDATE_ROUTE} from "../types";


const Route=database.ref(`/route`);


export function fetchRoutes() {

    return dispatch => {

        Route.on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({

                type: FETCH_ROUTES,
                payload: snapshot.val()
            });

        })

    };
}


export function createRoute(values, callback) {
    console.log(values)
    return dispatch=> {

        Route.push(values).then(() => callback());
        dispatch({
            type: CREATE_ROUTE,
            payload: values
        })
    };
}

export function fetchRoute(id) {


    return dispatch => {

        database.ref(`/bus/${id}`).on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({

                type: FETCH_ROUTE,
                payload: snapshot.val()
            });

        })

    };
}
export function updateRoute(value) {


    return dispatch => {

        database.ref(`/route/${value.routeId}`).update(value, snapshot => {
            console.log(snapshot);
            dispatch({

                type: UPDATE_ROUTE,
                payload: value
            });

        })

    };
}

export function deleteRoute(id) {

    return dispatch=> {
        Route.child(id).remove();
        dispatch({
            type: DELETE_ROUTE,
            payload: id
        })
    };
}
