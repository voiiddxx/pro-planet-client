const taskReducer = (state , action)=>{
    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        case "SET_API_DATA":
            return {
                ...state,
                isLoading:false,
                task:action.payload
            }
            
            
    
        default:
            return state;
    }
}

export default taskReducer;