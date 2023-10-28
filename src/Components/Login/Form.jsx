import './formstyle.css'
// import { useState } from 'react';

function Form() {
//   let x = document.getElementById("name").value
//   let y = document.getElementById("name").value
//   let z=document.getElementById("name").value
//   let validate = () => {
//     if ((x !== '') & (y !== '') & (z !== '')) {
//        return(alert("Login successfully"))
//     }
//     else {
//       return alert("Login successfully")
//     }
//   }
  return (
    <div className="Form">
      <div className="content">
        <div>
          <h1>Sign Up</h1>
        </div>
        <div className='input'>
          <input type="text" placeholder='Name' id='name'/>
          <input type="email" placeholder='E-mail' id='mail'/>
          <input type="password" placeholder='Password'id='password'/>
        </div>
        <button >continue</button>
        <div className='NUser'>
          <p>Already have an account ?</p><span >Login Here</span>
        </div>
        <div className='CB'>
          <input type="checkbox" /> <p>By continuing,i agreed all the use & privercy policy</p></div>
        <div className='FButton'>
        </div>
      </div>

      </div>

  );
}
export default Form;
