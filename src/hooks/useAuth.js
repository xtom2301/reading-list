import { useState } from 'react';
import { auth } from '../firebase.js/config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({ type: 'LOGIN', payload: user });
      })
      .catch(({ message }) => {
        setError({ message });
      });
  };

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({ type: 'LOGIN', payload: user });
      })
      .catch(({ message }) => {
        setError({ message });
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log(res);
        dispatch({ type: 'LOGOUT' });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return { error, login, signup, logout, signInWithGoogle };
};
