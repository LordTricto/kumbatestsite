import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./items/itemsReducer/itemsReducer";
import { persistStore } from "redux-persist";
// Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;
