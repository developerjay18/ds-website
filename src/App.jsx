import './App.css';
import { Footer, BurgerMenu } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <BurgerMenu />
      <Outlet />
    </>
  );
}

export default App;
