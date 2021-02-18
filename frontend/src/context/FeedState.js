import React, {useReducer} from "react";
import FeedContext from "./FeedContext";
import FeedReducer from "./FeedReducer";
import {SEARCH_SUCCESS, SEARCH_FAIL, LOADING} from "./type.js";

const FeedState = props =>{
    const initialState = {
        feedList: [],
        error: "",
        search:"",
        isLoading: false
    };

    const [state, dispatch] = useReducer(FeedReducer, initialState);

    //searches the term
    const searchFeed = async(feedType) =>{
        let errorFound = false;

        const data = await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        .then((response) =>{
            var data = response.json();
            return data
        })
        .then(data=>{
            var filteredSet = data.entries.filter(item =>((item.releaseYear >= 2010)&&(item.programType === feedType)));
        // console.log(filteredSet)
            var entries = filteredSet.slice(0,21);
            entries.sort(function(a,b){
                return (a.title.toUpperCase()<b.title.toUpperCase()) ? -1 : (a.title.toUpperCase()>b.title.toUpperCase()) ? 1 : 0;
            })
            return entries;
        })
        .catch((error) => 
            errorFound = true
        )

        console.log(data.length)
        if(errorFound || data.length===0){
            dispatch({type: SEARCH_FAIL, payload: "Oops, something went wrong...", search: feedType})
        }
        else{
            dispatch({type: SEARCH_SUCCESS, payload: data, search: feedType});
        }
    }


    const changeLoading = () =>{
        dispatch({type: LOADING})
    }


return (
    <FeedContext.Provider
        value={{
            feedList: state.feedList,
            error: state.error,
            isLoading: state.isLoading,
            search:state.search,
            searchFeed,
            changeLoading
        }}>
            {props.children}
    </FeedContext.Provider>
    )
};

export default FeedState;