import {GET_VALUE,MAKE_POINT,DELETE_POINT} from '../../components/Constants';

const initialState = {
        list: [],
        inputText: "Введите текст",
}

const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VALUE:
            return {
                ...state,
                inputText: action.payload,
            };
        case MAKE_POINT:
            return {
                ...state,
                list: [...state.list,action.payload],
            }
        case DELETE_POINT:
            return {
                ...state,
                list: action.payload
            }
        default:
            return {
                ...state
            }

    }
}

export default firstReducer;