import { useState } from 'react';
import { auth } from '../firebase.js/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
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

  return { error, login };
};
