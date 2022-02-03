import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li>{!user && <Link to='/login'>Login</Link>}</li>
        <li>{!user && <Link to='/signup'>Signup</Link>}</li>
        {user && <li onClick={logout}>Logout</li>}
      </ul>
    </nav>
  );
}
