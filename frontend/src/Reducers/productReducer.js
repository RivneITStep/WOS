const initialState = {
    ProductList: [],
    loading: true,
};

const contactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCT_LIST":
            return {
                loading: false,
                ProductList: action.payload,
            };
        default:
            return state;
    }
};

export default contactListReducer;