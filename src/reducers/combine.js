import { combineReducers } from "redux";
import authreducer from "./authreducer";


    const mainReducer= combineReducers({

        auth:authreducer
        });

   
    export default mainReducer;

    