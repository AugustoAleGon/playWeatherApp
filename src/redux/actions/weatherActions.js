import {LOAD, LOAD_SUCCESS, LOAD_FAIL} from '../reducers/weather';
import axios from 'axios';

export function load(dispatch, lat, long) {
  const API_KEY = "ccae33f84fd15281";
  dispatch({type: LOAD});
  const request_geoposition = "http://api.wunderground.com/api/"+API_KEY+"/geolookup/q/"+lat+","+long+".json";
  const request_url = "http://api.wunderground.com/api/"+API_KEY+"/forecast/q/"+lat+","+long+".json";
  axios.get(request_geoposition)
  .then( (response) => {
     let geoPosition = response.data.location;
     console.log(geoPosition);
     axios.get(request_url)
     .then( (response) => {
       let weather = response.data.forecast.simpleforecast.forecastday;
       dispatch({type: LOAD_SUCCESS ,response: weather, geo: geoPosition});
       console.log(weather)
     })
     .catch((err) => {
       dispatch({type: LOAD_FAIL})
     })
  })
  .catch( (err) => {
    dispatch({type: LOAD_FAIL})
  })

}
