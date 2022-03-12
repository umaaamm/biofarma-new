import LoginTypeAction from './LoginTypeAction';

const SET_TOKEN = (payload) => ({
    type: LoginTypeAction.SET_TOKEN,
    payload: payload
});

export default { SET_TOKEN }