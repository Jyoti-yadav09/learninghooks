import {useReducer} from 'react';


 const reducer=(state, action)=>
 {
     if(action.type==="SET_FIELD")
        {
             return {...state, [action.field]: action.value};
        }
         
     else{
         return state;
     }
 };
 
const Form = () => {
const[state, dispatch]=useReducer(reducer, {name:"", email:""});

 const handleChange=(e)=>
 {
     dispatch(
        {
             type:"SET_FIELD",
             field:e.target.name,
             value:e.target.value,
        }
     );
 };
 
  return (
    <div>
      <h3>Form</h3>
      <input type="text" name="name" value={state.name} onChange={handleChange} placeholder='Name'/>
      <input type="text" name="email" value={state.email} onChange={handleChange} placeholder='Email'/>
      <p>Name: {state.name}</p>
      <p>Email:{state.email}</p>
    </div>
  );
};

export default Form;
