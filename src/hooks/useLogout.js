import { auth } from '../firebase.js/config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return { logout };
};
