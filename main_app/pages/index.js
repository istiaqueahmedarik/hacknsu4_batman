import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
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
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
}
