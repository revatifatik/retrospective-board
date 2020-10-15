//import {  } from '../constants/contants';

const retrospectiveReducer = (
    state = {
    },
    action
) => {
    switch (action.type) {
        case '':
            return {
                ...state,


            };
        default: {
            return { ...state };
        }
    }
};

export default retrospectiveReducer;
