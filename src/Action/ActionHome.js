import axios from "axios"
import HomeAction from "../Redux/Reducer/Home/HomeAction";
import { useDispatch } from "react-redux";

export const actionHome = () => async (dispatch) => {
    try {
        dispatch(HomeAction.HOME_LOAD_START());

        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipes');

        if (data?.status == 200) {
            //   return data?.data
            dispatch(HomeAction.HOME_LOAD_SUCCESS(data?.data))
            return;
        }

        if (data?.response && data?.response.length > 0) {
            // return data?.response.data
            return dispatch(HomeAction.HOME_LOAD_ERROR(data?.response.data))
        }
    } catch (err) {
        return err;
    }
}

export const actionHomeCategory = async () => {
    try {
        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipe-categories');

        if (data?.status == 200) {
            return data?.data
        }

        if (data?.response && data?.response.length > 0) {
            return data?.response.data
        }
    } catch (err) {
        return err;
    }
}

export const actionShort = async (param, id) => {
    try {

        var url;
        if (id == 'all') {
            url = 'https://fe.runner.api.devcode.biofarma.co.id/recipes?sort=' + param
        }else{
            url = 'https://fe.runner.api.devcode.biofarma.co.id/recipes?sort=' + param + '&categoryId=' + id
        }

        const data = await axios.get(url);

        if (data?.status == 200) {
            return data?.data
        }

        if (data?.response && data?.response.length > 0) {
            return data?.response.data
        }
    } catch (err) {
        return err;
    }
}

export const actionSearch = async (param) => {
    try {
        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipes?limit&q='+param);

        if (data?.status == 200) {
            return data?.data
        }

        if (data?.response && data?.response.length > 0) {
            return data?.response.data
        }
    } catch (err) {
        return err;
    }
}