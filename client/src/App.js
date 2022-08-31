import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.scss';
import TopNavBar from './components/TopNavBar';
import Homepage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import ShopImages from './pages/PrintShop';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/homepage" element={<Homepage />} />
          {/* {/* <Route path="/printshop" element={<Homepage />} /> */}
          <Route path="/printshop" element={<ShopImages />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
