export const getAllElems = (WOSList) => {
    return {
        type: "WOS_LIST_LOADER",
        payload: WOSList
    }
}