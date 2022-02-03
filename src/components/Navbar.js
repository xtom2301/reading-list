import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { logout } = useAuth();
  const { user } = useAuthContext();

  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {!user && (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        )}
        {user && <li onClick={logout}>Logout</li>}
      </ul>
    </nav>
  );
}
