import { auth } from '../firebase.js/config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('user logged out');
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return { logout };
};
