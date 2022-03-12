import { combineReducers } from "redux";
import DetailReducer from "./Reducer/Detail/DetailReducer";
import HomeReducer from "./Reducer/Home/HomeReducer";
import LoginReducer from './Reducer/LoginReducer';

const rootReducer = () => 
    combineReducers({
        Login: LoginReducer,
        Home: HomeReducer,
        Detail: DetailReducer
    });

export default rootReducer;