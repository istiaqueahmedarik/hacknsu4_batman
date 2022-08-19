import { Button } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase';
export default function Home() {
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
        <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
        </div>
        
      </div>
    );
  }
  return(<>
  <Image src="https://media.istockphoto.com/photos/demo-sign-cubes-picture-id615422436?k=20&m=615422436&s=612x612&w=0&h=m-VHyxKGp3qdXyi_O5C1oxghcmbAegmb34VaD9n6v7c=" alt="logo"/>
  <Button variant="outlined"  onClick={login}>Log in</Button>

  
  </>) 
}
