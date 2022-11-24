import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loading";
import userSlice from "../reducer/user";

const allReducers = combineReducers({
  userReducer: userSlice.reducer,
  loadingReducer: loadingSlice.reducer
})

const myStore = configureStore({
  reducer: allReducers
})

export default myStore