import DetailTypeAction from './DetailTypeAction';
import DetailInitialState from './DetailInitialState';

const DetailReducer = (state = DetailInitialState, { type, payload }) => {
    switch (type) {
        case DetailTypeAction.DETAIL_LOAD_START:
            return {
                ...state,
                isLoading: true,
                dataHome: null,
                errorMessage: null
            }
        case DetailTypeAction.DETAIL_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            }
        case DetailTypeAction.DETAIL_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                detailFood: payload
            }
        default:
            return state;
    }
}

export default DetailReducer;