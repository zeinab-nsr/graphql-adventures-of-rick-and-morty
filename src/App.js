import { Routes, Route } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import CharacterInfo from './pages/CharacterInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/:id" Component={CharacterInfo} />
      </Routes>
    </div>
  );
}

export default App;
  