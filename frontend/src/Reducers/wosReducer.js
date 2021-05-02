const initialState = {
    WOSList: [],
    CurrentElem: "",
}
const wosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "WOS_LIST_LOADER":
            return {
                ...state,
                WOSList: action.payload
            }
        default:
            return state
    }
}
export default wosReducer