import {SEARCH, LOADINGSTART, LOADINGEND} from './types'

const handlers = {
    [SEARCH]: ({repos}, action) => {
        return {repos: action.payload, loading: false}
    },
    [LOADINGSTART]: state => ({...state, ['loading']: true}),
    [LOADINGEND]: state => ({...state, ['loading']: false}),
    DEFAULT: state => state
}



const initialState =  {
    repos: [],
    loading: false
}


export const repoReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}