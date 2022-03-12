import HomeInitialState from './HomeInitialState';
import HomeTypeAction from './HomeTypeAction';

const HomeReducer = (state = HomeInitialState, { type, payload }) => {
    switch (type) {
        case HomeTypeAction.HOME_LOAD_START:
            return {
                ...state,
                isLoading: true,
                dataHome: null,
                errorMessage: null
            }
        case HomeTypeAction.HOME_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            }
        case HomeTypeAction.HOME_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataHome: payload
            }
        default:
            return state;
    }
}

export default HomeReducer;