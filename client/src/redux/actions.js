import {SEARCH, LOADINGSTART, LOADINGEND} from './types'




const loadingStart = () => ({type: LOADINGSTART})
const loadingEnd = () => ({type: LOADINGEND})

// const getRepos = () => {
//     return dispatch => {
//         dispatch({type: REPOS, payload: []})
//     }
// }

const addRepos = repos => {
    return dispatch => {
        dispatch({type: SEARCH, payload: repos})
    }
}


export const searchFetch = (url) => {
    return async dispatch => {
        try{
            dispatch(loadingStart())

            const response = await fetch(url)
            const data = await response.json()
            dispatch(addRepos(data))
            dispatch(loadingEnd())
        }catch (e) {
            dispatch(loadingEnd())
        }
    }
}

export const reposFetch = () => {
    return async dispatch => {
        try{
            dispatch(loadingStart())
            const response = await fetch('/api/repo')
            const data = await response.json()
            dispatch(addRepos(data))
            dispatch(loadingEnd())
        }catch (e) {
            dispatch(loadingEnd())
        }
    }
}