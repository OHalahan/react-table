import React, { Component } from 'react';
import ExtTable from '../ext-table/ExtTable';
import ExtButton from '../ext-button/ExtButton';
import './app-drawer.css';

class AppDrawer extends Component {

    handlePositionChange(currX, currY) {
        this.refs.delColBtn.positionX = currX;
        this.refs.delRowBtn.positionY = currY + window.pageYOffset;
    }

    handleVisibilityChange(flag) {
        this.refs.delColBtn.visible = (this.refs.table.columnCount === 1) ? false : flag;
        this.refs.delRowBtn.visible = (this.refs.table.rowCount === 1) ? false : flag;
    }

    render() {
        return (
            <div>
                <ExtButton
                    clickAction = {() => this.refs.table.delColumn()}
                    ref = "delColBtn"
                    btnRole = "delCol">
                </ExtButton>
                <ExtButton
                    clickAction = {() => this.refs.table.delRow()}
                    ref = "delRowBtn"
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
