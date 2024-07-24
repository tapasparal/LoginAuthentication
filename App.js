import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Register from './components/Register'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


