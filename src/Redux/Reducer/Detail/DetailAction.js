import DetailTypeAction from "./DetailTypeAction";

const DETAIL_LOAD_ERROR = (payload) => ({
    type: DetailTypeAction.DETAIL_LOAD_ERROR,
    payload: payload
});
const DETAIL_LOAD_START = () => ({
    type: DetailTypeAction.DETAIL_LOAD_START,
});
const DETAIL_LOAD_SUCCESS = (payload) => ({
    type: DetailTypeAction.DETAIL_LOAD_SUCCESS,
    payload: payload
});

export default { DETAIL_LOAD_SUCCESS, DETAIL_LOAD_START, DETAIL_LOAD_ERROR }