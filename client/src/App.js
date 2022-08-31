import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.scss';
import LoginSignUp from './pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
