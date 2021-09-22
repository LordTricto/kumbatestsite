import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../itemsType/itemsType";
import { handleItemPrice } from "../itemsUtils/itemsUtils";
const INITIAL_STATE = {
  loading: true,
  user: {},
  restaurant: {},
  items: [],
  likes: [],
  dislikes: [],
  error: "",
};

const itemReducer = (state = INITIAL_STATE, action) => {
  if (action.type === FETCH_DATA_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === FETCH_DATA_SUCCESS) {
    return {
      loading: false,
      user: action.payload.user,
      restaurant: action.payload.restaurant,
      items: handleItemPrice({ items: action.payload.items }),
      likes: action.payload.user.likes,
      dislikes: action.payload.user.dislikes,
      error: "",
    };
  }
  if (action.type === FETCH_DATA_FAILURE) {
    return {
      loading: false,
      user: {},
      restaurant: {},
      items: [],
      likes: [],
      dislikes: [],
      error: action.payload,
    };
  }
  return state;
};

export default itemReducer;
