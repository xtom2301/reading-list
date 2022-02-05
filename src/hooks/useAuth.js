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

  const login = async (email, password) => {
    setError(null);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: 'LOGIN', payload: user });
    } catch ({ message }) {
      setError({ message });
    }
  };

  const signup = async (email, password) => {
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: 'LOGIN', payload: user });
    } catch ({ message }) {
      setError({ message });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
    } catch ({ message }) {
      setError({ message });
    }
  };

  const signInWithGoogle = async () => {
    setError(null);
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      dispatch({ type: 'LOGIN', payload: user });
    } catch ({ message }) {
      setError(message);
    }
  };
  return { error, login, signup, logout, signInWithGoogle };
};
