import { ShopActionTypes } from './shop.types';

//import SHOP_DATA from './shop.data';

const initialState = {
    collections: []
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;