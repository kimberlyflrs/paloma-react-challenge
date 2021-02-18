import {
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    LOADING,
} from "./type.js";

const FeedReducer = (state, action) =>{
    switch(action.type){
        case SEARCH_SUCCESS:
            return{
                ...state,
                search: action.search,
                feedList: action.payload,
                error: "",
                isLoading: false
            };

        
        case SEARCH_FAIL:
        return{
            ...state,
            search: action.search,
            feedList: [],
            error: action.payload,
            isLoading: false
        }


        case LOADING:
            return{
                ...state,
                isLoading: true
            }


        default: 
            return state;
    }
};

export default FeedReducer;