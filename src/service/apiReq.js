import { authHeader } from './authHeader';


const API="http://localhost:8090"


export const login=(username, password)=> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${API}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

export const logout=()=> {
    /*remove user from local storage to log user out*/
    localStorage.removeItem('user');
}

export const fetchBuses=()=> {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API}/bus`, requestOptions).then(handleResponse);
}
export const createBus=(data)=> {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return fetch(`${API}/bus/add`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
export const getRoutes=()=> {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API}/route/list`, requestOptions).then(handleResponse);
}
export const createRoute=(data)=> {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({data})
    };

    return fetch(`${API}/route/list`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

export const handleResponse=(response) =>{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}