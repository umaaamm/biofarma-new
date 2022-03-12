import axios from "axios"
import DetailAction from "../Redux/Reducer/Detail/DetailAction";

export const actionDetail = () => async (dispatch) => {
    try {
        dispatch(HomeAction.HOME_LOAD_START());

        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipes');

        if (data?.status == 200) {
            //   return data?.data
            dispatch(HomeAction.HOME_LOAD_SUCCESS(data?.data))
            return;
        }

        if (data?.response && data?.response.lenght > 0) {
            // return data?.response.data
            return dispatch(HomeAction.HOME_LOAD_ERROR(data?.response.data))
        }
    } catch (err) {
        return err;
    }
}