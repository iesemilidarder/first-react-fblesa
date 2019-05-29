import React, {Component} from 'react';

class Sidebar extends Component {
    render() {

        return (
            <div className="container col-md-3" >
                <p>Este boton demuestra que he aprobado </p>
                <button className="navbar-toggler" type="button">
                    <span>Pulsalo</span>
                </button>

            </div>
        );
    }
}
export default Sidebar;