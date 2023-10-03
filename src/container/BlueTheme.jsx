import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import './BlueTheme.scss';

const BlueTheme = () => {
  return(
    <main className="theme">
      <Nav></Nav>
      <div className="page__container">
        <Outlet />
      </div>
    </main>
  )
}

export default BlueTheme;