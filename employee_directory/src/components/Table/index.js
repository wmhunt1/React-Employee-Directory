import React, { Component } from 'react'
import "./style.css";

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            employees: [
                { id: 1, name: 'Michael Scott', department: "Sales" },
                { id: 2, name: 'Dwight Schrute', department: "Sales" },
                { id: 3, name: 'Jim Halpert', department: "Sales"},
                { id: 4, name: 'Maurice Moss', department: "IT"},
                { id: 5, name: 'Roy Trenneman', department: "IT"},
                { id: 6, name: 'Don Draper', department: "Marketing"},
                { id: 7, name: 'Cave Johnson', department: "R&D"},
                { id: 8, name: 'Adam Jensen', department: "Security"},
                { id: 9, name: 'Hermes Conrad', department: "Accounting"},
                { id: 10, name: 'Homer Simpson', department: "Energy"}
            ]
        }
    }
    renderTableData() {
        return this.state.employees.map((employee, index) => {
            const { id, name, department } = employee //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{department}</td>
                </tr>
            )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                {/* <h1 id='title'>React Dynamic Table</h1> */}
                <table id='employees'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table //exporting a component make it reusable and this is the beauty of react