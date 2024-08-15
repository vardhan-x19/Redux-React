import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Controls() {
    const text=useRef();
    const dispatch= useDispatch();
    const addFunc=()=>{
        dispatch({type :"INCREMENT"})
    }
    const subFunc=()=>{
        dispatch({type :"DECREMENT"})
    }
    const add=()=>{
        dispatch({type :"add",payload:text.current.value})
    }
    const sub=()=>{
        dispatch({type :"sub",payload:text.current.value})
    }
    const privateFunc=()=>{
        dispatch({type :"privacy"})
    }
    return (
        <>
        <div class="col-lg-6 mx-auto">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3"  onClick={addFunc} >+1</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={subFunc} >-1</button>
              <button type="button" class="btn btn-danger" onClick={privateFunc} >Privacy</button>
            </div>
        </div>
        <div className="col-lg-6 mx-auto controls">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <input className="text" type="text" ref={text} />
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3"  onClick={add} >add</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={sub} >sub</button>
            </div>
        </div>
    
        </>
    )
}
export default Controls;