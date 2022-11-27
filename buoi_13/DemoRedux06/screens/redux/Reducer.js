const initState ={
    count:0
}

// Tạo reducer (state được lưu trên store sử dụng chung, action)
export const countReducer = (state=initState, action)=> {
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'TANG_COUNT':
            let count = state.count + 1
            return {
                count:count
            } // return state đã thay đổi giá trị vầ lưu state đã thay đổi giá trị lên store
        case 'GIAM_COUNT':
            let giamcount = state.count - 1
            return {
                count:giamcount
            }
    }
    return state
}