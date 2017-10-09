export const LOAD = 'PlayWeatherApp/wheather/LOAD';
export const LOAD_SUCCESS = 'PlayWeatherApp/wheather/LOAD_SUCCESS';
export const LOAD_FAIL = 'PlayWeatherApp/wheather/LOAD_FAIL';

const initialState = {
  response: [],
  loading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
    return {
      ...state,
      loading: true,
    }
    break;
    case LOAD_SUCCESS:
    return {
      ...state,
      response: action.response,
      geo: action.geo,
      loading: false,
      loaded: true
    }
    break;
    case LOAD_FAIL:
    return {
      ...state,
      loaded: false,
      loading: true
    }
    break;
    default:
    return {
      ...state
    }

  }
}
