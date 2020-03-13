import {MAKE_COUNT} from '../../components/Constants';

const initialState = {
    count: 0
};

const secondReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return {
                ...state
            };
    };
};

export default secondReducer;