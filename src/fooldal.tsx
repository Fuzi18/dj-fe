import { Component, ReactNode } from "react";
import kep from './dj.jpg';


export default class Főoldal extends Component {
    render(): ReactNode {
        return<div>
            <p>Üdvözöllek DJ Petrik weboldalán!</p>

            <p>Válassz a fenti lehetőségek közül!</p>

            <img src={kep} alt="DJ" className="kep"/>
        </div>
    }

}