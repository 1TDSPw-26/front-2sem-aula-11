import { Link, Outlet } from 'react-router';
import ObservadorDeRota from './components/ObservadorDeRota';

export default function App() {
  return (
    <>
      <ObservadorDeRota />

      <header>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>© Sistema de Produtos</p>
      </footer>
    </>
  );
}