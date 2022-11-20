import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leftbar from './components/Leftbar//Leftbar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Leftbar/>
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
