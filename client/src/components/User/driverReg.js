import React, { useState ,useEffect} from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
function DriverReg() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    useEffect(()=>{

        const token = localStorage.getItem('tokenDri');

        
        if (token){
           
            window.location.replace("/driProfile");
           
        }
})


const reg =  async(e) => {
   
    e.preventDefault();

    const newUser = {
        name,
        email,
        mobile,
        vehicle,
        password,
        confirmPass
    }
    if(newUser.name.length < 4){
        alert("Enter Full Name")
        return false;
    }
    if (newUser.email == '' || newUser.email.includes('@'  && '.com') == false ){

        alert("Enter Valid email Address")
        return false;
    }
    if (newUser.password != newUser.confirmPass){
        alert("Password not matched")
        return false;
    }

    axios.post('http://localhost:5000/driver/reg', newUser).then((res)=>{
        console.log(res.data)
        alert("Registration Success")
        window.location.replace("/login")
    }).catch((err)=>{
        alert(err);
    })

     
    }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

   
  const [mobileLog, setMobilelog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  useEffect(()=>{

      const token = localStorage.getItem('driverToken');
      if (token){  
          window.location.replace("/driverprofile");   
      }
      })
  const navigate = useNavigate();


  const log = (e) => {
      const form = e.currentTarget;
      e.preventDefault();
  
      const login = {
        mobile:mobileLog,
        password:passwordLog
      }
      
      axios.post('http://localhost:5000/driver/login', login).then(res=>{
        console.log(login)
              if(res.data.success){
                  alert("Successfull")
                  localStorage.setItem("token",JSON.stringify(res.data.token));
                  navigate("/food/allorders");

              }else {
                  alert("Wrong Password")
              }
          
          
          
      }).catch((err)=>{
          alert(err);
      })
    }



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

        <form onSubmit={(e) => log(e)}>
          <MDBInput wrapperClass='mb-4' label='Mobile' id='mobileLog' type='text'
            value={mobileLog}
            onChange={(e)=> setMobilelog(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='passwordLog' type='password'
            value={passwordLog}
            onChange={(e)=> setPasswordLog(e.target.value)}/>

       

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
        
        </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

        
            <form onSubmit={(e) => reg(e)}>
          <MDBInput wrapperClass='mb-4' label='Name' id='name' type='text'
            value={name}
            onChange={(e)=> setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Mobile' id='mobile' type='text'
          value={mobile}
          onChange={(e)=> setMobile(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Vehicle' id='vehicle' type='text'
          value={vehicle}
          onChange={(e)=> setVehicle(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
         <MDBInput wrapperClass='mb-4' label='Confirm Password' id='password1' type='password'
          value={confirmPass}
          onChange={(e)=> setConfirmPass(e.target.value)}/>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" >Sign up</MDBBtn>
        </form>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default DriverReg;