import * as ActionTypes from '../ActionTypes/ActionTypes'
const INITIAL_STATE = {
    language: null,
    theme: 'light',
    loader: false,
    productData: {},
    profileData: {}
};
export default function appReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ActionTypes.SHOW_LOADER:
            return { ...state, loader: true };
        case ActionTypes.HIDE_LOADER:
            return { ...state, loader: false };
        case ActionTypes.PRODUCT_CHOOSEN:
            return { ...state, productData: action.payload };
        case ActionTypes.PROFILE_DATA:
            return { ...state, profileData: action.payload };

        default:
            return state;
    }
}
