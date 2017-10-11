import React, { Component } from 'react';
import './ext-table.css';

class ExtTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currRow: null,
            currColumn: null
        };
    }

    componentDidMount() {
        this._initTable();
    }

    _initTable() {
        for (let i=0; i < 4; i++) {
            this.addRow();
        }
        for (let i=0; i < 4; i++) {
            this.addColumn();
        }
    }

    _addCell(row, place) {
        row.insertCell(place).classList.add('table__cell');
    }

    get rowCount() {
        return (this.refs.table && this.refs.table.rows) ? this.refs.table.rows.length : 0;
    }

    get columnCount() {
        return this.rowCount ? this.refs.table.rows[0].cells.length : 0;
    }

    addRow() {
        let row = this.refs.table.insertRow(this.rowCount);
        if (row.cells.length < this.columnCount) {
            for (let place=0; place < this.columnCount; place++) {
                this._addCell(row, place);
            }
        }
    }

    addColumn() {
        let place = this.columnCount;
        for (let row of this.refs.table.rows) {
            this._addCell(row, place);
        }
    }

    delRow() {
        this.refs.table.deleteRow(this.state.currRow);
        this._resetControls();
    }

    delColumn() {
        for (let row of this.refs.table.rows) {
            row.deleteCell(this.state.currColumn);
        }
        this._resetControls();
    }

    mouseOverEvent(event) {
        event.persist();
        let target = event.target;

        if (target.tagName === 'TD') {
            this.setState({
                currRow: target.parentNode.rowIndex,
                currColumn: target.cellIndex
            });
            this.props.positionCallback(target.getBoundingClientRect()['left'], target.parentNode.getBoundingClientRect()['top']);
            this.props.visibilityCallback(true);
        }
    }

    mouseLeaveEvent() {
        this.props.visibilityCallback(false);
    }

    render() {
        return (
            <table className="table" ref="table"
                onMouseOver={event => this.mouseOverEvent(event)}
                onMouseLeave={() => this.mouseLeaveEvent()}>
            </table>
        );
    }

}

export default ExtTable;
