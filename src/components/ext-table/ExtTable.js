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

        console.log(this.refs.table.attributes);
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

    render() {
        return (
            <table className="table" ref="table"></table>
        );
    }

}

export default ExtTable;
