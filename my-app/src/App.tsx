import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div>
        <Cabecalho/>
        <Outlet/>
        <Menu/> 
        <Rodape/>
    </div>
  )
}