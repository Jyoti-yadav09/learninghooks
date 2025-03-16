import {useReducer, useRef} from 'react';

 const reducer=(state, action)=>
 {
     if(action.type==="TOGGLE")
     {
         return !state;
     }
      else{
         return state;
      }
 }
const Toggle = () => {
     const[isToggled, dispatch]=useReducer(reducer, false);
  return (
    <div>
      <p>The toggle state is:{isToggled? "ON" : "OFF"}</p>
      <button onClick={()=>dispatch({type:"TOGGLE"})}>Toggle</button>
    </div>
  )
};

export default Toggle;
