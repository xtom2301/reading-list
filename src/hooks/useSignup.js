import { useState } from 'react';
import { auth } from '../firebase.js/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log({ user });
      })
      .catch(({ message }) => {
        setError({ message });
      });
  };

  return { error, signup };
};
