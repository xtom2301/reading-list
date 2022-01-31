import { useState } from 'react';
import { db } from '../firebase.js/config';
import { collection, addDoc } from 'firebase/firestore';

export default function BookForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, 'books');
    await addDoc(ref, { title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
