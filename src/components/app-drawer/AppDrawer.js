import React, { Component } from 'react';
import ExtTable from '../ext-table/ExtTable';
import './app-drawer.css';

class AppDrawer extends Component {
    handlePositionChange(currX, currY) {
        console.log(currX, currY);
    }
    handleVisibilityChange(flag) {
        console.log(flag);
    }
    render() {
        return (
            <div className="table-container">
            <ExtTable
                positionCallback={(currX, currY) => this.handlePositionChange(currX, currY)}
                visibilityCallback={flag => this.handleVisibilityChange(flag)}></ExtTable>
            </div>
        );
    }
}

export default AppDrawer;
