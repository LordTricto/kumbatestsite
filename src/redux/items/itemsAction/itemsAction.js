import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../itemsType/itemsType";
import { apiInstance } from "../../../utils/utils";
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
    payload: [],
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    apiInstance
      .get("/assignment")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};
