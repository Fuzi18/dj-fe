import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
    render(): ReactNode {
        return <div>
        <nav className="navbar">
  <Link to='/' className="nav">Főoldal</Link>
  <Link to='/tapasztalat' className="nav">Szakmaitapasztalat</Link>
  <Link to='/idopont' className="nav">Idopont</Link>
</nav>
    </div>
    }
}