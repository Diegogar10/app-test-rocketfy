import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import './BlueTheme.scss';
import ButtonFly from "../components/ButtonFly";

const BlueTheme = () => {

  return(
    <main className="theme">
      <ButtonFly/>
      <Nav></Nav>
      <div className="page__container">
        <Outlet />
      </div>
    </main>
  )
}

export default BlueTheme;