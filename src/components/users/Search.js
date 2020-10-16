import React, { useState, useContext } from 'react';
import GithubContext from '../../context/Github/githubContext';
import AlertContext from '../../context/Alert/alertContext';
const Search = () => {
  //use the hook
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  //useState life cycle method
  const [text, setText] = useState('');
  //Onchange Function
  const onChange = (e) => setText(e.target.value);
  //OnSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  //Return
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
