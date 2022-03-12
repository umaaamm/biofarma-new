import { applyMiddleware , createStore, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../RootReducer";

const ConfigureStore = () =>{
    const middlewares = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer(), enhancers);

    return store;
}

export default ConfigureStore;