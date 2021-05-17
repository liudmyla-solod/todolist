import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App=()=>{
  return(
    <>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </>
  )
}

ReactDOM.render(<App/>,
  document.getElementById('root'));



