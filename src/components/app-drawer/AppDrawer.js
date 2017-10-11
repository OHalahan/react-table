import React, { Component } from 'react';
import ExtTable from '../ext-table/ExtTable';
import ExtButton from '../ext-button/ExtButton';
import './app-drawer.css';

class AppDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDelBtn: false
        };
        this.showDelBtn = false;
    }

    handlePositionChange(currX, currY) {
        // console.log(currX, currY);
    }

    handleVisibilityChange(flag) {
        this.showDelBtn = flag;
    }

    render() {
        return (
            <div>
                <ExtButton
                    clickAction = {() => this.refs.table.delColumn()}
                    visibility = {this.showDelBtn}
                    btnRole = "delCol">
                </ExtButton>
                <ExtButton
                    clickAction = {() => this.refs.table.delRow()}
                    visibility = {this.showDelBtn}
                    btnRole = "delRow">
                </ExtButton>
                <div className = "table-container">
                    <ExtTable
                        ref = "table"
                        positionCallback = {(currX, currY) => this.handlePositionChange(currX, currY)}
                        visibilityCallback = {flag => this.handleVisibilityChange(flag)}>
                    </ExtTable>
                </div>
                <ExtButton
                    clickAction = {() => this.refs.table.addColumn()}
                    btnRole = "addCol">
                </ExtButton>
                <ExtButton
                    clickAction = {() => this.refs.table.addRow()}
                    btnRole = "addRow">
                </ExtButton>
            </div>
        );
    }
}

export default AppDrawer;
