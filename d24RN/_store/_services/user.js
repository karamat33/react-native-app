import { authHeader } from '../_helpers/authHeader';

const login = async (username, password) => {
  const body = {
    "storeId":2,
    'email': username,
    'password': {
    'value':password,
    'isEncrypted': false
    }
  } 
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  try {
    //Have it first fetch data from our api url.
    const promise = await fetch(
      'https://staging-api.designer-24.com/customer/login',
      requestOptions
    );

    //Then use the json method to get json data from api/
    const data = await promise.json();
    //Now when the data is retrieved dispatch an action altering redux state.
    console.log(data);
    return data;
  } catch (error) {
    console.log('Getting Error---------', error);
  }
};

const register = async (user,key) => {
    console.log(key)
  const fullName = user.fullName.split(' ')
  const body = {
    "storeId":2,
    'firstName': fullName[0],
    'lastName': fullName[1],
    'email': user.email,
    'password': {
    'value':user.password,
    'isEncrypted': false
    },
    "autoLogin":true
  } 
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  try {
    //Have it first fetch data from our api url.
    const promise = await fetch(
      'https://staging-api.designer-24.com/customer/create',
      requestOptions
    );

    //Then use the json method to get json data from api/
    const data = await promise.json();
    console.log(data)
    //Now when the data is retrieved dispatch an action altering redux state.
    return {user: data, status:promise.status};
  } catch (error) {
    console.log('Getting Error---------', error);
  }
};

function logout() {
  // remove user from local storage to log user out
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

/*function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}
*/
function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
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

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};
