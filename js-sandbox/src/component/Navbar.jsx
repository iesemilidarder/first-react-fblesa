import React,{Component} from 'react';
class Navbar extends Component{

    render() {

        return (
            <nav className="navbar" color="blue">
                <button className="navbar-toggler" type="button">
                    <span>Inicio</span>
                </button>
                <button className="navbar-toggler" type="button">
                    <span>Quien Somos</span>
                </button>
                <button className="navbar-toggler" type="button">
                    <span>Un 10</span>
                </button>
                <button className="navbar-toggler" type="button">
                    <span>Aprobado</span>
                </button>
            </nav>

        );
    }
}

export default Navbar