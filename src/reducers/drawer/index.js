
import { combineReducers } from 'redux'
import Hashes from 'jshashes'

const type = ( state='SHA256', action ) =>{
    switch(action.type){
	case 'CRYPTO':
	    return action.reddit
	default:
	    return state
    }
}

const hash = ( state="hash your secret", action ) =>{
    switch(action.type){
	case 'HASH':
	    return action.ohash
	default:
	    return state
    }
}

const mix = combineReducers({
    type, hash
})

export default mix
