export const getProductList = (productList) => {
    return {
        type: "LOAD_PRODUCT_LIST",
        payload: productList,
    };
};
