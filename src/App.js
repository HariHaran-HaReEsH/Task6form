import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state]= useState('test@gmail.com');
  const [inp,setinp]=useState('');
  const [pass]=useState('12345678');
  const [inp2,setinp2]=useState('');
  const [effect,seteffect]=useState();
  const einput=(event)=>{
    setinp(event.target.value);
  }
  const pinput=(event)=>{
     setinp2(event.target.value);
  }
  //eslint-disable-next-line
  useEffect(()=>{
    if(effect==='True'){
        inp===state ? pass===inp2 ? alert("Login Successful") : alert("Incorrect Password"):alert("Incorrect Email");
    }
    //eslint-disable-next-line;
    seteffect('False');
    
   
  }//eslint-disable-next-line
);
  return (
    
    <div className='App'>
      <h1>LOGIN USING USEEFFECT</h1>
    <label>Email ID :</label>
    <input type='email'  placeholder='Enter emailID' onChange={einput}></input>
    <br></br>
    <label>Password :</label>
    <input type='password'  placeholder='Enter Password' onChange={pinput}></input>
    <br></br>
    <button type='submit' onClick={()=>seteffect('True')}>LOGIN</button>
    </div>
  );
}

export default App;
