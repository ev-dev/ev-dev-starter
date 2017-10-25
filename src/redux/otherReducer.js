import axios from 'axios'

/* ------ Action Types ------ */
const LOADING = 'LOADING'
const LOADED = 'LOADED'
const NEW_QUERY = 'NEW_QUERY'
const GET_QUERY_HISTORY = 'GET_QUERY_HISTORY'
const POPULATE_RESULTS = 'POPULATE_RESULTS'

/* ------ Action Creators ------ */
const loading = () => ({
  type: LOADING
})

const loaded = () => ({
  type: LOADED
})

const newQuery = query => ({
  type: NEW_QUERY,
  query
})

const getQueryHistory = history => ({
  type: GET_QUERY_HISTORY,
  history
})

const populateResults = results => ({
  type: POPULATE_RESULTS,
  results
})

/* ------ Thunks ------ */
export const fetchQueryResults = query =>
  dispatch => {
    dispatch(loading())
    dispatch(newQuery(query))

    return axios.get(`/api/query/${query}`)
      .then(res => res.data)
      .then(results => dispatch(populateResults(results)))
      .catch(console.error)
  }


/* ------ Reducer ------ */
const initial = {
  isLoading: false,
  history: [],
  results: []
}

export default (state = initial, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case NEW_QUERY:
      return {
        ...state,
        history: [...state.history, action.query]
      }
    case POPULATE_RESULTS:
      return {
        ...state,
        results: action.results,
        isLoading: false
      }
    default:
      return state
  }
}
