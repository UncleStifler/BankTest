import {submitForm} from "../api/api";


const initialState = {
    finishPassword: '',
    modalPage: false,
    flagModel: '',
    currentStep: 1
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'passwordReducer/FINISH-PASSWORD' : {
            return {...state, finishPassword: action.finishPassword}
        }
        case 'passwordReducer/RESOLVE-REJECT-TOGGLE' : {
            return {...state, modalPage: action.response}
        }
        case 'passwordReducer/TOGGLE-FLAG': {
            return {...state, flagModel: action.flag}
        }
        case 'passwordReducer/UPDATE-CURRENT-STEP': {
            return {...state, currentStep: action.currentStep}
        }
        default:
            return state
    }
}

export const finishPasswordAC = (finishPassword) => {
    return {type: 'passwordReducer/FINISH-PASSWORD', finishPassword}
}
export const resolveRejectToggleAC = (response) => {
    return {type: 'passwordReducer/RESOLVE-REJECT-TOGGLE', response}
}
export const FlagModelAC = (flag) => {
    return {type: 'passwordReducer/TOGGLE-FLAG', flag}
}

export const UpdateCurrentStepAC = (currentStep) => {
    return {type: 'passwordReducer/UPDATE-CURRENT-STEP', currentStep}
}

export const resolveRejectTC = () => (dispatch, getState) => {
    const state = getState()
    submitForm(state.appReducer.finishPassword)
        .then(res => {
            dispatch(resolveRejectToggleAC(res.status))
            dispatch(FlagModelAC('good'))

        })
        .catch(() => {
            dispatch(FlagModelAC('bad'))
        })
}


