import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import s from './Login.module.css';

const Login = React.memo(() => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [loggedUser] = useAuthState(auth);

  const signIn = async () => {
    try {
      await signInWithGoogle([], { prompt: 'select_account' });
    } catch (error) {
      console.log('Sign in error: ', error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className={s.login}>
      {loggedUser ? (
        <div className={s.signOut} onClick={logOut}>
          Log out
        </div>
      ) : (
        <div className={s.google} onClick={signIn}>
          <span>Continue with Google</span>
        </div>
      )}
      {loggedUser && user && (
        <div className={s.userInfo}>
          <div>{user.user.displayName}</div>
        </div>
      )}
    </div>
  );
});

export default Login;
