import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const initialState = {
    isFetching: false,
    imageURL: '',
    errorMessage: '',
}

function dogReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
                imageURL: '',
                errorMessage: '',
            }

        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                imageURL: action.payload,
                errorMessage: '',
            }

        case REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                imageURL: '',
            }

        default:
            return state;
    }
}

export default dogReducer;