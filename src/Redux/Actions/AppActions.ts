import { get, post } from '../../Services/api';
import * as ActionTypes from '../ActionTypes/ActionTypes'
import { Dispatch } from 'redux'; // Import the Dispatch type or define it manually if not available

export const updatedLoader = (status: boolean) => {
    if (status == true) {
        return { type: ActionTypes.SHOW_LOADER, payload: { status } };
    } else {
        return { type: ActionTypes.HIDE_LOADER, payload: { status } };
    }
};
export const updateChoosenProduct = (data: any) => {
    return {
        type: ActionTypes.PRODUCT_CHOOSEN,
        payload: data,
    }
}

export const getProducts = (
    success: (data: any) => void,
    failure: (error: string) => void) => async (dispatch: Dispatch) => {
        try {

            dispatch({ type: ActionTypes.SHOW_LOADER });
            let response: any = await get(`https://dummyjson.com/products`);
            dispatch({ type: ActionTypes.HIDE_LOADER });
            if (response.status && response.status === 200) {
                success(response);
            } else {
                failure(response);
            }
        }
        catch (err) {
            dispatch({ type: ActionTypes.HIDE_LOADER });
        }
    }

export const LoginAuth = (
    body: any,
    success: (data: any) => void,
    failure: (error: string) => void) => async (dispatch: Dispatch) => {
        try {

            dispatch({ type: ActionTypes.SHOW_LOADER });
            let response: any = await post(`https://dummyjson.com/auth/login`, body);
            dispatch({ type: ActionTypes.HIDE_LOADER });
            if (response.status && response.status === 200) {
                success(response);
                dispatch({
                    type: ActionTypes.PROFILE_DATA,
                    payload: response
                });
            } else {
                failure(response);
            }
        }
        catch (err) {
            dispatch({ type: ActionTypes.HIDE_LOADER });
        }
    }
export const getSearchProducts = (
    body: any,
    success: (data: any) => void,
    failure: (error: string) => void) => async (dispatch: Dispatch) => {
        const { query } = body;
        try {

            dispatch({ type: ActionTypes.SHOW_LOADER });
            let response: any = await get(`https://dummyjson.com/products/search?q=${query}`);
            dispatch({ type: ActionTypes.HIDE_LOADER });
            if (response.status && response.status === 200) {
                success(response);
            } else {
                failure(response);
            }
        }
        catch (err) {
            dispatch({ type: ActionTypes.HIDE_LOADER });
        }
    }

export const AddProd = (
    body: any,
    success: (data: any) => void,
    failure: (error: string) => void) => async (dispatch: Dispatch) => {
        try {

            dispatch({ type: ActionTypes.SHOW_LOADER });
            let response: any = await post(`https://dummyjson.com/products/add`, body);
            dispatch({ type: ActionTypes.HIDE_LOADER });
            if (response.status && response.status === 200) {
                success(response);

            } else {
                failure(response);
            }
        }
        catch (err) {
            dispatch({ type: ActionTypes.HIDE_LOADER });
        }
    }