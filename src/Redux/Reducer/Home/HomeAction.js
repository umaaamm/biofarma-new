import HomeTypeAction from "./HomeTypeAction";

const HOME_LOAD_ERROR = (payload) => ({
    type: HomeTypeAction.HOME_LOAD_ERROR,
    payload: payload
});
const HOME_LOAD_START = () => ({
    type: HomeTypeAction.HOME_LOAD_START,
});
const HOME_LOAD_SUCCESS = (payload) => ({
    type: HomeTypeAction.HOME_LOAD_SUCCESS,
    payload: payload
});

export default { HOME_LOAD_ERROR, HOME_LOAD_START, HOME_LOAD_SUCCESS }