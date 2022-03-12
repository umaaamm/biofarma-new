import LoginTypeAction from './LoginTypeAction';
import LoginInitialState from './LoginInitialState';

const loginReducer = (state = LoginInitialState, {type, payload}) => {
    switch(type){
        case LoginTypeAction.SET_TOKEN:
            return {
                ...state,
                token: payload
            }
        default:
            return state;
    }
}

export default loginReducer;