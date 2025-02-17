import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createName(username));
    navigate('/menu');
    setUsername('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="-3 text-lg text-stone-500">
        👋 Welcome! Type your name to get start:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="mx-auto w-40 rounded-full border-2 border-stone-200 bg-white px-3 py-1.5 text-lg text-stone-800 caret-yellow-400 transition-all duration-300 outline-none placeholder:text-sm focus:border-yellow-400"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <button className="w-max cursor-pointer rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
