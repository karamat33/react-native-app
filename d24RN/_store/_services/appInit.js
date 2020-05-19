const getAppInit = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    //Have it first fetch data from our api url.
    const promise = await fetch(
      'https://staging-api.designer-24.com/app/v2/config/init',
      requestOptions
    );

    //Then use the json method to get json data from api/
    const data = await promise.json();
    //Now when the data is retrieved dispatch an action altering redux state.
    return data;
  } catch (error) {
    console.log('Getting Error---------', error);
  }
};
export const appInitService = {
    getAppInit
};
