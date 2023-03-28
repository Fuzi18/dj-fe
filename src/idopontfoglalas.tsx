import { Component, ReactNode } from "react";


export default class Idpontfoglalas extends Component {
    
    submit = async () =>{
        return window.alert("Köszönjük a megkeresését");
    }
    render(): ReactNode {
        return<div className="kapcsolat">
            <form onSubmit={this.submit}>
                <input type="text" required  placeholder="Név" className="xd"/>
                <br/>
                <input type="date" className="xd"/>
                <br/>
                <textarea  required placeholder="Leírás" className="xd"/>
                <br/>
                <button className="xd">Küldés</button>
            </form>
        </div>
    }
}