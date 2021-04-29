import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducer.js";

const store = createStore(RootReducer);
export default store;