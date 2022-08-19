import { Button } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import React from 'react';
import app from '../firebase';
function Login() {
 
    const provider = new GoogleAuthProvider();
  
  const auth = getAuth(app)
  const login = () => {
    
    signInWithPopup(auth, provider)
    
  };

    return (
        <>
            <div className="contactSvg primary">
                <Image src="/../public/Sun energy-bro.png" alt="logo" width={500} height={500}/>
                <h1 className='name'>Energy Maps</h1>
                <Button variant="outlined"  onClick={()=>login()}>Log in with google</Button>

            </div>
  

        </>
    )
}

export default Login