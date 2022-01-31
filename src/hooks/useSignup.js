import { useState } from 'react';
import { auth } from '../firebase.js/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

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

  return { error, signup };
};
