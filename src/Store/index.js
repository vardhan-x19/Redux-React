import {createStore} from 'redux'

const INI_VAL={
    counter:0,
    privacy:false
}
const redFunc=(store=INI_VAL,action)=>{
    if(action.type==="INCREMENT"){
        return {...store, counter:store.counter+1}
    }else if(action.type==="DECREMENT")
    {
        return {...store, counter:store.counter-1}
    }
    else if(action.type==="add")
    {
        return {...store, counter:store.counter+Number(action.payload)}
    }
    else if(action.type==="sub")
    {
        return {...store, counter:store.counter-Number(action.payload)}
    }
    else if(action.type==="privacy")
    {
        return {...store, privacy : !store.privacy}
    }
    return store;
}
const CounterStore=createStore(redFunc);

export default CounterStore;