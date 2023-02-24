import {configureStore} from "@reduxjs/toolkit";
import useReducer, { selectUser } from "../pages/Customeraccount/featurnes/useSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import useSlice from "../pages/Customeraccount/featurnes/useSlice";
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const persistConfig = {
    key: "root",
    version:1,
    storage,
    reducer: useSlice,
    middleware: [thunk, logger],
  }


const user = persistReducer(persistConfig, useSlice)

const store = configureStore({
    reducer: {
        user
    }
})

export const persistor = persistStore(store)

export default store