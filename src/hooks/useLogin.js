import { useState } from 'react';
import { auth } from '../firebase.js/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log({ user });
      })
      .catch(({ message }) => {
        setError({ message });
      });
  };

  return { error, login };
};
