import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import Block from './component/Block';
import Sidebar from './component/Sidebar';




ReactDOM.render(
    <div className="container">
        <h1>React Pro</h1>

        <div className="row">
            <Navbar/>
        </div>

        <div className="row">
            <Block/>
            <Sidebar/>
        </div>



    </div>
    ,document.getElementById('app')
);

