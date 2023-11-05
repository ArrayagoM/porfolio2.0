import {  GET_CONTAC,  GET_PROJEC } from "./action-type";

const initialState = {
    allContac: [],
    allProyec:[]
}


const reducer = (state = initialState, action ) => {
switch (action.type) {
    case GET_CONTAC: 
         return{
                ...state,
                allContac: action.payload
    }
    case GET_PROJEC:
        return {
                ...state,
                allProyec: action.payload
    }
    
    default: 
        return {
                ...state
    }
}
}

export default reducer;