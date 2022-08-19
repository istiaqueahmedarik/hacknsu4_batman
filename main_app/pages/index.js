import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Cookies from 'universal-cookie';
import Device from '../components/Device';
import Login from '../components/Login';
import Main from '../components/Main';
import app from '../firebase';
export default function Home() {
  const [device,setDevice] = useState('')
  const cookies = new Cookies();
  useEffect(() => {
   
    setDevice(cookies.get('device'))
    
}, [])
console.log(device)
  const provider = new GoogleAuthProvider();
  
  const auth = getAuth(app)
  const [user, loading, error] = useAuthState(auth);
  const login = () => {
    
    signInWithPopup(auth, provider)
    
  };
  const logout = () => {
    signOut(auth)
  };
  if (loading) {
    return (
      <div className="primary">
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="primary">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div  className="primary">
        {device===''?(
        <Device user={user.displayName}/>

        ):(
          <Main user={user.displayName}/>
        )}        
      </div>
    );
  }
  return(<>
  <Login func={login}/>
  
  </>) 
}
