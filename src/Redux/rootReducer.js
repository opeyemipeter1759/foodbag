import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/Shopping.reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
