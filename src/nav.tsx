import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
    render(): ReactNode {
        return <div>
        <nav>
  <Link to='/'>Főoldal</Link>
  <Link to='/tapasztalat'>Szakmaitapasztalat</Link>
  <Link to='/idopont'>Idopont</Link>
</nav>
    </div>
    }
}