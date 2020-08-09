import {useReducer, useEffect} from 'react'
import axios from 'axios'

const ACTIONS = {

    MAKE_REQUESTS: 'make_requests',
    GET_DATA: 'get-data',
    ERROR: 'error'

};

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
  
function reducer(state, action){
    switch(action.type){
        case ACTIONS.MAKE_REQUESTS:
            return {loading: true, jobs: []}

        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}

 
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []}

        default:
            return state
        
    }
}

function UseFetchJobs(params, page) {

    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true} )
    
    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUESTS})
        axios.get(BASE_URL, {
            cancelToken:cancelToken.token, params: {markdown: true, page: page, ...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(error => {
            if (axios.isCancel(error)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: error}})
        })


        return () =>{
            cancelToken.cancel()
        }

       
    }, [params, page]) 

    
    return state;
}

export default UseFetchJobs
