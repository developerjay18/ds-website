import './App.css';
import { Header, Footer, BurgerMenu } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BurgerMenu />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
