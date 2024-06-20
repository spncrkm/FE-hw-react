import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesList from './components/Movies/Movies'

const App = () => {

  return (
    <div className='App'>
      <MoviesList />
    </div>
  );
};

export default App;
