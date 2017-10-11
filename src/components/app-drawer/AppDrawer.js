import React, { Component } from 'react';
import ExtTable from '../ext-table/ExtTable';
import './app-drawer.css';

class AppDrawer extends Component {
    render() {
        return (
            <div className="table-container">
            <ExtTable/>
            </div>
        );
    }
}

export default AppDrawer;
