import { combineReducers } from "redux";
import gamesReducers from "./gamesReducer";
import navReducer from "./navReducer";
const rootReducer = combineReducers({
  games: gamesReducers,
  nav: navReducer,
});

export default rootReducer;
