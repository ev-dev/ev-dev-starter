import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import firebase from 'firebase'

import otherReducer from './redux/otherReducer'


const firebaseConfig = {

}

const reduxFirebaseConfig = {
  userProfile: 'users'
}

firebase.initializeApp(firebaseConfig)


const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reduxFirebaseConfig)
)(createStore)


const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})


const initialState = {  }
const firestore = createStoreWithFirebase(rootReducer, initialState)
export default firestore