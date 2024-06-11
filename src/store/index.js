import { legacy_createStore as createStore} from 'redux'

const initialState = { 
        counter: 0,
        isShow: true 
    };
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increase'){
        return {
            ...state,
            counter : state.counter +1
        }
    }
    if(action.type === 'decrease'){
        return {
            ...state,counter : state.counter -1
        }
    }
    if(action.type === 'increase5'){
        return {
            ...state,counter : state.counter +5
        }
    }
    if(action.type === 'toggle'){
        return {
            ...state,isShow : !state.isShow
        }
    }
    return state;
}

const store = createStore(counterReducer);
export default store;
