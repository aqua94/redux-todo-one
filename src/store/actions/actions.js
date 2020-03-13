import {GET_VALUE, MAKE_POINT, DELETE_POINT} from '../../components/Constants';

export const getValue = (event) => {
    return {
        type: GET_VALUE,
        payload: event.target.value
    };
};

export const makePoint = (inputText) => {
    return {
        type: MAKE_POINT,
        payload: inputText
    };
};

export const deletePoint = (index,list) => {
    return {
        type: DELETE_POINT,
        payload: list.filter((item,i) => {
            return i!==index;
          })
    };
};
