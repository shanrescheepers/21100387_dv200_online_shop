import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import './App.scss';
import TopNavBar from './components/TopNavBar';
import Homepage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import ShopImages from './pages/PrintShop';
import AdminPage from './pages/AdminPage';
import './fonts/Calligraffitti-Regular.ttf'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/adminmanager" element={<AdminPage />} />
          <Route path="/" element={<Homepage />} />
          {/* {/* <Route path="/printshop" element={<Homepage />} /> */}
          <Route path="/printshop" element={<ShopImages />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
