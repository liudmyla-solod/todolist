import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

  const todoData = [
    { label: 'Study React.', important: true, id: 1 },
    { label: 'Find work.', important: false, id: 2 },
    { label: 'Happy working!', important: false, id: 3 }
  ];

  return (
    <>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={ todoData }/>
    </>
  );
};

ReactDOM.render(<App/>,
  document.getElementById('root'));



